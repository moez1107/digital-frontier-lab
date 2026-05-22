import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
