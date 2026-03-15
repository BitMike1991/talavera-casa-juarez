export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    // Send email via Mailgun
    const mailgunDomain = 'mg.bluewiseai.com';
    const mailgunKey = process.env.MAILGUN_API_KEY;

    const formData = new URLSearchParams();
    formData.append('from', `Talavera Casa Juárez Website <noreply@${mailgunDomain}>`);
    formData.append('to', 'talaveracasajuarez@gmail.com');
    formData.append('subject', `New inquiry — ${interest || 'General'} — from ${name}`);
    formData.append('text', [
      `New contact form submission from talaveracasajuarez.com`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Interest: ${interest || 'Not specified'}`,
      ``,
      `Message:`,
      message,
    ].join('\n'));

    const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`api:${mailgunKey}`).toString('base64'),
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Mailgun error: ${response.status}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
