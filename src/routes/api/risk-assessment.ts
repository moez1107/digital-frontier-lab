import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

const Body = z.object({
  size: z.string().min(1).max(50),
  industry: z.string().min(1).max(80),
  security: z.string().min(1).max(50),
  infra: z.string().max(500).optional().default(""),
});

const SYSTEM = `You are a senior cybersecurity risk analyst at ITnIS Consulting. Given a brief profile of a company, produce a concise, professional risk assessment.

Respond ONLY with valid JSON matching this exact shape:
{
  "score": <number 0-100 where higher = better posture>,
  "level": "<Low|Moderate|High|Critical> Risk",
  "summary": "<2-3 sentence professional summary of their posture and key risks>",
  "recommendations": ["<service 1>", "<service 2>", "<service 3>", "<service 4>"]
}

Recommendations should be drawn from ITnIS services: ICT Consultancy, Information Security Consultancy, ISO 27001 Compliance, Data Center Design, Physical Security & Access Control, Unified Communication, Smart Building, Information Security Audit, Vulnerability Assessment, Security Awareness Training.`;

export const Route = createFileRoute("/api/risk-assessment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = Body.safeParse(json);
          if (!parsed.success) return new Response(JSON.stringify({ error: "Invalid input" }), { status: 400 });
          const { size, industry, security, infra } = parsed.data;

          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response(JSON.stringify({ error: "AI not configured" }), { status: 500 });

          const userPrompt = `Company size: ${size}\nIndustry: ${industry}\nCurrent security maturity: ${security}\nInfrastructure notes: ${infra || "n/a"}`;

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                { role: "system", content: SYSTEM },
                { role: "user", content: userPrompt },
              ],
              response_format: { type: "json_object" },
            }),
          });

          if (res.status === 429 || res.status === 402) {
            return new Response(JSON.stringify({ error: res.status }), { status: res.status });
          }
          if (!res.ok) {
            console.error("risk gateway error", res.status, await res.text().catch(() => ""));
            return new Response(JSON.stringify({ error: "AI error" }), { status: 500 });
          }
          const data = await res.json();
          const content = data.choices?.[0]?.message?.content ?? "{}";
          let parsedContent;
          try { parsedContent = JSON.parse(content); }
          catch { parsedContent = { score: 50, level: "Moderate Risk", summary: "Unable to parse AI response.", recommendations: [] }; }
          return new Response(JSON.stringify(parsedContent), { headers: { "Content-Type": "application/json" } });
        } catch (e) {
          console.error("risk handler error", e);
          return new Response(JSON.stringify({ error: "server error" }), { status: 500 });
        }
      },
    },
  },
});
