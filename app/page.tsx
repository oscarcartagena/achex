import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Línea de tiempo ACHEX — 2018 a 2026",
  description:
    "ACHEX nació en 2018 como una iniciativa de profesionales del sector XR chileno. Se constituyó legalmente el 22 de julio de 2022 y completó su ciclo en 2026.",
};

export default function Page() {
  return <HomePage />;
}
