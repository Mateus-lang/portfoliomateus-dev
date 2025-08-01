import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const MyProjects = () => {
  return (
    <div className="mt-5 flex h-full w-[85vw] flex-col justify-center rounded-lg p-5 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] lg:w-full">
      <h2 className="text-xl font-bold">Meus Projetos</h2>
      <Image
        src="/finance-ai.png"
        alt="Projeto 1"
        className="mt-3 rounded-lg"
        width={500}
        height={200}
      />

      <ScrollArea className="scrollbar-none h-[500px] overflow-y-auto pt-3">
        <div className="mt-3 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-blue-500">Finance-AI</h3>

          <h3 className="text-base font-bold text-blue-500">Stack:</h3>
          <p className="text-sm">
            Next.js, React, Tailwind CSS, PostgreSQL, Prisma ORM, Clerk, Stripe,
            OpenAI, Shadcn UI
          </p>

          <h3 className="pt-4 text-base font-bold text-blue-500">
            Descrição do Projeto:
          </h3>

          <p className="text-sm">
            O Finance AI é uma plataforma de gestão financeira que utiliza
            inteligência artificial para monitorar as movimentações financeiras
            dos usuários e oferecer insights personalizados. O objetivo é
            facilitar o controle do orçamento pessoal.
          </p>
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-base font-bold text-blue-500">
              Principais funcionalidades:
            </p>
            <p className="text-sm">
              <span className="font-bold">Dashboard Financeiro:</span> Apresenta
              um resumo do saldo, total de receitas, despesas e investimentos,
              além de gráficos de despesas por categoria e as últimas transações
              realizadas.
            </p>
            <p className="text-sm">
              <span className="font-bold">Gerenciamento de Transações: </span>
              Permite adicionar, editar e visualizar todas as transações
              financeiras, classificando-as por tipo (depósito, despesa,
              investimento), categoria e método de pagamento.
            </p>
            <p className="text-sm">
              <span className="font-bold">Relatórios com IA: </span>
              Usuários do plano premium podem gerar relatórios com insights
              sobre suas finanças, com dicas e orientações de como melhorar sua
              vida financeira, utilizando a tecnologia da OpenAI.
            </p>
            <p className="text-sm">
              <span className="font-bold">Planos de Assinatura: </span>Oferece
              um plano básico com limitações e um plano premium com transações
              ilimitadas e acesso aos relatórios de IA, com pagamentos
              gerenciados pelo Stripe.
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <p className="text-base font-bold text-blue-500">
              Destaques Técnicos:
            </p>
            <p className="text-sm">
              <span className="font-bold">Server Actions: </span> O projeto faz
              uso de Server Actions do Next.js para operações de backend, como a
              criação e atualização de transações, de forma segura e eficiente.
            </p>
            <p className="text-sm">
              <span className="font-bold">Integração com OpenAI: </span>
              Utiliza a API da OpenAI para gerar relatórios financeiros
              personalizados, agregando valor ao produto com o uso de
              inteligência artificial.
            </p>
            <p className="text-sm">
              <span className="font-bold">Integração com Stripe: </span>A
              integração com o Stripe para o gerenciamento de assinaturas é
              feita de forma robusta, utilizando webhooks para sincronizar o
              status dos planos dos usuários.
            </p>
            <p className="text-sm">
              <span className="font-bold">Componentização com Shadcn UI: </span>
              A interface é construída com componentes reutilizáveis e
              acessíveis da biblioteca Shadcn UI, o que agiliza o
              desenvolvimento e garante uma boa experiência de usuário.
            </p>
            <p className="text-sm">
              <span className="font-bold">Banco de Dados com Prisma: </span>O
              uso do Prisma como ORM simplifica as operações de banco de dados e
              garante a segurança e a integridade dos dados.
            </p>
            <Button className="my-3 bg-gradient-to-r from-blue-800 to-blue-500 font-bold text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400">
              Ver Projeto
            </Button>
          </div>
        </div>
      </ScrollArea>
      
    </div>
  );
};

export default MyProjects;
