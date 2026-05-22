import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { mainServices, detailedServices, projects, blogs } from "@/data/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const BASE_URL = "";
        const paths = [
          "/", "/about-us", "/services", "/our-projects", "/our-blogs", "/contact-us",
          ...mainServices.map((s) => `/services/${s.slug}`),
          ...detailedServices.map((s) => `/services/${s.slug}`),
        ];
        const urls = paths.map((p) =>
          `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});

// reference unused to keep imports tree-shake safe in some bundlers
void projects; void blogs;
