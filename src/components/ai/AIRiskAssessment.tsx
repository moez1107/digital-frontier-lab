import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Loader2, Sparkles } from "lucide-react";

const SIZES = ["1-50", "51-250", "251-1000", "1000+"];
const INDUSTRIES = ["Government", "Finance", "Healthcare", "Manufacturing", "Hospitality", "Energy", "Education", "Other"];
const LEVELS = ["None", "Basic", "Intermediate", "Advanced"];

type Result = { score: number; level: string; summary: string; recommendations: string[] };

export function AIRiskAssessment() {
  const [form, setForm] = useState({ size: SIZES[1], industry: INDUSTRIES[0], security: LEVELS[1], infra: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null); setResult(null);
    try {
      const res = await fetch("/api/risk-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.status === 429) { setError("Too many requests. Please try again in a moment."); return; }
      if (res.status === 402) { setError("AI credits exhausted. Please contact info@itnis.com."); return; }
      if (!res.ok) throw new Error("Assessment failed");
      const data = (await res.json()) as Result;
      setResult(data);
    } catch (e) {
      console.error(e);
      setError("Could not generate assessment. Please try again.");
    } finally { setLoading(false); }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <motion.form
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        onSubmit={submit}
        className="rounded-2xl border border-border bg-card p-8 shadow-card"
      >
        <div className="flex items-center gap-2 text-gold">
          <Sparkles className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">AI-Powered</span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy">Free Security Risk Assessment</h3>
        <p className="mt-2 text-sm text-muted-foreground">Get an instant AI-generated risk profile and service recommendations.</p>

        <div className="mt-6 space-y-4">
          <Field label="Company Size">
            <select value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="input">
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Industry">
            <select value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className="input">
              {INDUSTRIES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Current Security Maturity">
            <select value={form.security} onChange={(e) => setForm({ ...form, security: e.target.value })} className="input">
              {LEVELS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Existing Infrastructure (optional)">
            <textarea
              value={form.infra} onChange={(e) => setForm({ ...form, infra: e.target.value })}
              placeholder="e.g. on-prem data center, hybrid cloud, distributed branches…"
              rows={3} maxLength={500} className="input"
            />
          </Field>
        </div>

        <button type="submit" disabled={loading}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold disabled:opacity-60">
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Analysing…</> : <><Shield className="h-4 w-4" /> Generate Risk Profile</>}
        </button>
        {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

        <style>{`.input{width:100%;border-radius:.375rem;border:1px solid var(--border);background:var(--background);padding:.625rem .75rem;font-size:.875rem}.input:focus{outline:none;border-color:var(--gold)}`}</style>
      </motion.form>

      <div className="rounded-2xl border border-border bg-gradient-to-br from-navy to-navy-deep p-8 text-white">
        {!result && !loading && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <Shield className="h-12 w-12 text-gold" />
            <h4 className="mt-4 font-display text-xl">Your assessment will appear here</h4>
            <p className="mt-2 text-sm text-white/60">Fill the form and our AI will analyse your security posture instantly.</p>
          </div>
        )}
        {loading && <div className="flex h-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-gold" /></div>}
        {result && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">Risk Score</p>
            <div className="mt-2 flex items-end gap-3">
              <span className="font-display text-6xl text-gradient-gold">{result.score}</span>
              <span className="pb-2 text-sm text-white/70">/ 100 — {result.level}</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div initial={{ width: 0 }} animate={{ width: `${result.score}%` }} transition={{ duration: 1 }} className="h-full gradient-gold" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/80">{result.summary}</p>
            <h5 className="mt-6 font-display text-lg text-gold">Recommended Services</h5>
            <ul className="mt-3 space-y-2 text-sm">
              {result.recommendations.map((r, i) => (
                <li key={i} className="flex gap-2"><span className="text-gold">→</span> {r}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
