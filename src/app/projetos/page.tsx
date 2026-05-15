import { Metadata } from "next";
import { ProjetosPageContent } from "./projetos-page-content";

export const metadata: Metadata = {
  title: "Projetos / Projects | Alan Regis",
  description:
    "Projetos de desenvolvimento backend: sistemas de segurança, APIs, automação e mais. / Backend development projects: security systems, APIs, automation and more.",
};

export default function ProjetosPage() {
  return <ProjetosPageContent />;
}
