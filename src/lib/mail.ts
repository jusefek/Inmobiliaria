import nodemailer from 'nodemailer';

interface AdminNotificationData {
    subject: string;
    name: string;
    email: string;
    propertyUrl?: string;
    amount?: number;
    comments?: string;
}

export async function sendAdminNotification(data: AdminNotificationData) {
    try {
        // Check configuration
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
            throw new Error("Email configuration missing");
        }

        // Configure Nodemailer transporter (Gmail)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info.teselaprojects@gmail.com',
            replyTo: data.email,
            subject: data.subject,
            text: `
NEW AUDIT REQUEST ATTEMPT

Name: ${data.name}
Email: ${data.email}
Property URL: ${data.propertyUrl || 'N/A'}
Amount: €${data.amount || 'N/A'}

${data.comments ? `Comments:\n${data.comments}` : ''}

---
This notification was sent when the user submitted the audit request form.
      `,
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
    🔐 New Audit Request Attempt
  </h2>
  
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr style="background: #f3f4f6;">
      <td style="padding: 10px; font-weight: bold; width: 150px;">Name:</td>
      <td style="padding: 10px;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 10px; font-weight: bold;">Email:</td>
      <td style="padding: 10px;"><a href="mailto:${data.email}">${data.email}</a></td>
    </tr>
    <tr style="background: #f3f4f6;">
      <td style="padding: 10px; font-weight: bold;">Property URL:</td>
      <td style="padding: 10px;">
        ${data.propertyUrl ? `<a href="${data.propertyUrl}" target="_blank">${data.propertyUrl}</a>` : 'N/A'}
      </td>
    </tr>
    <tr>
      <td style="padding: 10px; font-weight: bold;">Amount:</td>
      <td style="padding: 10px; color: #059669; font-size: 18px; font-weight: bold;">
        €${data.amount || 'N/A'}
      </td>
    </tr>
    ${data.comments ? `
    <tr style="background: #f3f4f6;">
      <td style="padding: 10px; font-weight: bold; vertical-align: top;">Comments:</td>
      <td style="padding: 10px;">
        <blockquote style="background: #fff; padding: 10px; border-left: 4px solid #3b82f6; margin: 0;">
          ${data.comments.replace(/\n/g, '<br>')}
        </blockquote>
      </td>
    </tr>
    ` : ''}
  </table>
  
  <p style="color: #6b7280; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    ⚡ This notification was sent when the user submitted the audit request form.
  </p>
</div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('✅ Admin notification sent successfully');
        return { success: true };

    } catch (error) {
        console.error("❌ Error sending admin notification:", error);
        // Don't throw - we don't want to block the user flow if email fails
        return { success: false, error };
    }
}
