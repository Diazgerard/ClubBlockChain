"use client";;
import { Box, Lock, Sparkles, User, Wallet } from "lucide-react";
import { GlowingEffect } from "./UI/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <ul
      className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 bg-black p-4 md:p-6 xl:p-8">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Wallet className="h-4 w-4 text-white" />}
        title="Finanzas Descentralizadas (DeFI)"
        description="Accede a préstamos, ahorros y pagos sin bancos" />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<User className="h-4 w-4 text-white" />}
        title="Identidad digital"
        description="Gestiona tu identidad de forma segura, con privacidad y control total sobre tus datos gracias a blockchain." />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Box className="h-4 w-4 text-white" />}
        title="Trazabilidad en la cadena de suministros"
        description="Sigue el recorrido de un producto desde su origen" />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-white" />}
        title="Contratos Inteligentes"
        description="Automatiza acuerdos sin necesidad de confianza" />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Lock className="h-4 w-4 text-white" />}
        title="Integridad de los datos"
        description="Una vez que una transacción es validada y registrada, no puede ser modificada ni eliminada, asegurando un registro histórico confiable e irrefutable que impide el fraude" />
    </ul>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-800 bg-black md:rounded-3xl ">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#222]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-400 bg-gray-900 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
