import { Metadata } from "next";
import { ContatoPageContent } from "./contato-page-content";

export const metadata: Metadata = {
  title: "Contato / Contact | Alan Regis",
  description:
    "Entre em contato para oportunidades, projetos ou apenas para trocar uma ideia. / Get in touch for opportunities, projects or just to chat.",
};

export default function ContatoPage() {
  return <ContatoPageContent />;
}
