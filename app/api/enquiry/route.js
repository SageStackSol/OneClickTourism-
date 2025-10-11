import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

export async function POST(req) {
  try {
    const data = await req.json();

    // Save to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("travel_agency");
    await db.collection("enquiries").insertOne(data);

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "hemanthdevelops@gmail.com",
      subject: `New Travel Enquiry from ${data.firstName} ${data.lastName}`,
      text: `New enquiry details:\n\n${JSON.stringify(data, null, 2)}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
