"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LinksUteis = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Para mostrar o status do envio

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(`Erro: ${data.error || "Ocorreu um problema."}`);
      }
    } catch (error) {
      setStatus("Erro: Não foi possível conectar ao servidor.");
    }
  };

  return (
    <div className="mt-5 flex h-full w-[85vw] flex-col justify-center rounded-lg p-5 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] lg:w-full">
      <Popover onOpenChange={() => setStatus("")}>
        <PopoverTrigger asChild>
          <Button>Entre em contato comigo</Button>
        </PopoverTrigger>
        <PopoverContent className="mb-[30px] w-full min-w-[80vw] border-slate-700 bg-slate-900 text-white">
          <div className="flex flex-col gap-4">
            <div className="space-y-0">
              <h4 className="text-center text-lg font-bold">
                Por favor, preencha o formulário
              </h4>
            </div>

            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              className="grid w-full max-w-sm items-center gap-4"
            >
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">Nome:</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="message">Mensagem:</Label>
                <Input
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Enviar</Button>
              {status && <p className="text-center text-sm">{status}</p>}
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LinksUteis;
