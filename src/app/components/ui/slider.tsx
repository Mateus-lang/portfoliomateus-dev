import Image from "next/image";

const Slider = () => {
  return ( 
    <div className="mt-5 flex h-full w-[85vw] flex-col justify-center rounded-lg p-3 shadow-[-1px_6px_16px_0px_rgba(5,_5,_5,_0.4)] lg:w-full">
              <h2 className="pb-5 text-lg font-bold">Minhas Habilidades</h2>
              <div className="w-full overflow-hidden">
                <div className="animate-scroll flex w-max gap-10">
                  {[...Array(2)].map((_, index) => (
                    <div key={index} className="flex gap-10 px-2 text-4xl">
                      {/* Nextjs icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/nextjs-icon.svg"
                          width={50}
                          height={50}
                          alt="Next.js"
                        />
                        <span className="text-xs">Next.js</span>
                      </div>
    
                      {/* React icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/react-icon.svg"
                          width={50}
                          height={50}
                          alt="React"
                        />
                        <span className="text-xs">React</span>
                      </div>
    
                      {/* Javascript icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/javascript-icon.svg"
                          width={50}
                          height={50}
                          alt="JavaScript"
                        />
                        <span className="text-xs">JavaScript</span>
                      </div>
    
                      {/* Tailwind CSS Icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/tailwindcss-icon.svg"
                          width={50}
                          height={50}
                          alt="Tailwind CSS"
                        />
                        <span className="text-xs">Tailwind CSS</span>
                      </div>
    
                      {/* TypeScript Icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/typescript-icon.svg"
                          width={50}
                          height={50}
                          alt="TypeScript"
                        />
                        <span className="text-xs">TypeScript</span>
                      </div>
    
                      {/* MySql Icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/mysql-icon.svg"
                          width={50}
                          height={50}
                          alt="MySQL"
                        />
                        <span className="text-xs">MySQL</span>
                      </div>
    
                      {/* Docker Icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/docker-icon.svg"
                          width={50}
                          height={50}
                          alt="Docker"
                        />
                        <span className="text-xs">Docker</span>
                      </div>
    
                      {/* PostgreSQL Icon */}
                      <div className="flex flex-col items-center">
                        <Image
                          src="/postgresql-icon.svg"
                          width={50}
                          height={50}
                          alt="PostgreSQL"
                        />
                        <span className="text-xs">PostgreSQL</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
   );
}
 
export default Slider;