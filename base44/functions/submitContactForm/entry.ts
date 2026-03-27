import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, phone, zipcode, message, honeypot } = await req.json();

    // Honeypot spam check
    if (honeypot) {
      return Response.json({ success: true }); // silently ignore spam
    }

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    await base44.integrations.Core.SendEmail({
      to: 'info@prolinegaragedoorllc.com',
      subject: `New Contact Form Submission - ${name}`,
      body: `New lead from website:\n\nName: ${name}\nPhone: ${phone}\nZip Code: ${zipcode || 'N/A'}\nMessage: ${message || 'N/A'}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});