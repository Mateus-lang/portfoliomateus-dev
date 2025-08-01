// src/app/api/send/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Por favor preencha todos os campos.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mateusalmeida0924@gmail.com'],
      subject: `Nova mensagem de ${name} do seu Portfólio`,
      replyTo: email,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Ocorreu um erro ao enviar o e-mail.' }, { status: 500 });
  }
}