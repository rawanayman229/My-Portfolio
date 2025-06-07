'use server';

import { Resend } from 'resend';

// Ensure the API key is not undefined
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
throw new Error("RESEND_API_KEY is not set in the environment variables.");
}
const resend = new Resend(resendApiKey);

export const sendEmail = async (formData: FormData) => {
const senderEmail = formData.get('email');
const subject = formData.get('subject');
const message = formData.get('message');

  // Basic validation
if (!senderEmail || typeof senderEmail !== 'string') {
    return { error: 'Invalid sender email' };
}
if (!subject || typeof subject !== 'string') {
    return { error: 'Invalid subject' };
}
if (!message || typeof message !== 'string') {
    return { error: 'Invalid message' };
}

try {
    const { data, error } = await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>', 
    to: 'rawanrooney229@gmail.com', 
    subject: subject,
    replyTo: senderEmail, 
    text: `You have a new message from ${senderEmail}:\n\n${message}`,
    });

    if (error) {
    console.error("Resend error:", error);
    return { error: 'Failed to send email.' };
    }

    return { success: true, data };

} catch (error) {
console.error("Sending email failed:", error);
    return { error: 'An unexpected error occurred.' };
}
};