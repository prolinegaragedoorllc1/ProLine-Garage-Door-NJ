import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);

  const body = await req.json();
  const { name, phone, zipcode, message, honeypot } = body;

  // Honeypot check
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !phone) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const res = await fetch('https://formspree.io/f/xjgpgbpq', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name, phone, zipcode, message }),
  });

  if (!res.ok) {
    const text = await res.text();
    return Response.json({ error: 'Formspree error: ' + text }, { status: 500 });
  }

  return Response.json({ ok: true });
});