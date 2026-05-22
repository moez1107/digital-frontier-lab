import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const SYSTEM_PROMPT = `You are the AI assistant for ITnIS Consulting, a premium ICT and Information Security consultancy firm based in Islamabad, Pakistan.

About ITnIS:
- Tagline: "Designing & Securing the Digital Future"
- Services: ICT Consultancy, Information Security Consultancy, Unified Communication, Smart City/Building, Audits (Data Center, Information Security, EM, Energy), Trainings
- Specialties: Data Center Design, Active/Passive Network, Wireless Solutions, ISO 27001 Compliance, Physical Security & Access Control, CCTV, VoIP/IPTV
- Notable projects: Arena 5-Star Cinema (security audit), Abdullah Shah Ghazi Mazaar (CCTV & access control), Fauji Fertilizer Company (ISO 27001 ISMS), Double Tree Hilton Islamabad
- Contact: info@itnis.com, +92 333 5626269
- Office: Office #1, 5th Floor, 44-A, Civic Center, Bahria Town, Islamabad

Be concise (2-4 short paragraphs max), professional, and luxury-brand in tone. Focus on understanding the visitor's needs and recommending relevant services. When appropriate, suggest contacting info@itnis.com for a consultation. Do not invent pricing or guarantees.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = await request.json();
          if (!Array.isArray(messages)) {
            return new Response(JSON.stringify({ error: "Invalid messages" }), { status: 400 });
          }
          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response(JSON.stringify({ error: "AI not configured" }), { status: 500 });

          const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages.slice(-12)],
              stream: true,
            }),
          });

          if (upstream.status === 429 || upstream.status === 402) {
            return new Response(JSON.stringify({ error: upstream.status === 429 ? "rate_limited" : "no_credits" }), { status: upstream.status });
          }
          if (!upstream.ok || !upstream.body) {
            console.error("AI gateway error", upstream.status);
            return new Response(JSON.stringify({ error: "AI error" }), { status: 500 });
          }
          return new Response(upstream.body, { headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" } });
        } catch (e) {
          console.error("chat handler error", e);
          return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
        }
      },
    },
  },
});
