import OpenAI from "openai";
import { sql } from "../config/db.js";
import { clerkClient } from "@clerk/express";
import FormData from "form-data";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import { sendEmail } from "../config/nodemailer.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const pdfParse = require("pdf-parse");

const getUserEmail = async (userId) => {
    const user = await clerkClient.users.getUser(userId);
    return user.emailAddresses[0].emailAddress;
};
const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateArticle = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, length } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "Limit reached. Upgrade to continue." });
        }

       if (!prompt || !length) {
      return res.json({
        success: false,
        message: "Prompt and length are required.",
      });
    }

    // 🔥 Convert words → tokens properly
    const maxTokens = Math.floor(length * 2.2); 
    // Example: 1200 words ≈ 1900 tokens

    const response = await AI.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content: `
You are a professional SEO blog writer.
Always generate detailed, long-form, well-structured articles.
Use proper markdown formatting with headings.
Never generate short summaries.
`,
        },
        {
          role: "user",
          content: `
Write a comprehensive article about: "${prompt}"

Requirements:
- Minimum ${length} words
- Use proper markdown headings (##, ###)
- Include an engaging introduction
- Include multiple detailed sections
- Add examples where appropriate
- End with a strong conclusion
- Do NOT write a short answer
`,
        },
      ],
      temperature: 0.8,
      max_output_tokens: maxTokens,
    });

        // const response = await AI.chat.completions.create({
        //     model: "gemini-2.5-flash",
        //     messages: [
        //         {
        //             role: "user",
        //             content: prompt,
        //         },
        //     ],
        //     temperature: 0.7,
        //     max_tokens: length,
        // });

        const content = response.choices[0].message.content;

        await sql`
          INSERT INTO creations (user_id, prompt, content, type)
          VALUES (${userId}, ${prompt}, ${content}, 'article')
        `;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            });
        }

        const userEmail = await getUserEmail(userId);
        await sendEmail(
            userEmail,
            "📝 Your AI-Generated Article is Ready",
            `<h2>Your Article</h2>
       <p><strong>Prompt:</strong> ${prompt}</p>
       <hr/>
       <p>${content}</p>`
        );

        res.json({ success: true, content });

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const generateBlogTitle = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "Limit reached. Upgrade to continue." });
        }

        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                { role: "user", content: prompt },],
            temperature: 0.7,
            max_tokens: 100,
        });

        const content = response.choices[0].message.content;

        await sql`
          INSERT INTO creations (user_id, prompt, content, type)
          VALUES (${userId}, ${prompt}, ${content}, 'blog-title')
        `;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            });
        }

        const userEmail = await getUserEmail(userId);
        await sendEmail(
            userEmail,
            "📝 Your AI-Generated Blog Title is Ready",
            `<h2>Blog Title Result</h2>
       <p><strong>Prompt:</strong> ${prompt}</p>
       <hr/>
       <p>${content}</p>`
        );

        res.json({ success: true, content });

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const generateImage = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, publish } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "This feature is only available for premium subscriptions" });
        }

        const formData = new FormData()
        formData.append('prompt', prompt)
        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API_KEY, },
            responseType: "arraybuffer",
        })

        const base64Image = `data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;

        const { secure_url } = await cloudinary.uploader.upload(base64Image)

        await sql` INSERT INTO creations (user_id, prompt, content, type, publish)
VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${publish ?? false})
`;

        const userEmail = await getUserEmail(userId);
        await sendEmail(
            userEmail,
            "🖼️ Your AI-Generated Image is Ready",
            `<h2>Your Image</h2>
       <p><strong>Prompt:</strong> ${prompt}</p>
       <img src="${secure_url}" />`
        );

        res.json({ success: true, content: secure_url });

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};
export const removeImageBackground = async (req, res) => {
    try {
        const { userId } = req.auth();
        const image = req.file;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "This feature is only available for premium subscriptions" });
        }

        const { secure_url } = await cloudinary.uploader.upload(image.path, {
            transformation: [
                {
                    effect: 'background_removal',
                    background_removal: 'remove_the_background'
                }
            ]
        })

        await sql` INSERT INTO creations (user_id, prompt, content, type)
VALUES (${userId}, 'Remove background from image', ${secure_url}, 'image')
`;


        res.json({ success: true, content: secure_url });

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};
export const removeImageObject = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { object } = req.body;
        const image = req.file;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "This feature is only available for premium subscriptions" });
        }



        const { public_id } = await cloudinary.uploader.upload(image.path)

        const imageUrl = cloudinary.url(public_id, {
            transformation: [{ effect: `gen_remove:${object}` }],
            resource_type: 'image'
        })

        await sql` INSERT INTO creations (user_id, prompt, content, type)
VALUES (${userId}, ${`Removed ${object} from image`}, ${imageUrl}, 'image')
`;

        res.json({ success: true, content: imageUrl })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const resumeReview = async (req, res) => {
    try {
        const { userId } = req.auth();
        const resume = req.file;
        const plan = req.plan;
        const free_usage = req.free_usage;


        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "This feature is only available for premium subscriptions" });
        }

        if (resume.size > 5 * 1024 * 1024) {
            return res.json({ success: false, message: "Resume file size exceeds allowed size (5MB)." })
        }

        const dataBuffer = fs.readFileSync(resume.path)
        // const pdfData = await pdf(dataBuffer)
        const pdfData = await pdfParse(dataBuffer);
        console.log(pdfData.text);

        const prompt = `Review the following resume and provide constructive
feedback on its strengths, weaknesses, and areas for improvement. Resume
Content: \n\n${pdfData.text}`

        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [{ role: "user", content: prompt, }],
            temperature: 0.7,
            max_tokens: 1000,
        });

        const content = response.choices[0].message.content

        await sql`
  INSERT INTO creations (user_id, prompt, content, type)
  VALUES (
    ${userId}, 
    ${'Review the uploaded resume'}, 
    ${content}, 
    ${'resume-review'}
  )
`;


        const userEmail = await getUserEmail(userId);
        await sendEmail(
            userEmail,
            "📄 Your Resume Review is Ready",
            `<h2>Resume Review</h2>
       <p>${content}</p>`
        );
        res.json({ success: true, content })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
};

