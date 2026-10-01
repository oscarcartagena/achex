import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#e8f4f8_0%,#f7f6f3_52%,#f4f0e8_100%)]"
      />
      <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <Image
          src="/logo-wordmark.png"
          alt="Asociación Chilena de Experiencias Inmersivas"
          width={480}
          height={220}
          priority
          className="h-auto w-full max-w-[440px]"
        />
        <h1 className="mt-14 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl md:text-[3.5rem] md:leading-[1.05]">
          ACHEX A.G. cierra sus puertas
          <span className="mt-4 block text-[0.55em] font-medium tracking-[0.08em] text-[#32a4dc]">
            2018-2026
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-neutral-700 sm:text-xl">
          Agradecemos tu interés y apoyo en estos últimos años pero llegó la
          hora de decir adiós. Más información pronto.
        </p>
      </main>
    </div>
  );
}
