import { SMTPClient } from "emailjs";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const client = new SMTPClient({
  user: "contactme123go@gmail.com",
  password: "contactme333",
  host: "smtp.gmail.com",
  ssl: true,
});

export async function POST(requests) {
  const request = await requests.json();
  console.log(request);
  const message = {
    text: request.message,
    from: "contactme123go@gmail.com",
    to: request.email,
    subject: request.message,
  };
  try {
    let res = await client.sendAsync(message);
    console.log(res);
    return new Response(JSON.stringify("message sent successfully"), {
      headers: {
        "Content-Type": "applilcation/json",
      },
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify(err), {
      headers: {
        "Content-Type": "applilcation/json",
      },
      status: 400,
    });
  }
}

const a=async ()=>{
 

try {
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {},
    {
      publicKey: 'YOUR_PUBLIC_KEY',
    },
  );
  console.log('SUCCESS!');
} catch (err) {
  if (err instanceof EmailJSResponseStatus) {
    console.log('EMAILJS FAILED...', err);
    return;
  }

  console.log('ERROR', err);
}
}
