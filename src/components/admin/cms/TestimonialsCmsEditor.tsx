import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCmsSection, type CmsTestimonials, type CmsTestimonial } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const BLANK: CmsTestimonial = { quote: "", name: "", role: "" };

const DEFAULTS: CmsTestimonials = {
  eyebrow: "",
  title: "",
  items: [{ ...BLANK }],
};

export function TestimonialsCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("testimonials");
  const [form, setForm] = useState<CmsTestimonials>(DEFAULTS);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function setTop<K extends keyof Omit<CmsTestimonials, "items">>(key: K, value: CmsTestimonials[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  }

  function setItem(index: number, patch: Partial<CmsTestimonial>) {
    setForm((prev) => {
      const items = prev.items.map((t, i) => (i === index ? { ...t, ...patch } : t));
      return { ...prev, items };
    });
    setDirty(true);
  }

  function addItem() {
    setForm((prev) => ({ ...prev, items: [...prev.items, { ...BLANK }] }));
    setDirty(true);
  }

  function removeItem(index: number) {
    setForm((prev) => ({ ...prev, items: prev.items.filter((_, i) => i !== index) }));
    setDirty(true);
  }

  async function handleSave() {
    const ok = await save(form);
    if (ok) setDirty(false);
  }

  function handleCancel() {
    if (data) setForm({ ...DEFAULTS, ...data });
    setDirty(false);
  }

  if (loading) return <p className="text-slate-500">Loading…</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Testimonials</h1>
        <p className="mt-1 text-sm text-slate-500">Manage student testimonials.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-4">
        <h2 className="font-semibold text-slate-800">Section header</h2>
        <div className="space-y-1.5">
          <Label htmlFor="eyebrow">Eyebrow</Label>
          <Input id="eyebrow" value={form.eyebrow} onChange={(e) => setTop("eyebrow", e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={form.title} onChange={(e) => setTop("title", e.target.value)} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Testimonials ({form.items.length})</h2>
          <Button type="button" variant="outline" size="sm" onClick={addItem}>
            <Plus size={14} /> Add testimonial
          </Button>
        </div>

        {form.items.map((item, i) => (
          <div key={i} className="rounded-2xl border border-blue-100 bg-white p-5 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-slate-700">
                {item.name || `Testimonial ${i + 1}`}
              </p>
              <button
                type="button"
                onClick={() => removeItem(i)}
                className="rounded-lg p-1.5 text-slate-400 hover:text-red-600"
                aria-label="Remove testimonial"
              >
                <Trash2 size={15} />
              </button>
            </div>

            <div className="space-y-1.5">
              <Label>Quote</Label>
              <Textarea
                rows={3}
                value={item.quote}
                onChange={(e) => setItem(i, { quote: e.target.value })}
                placeholder="The most attentive teachers I have ever worked with…"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Name</Label>
                <Input value={item.name} onChange={(e) => setItem(i, { name: e.target.value })} placeholder="Chiara R." />
              </div>
              <div className="space-y-1.5">
                <Label>Role</Label>
                <Input value={item.role} onChange={(e) => setItem(i, { role: e.target.value })} placeholder="Marketing Manager" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <CmsSaveBar saving={saving} dirty={dirty} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
