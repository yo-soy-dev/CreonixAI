import { sql } from "../config/db.js";
import { sendEmail } from "../config/nodemailer.js";
import { clerkClient } from "@clerk/express";


const getUserEmail = async (userId) => {
  const user = await clerkClient.users.getUser(userId);
  return user.emailAddresses[0].emailAddress;
};



export const getUserCreations = async (req, res) => {
    try {
        const { userId } = req.auth()

        const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;

        res.json({ success: true, creations });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getPublishedCreations = async (req, res) => {
    try {
        const creations = await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;

        res.json({ success: true, creations });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const toggleLikeCreation = async (req, res) => {
    try {
        const { userId } = req.auth()
        const { id } = req.body

        const creations = await sql`SELECT * FROM creations WHERE id = ${id}`;
        const creation = creations[0];

        if (!creation) {
            return res.json({ success: false, message: "Creation not found" })
        }

        const currentLikes = creation.likes || [];
        const userIdStr = userId.toString();
        let updatedLikes;
        let message;

        if (currentLikes.includes(userIdStr)) {
            updatedLikes = currentLikes.filter((user) => user !== userIdStr);
            message = 'Creation Unliked'
        } else {
            updatedLikes = [...currentLikes, userIdStr]
            message = 'Creation Liked'
        }

        const formattedArray = `${updatedLikes.join(',')}`

        // await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id = ${id}`;
         await sql`UPDATE creations SET likes = ${updatedLikes}::text[] WHERE id = ${id}`;

         const creatorEmail = await getUserEmail(creation.user_id);
        const likerEmail = await getUserEmail(userId); // optional: show who liked it

        await sendEmail(
          creatorEmail,
          "❤️ Your Creation Got a New Like!",
          `<h2>${message}</h2>
           <p>Your creation titled "<strong>${creation.prompt}</strong>" was ${message.toLowerCase()} by a user.</p>
           <p>Liker: ${likerEmail}</p>`
        );

        res.json({ success: true, message });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}