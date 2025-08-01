import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LinksUteis = () => {
  return (
    <div className="mt-5 flex h-full w-[85vw] flex-col justify-center rounded-lg p-5 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] lg:w-full">
      <Popover>
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
            <div className="grid w-full max-w-sm items-center gap-4">
              <div className="grid w-full items-center gap-2">
                <Label>Nome:</Label>
                <Input id="name" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label>Email:</Label>
                <Input id="email" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label>Mensagem:</Label>
                <Input id="message" />
              </div>
              <Button>
                Enviar
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LinksUteis;
