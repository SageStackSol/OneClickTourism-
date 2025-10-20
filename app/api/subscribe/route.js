import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { input } = await req.json();

    if (!input) {
      return Response.json({ error: "Missing input." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS, 
      },
    });

    // Email details
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "kripzenthings@gmail.com", 
      subject: "New Subscription Alert",
      text: `New user submitted: ${input}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
