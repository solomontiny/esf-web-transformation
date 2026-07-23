import { useEffect, useState } from "react";
import { useCmsSection, type CmsHome } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DEFAULTS: CmsHome = {
  eyebrow: "",
  title: "",
  titleAccent: "",
  lede: "",
  heroImagePath: "",
};

export function HomeCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("home");
  const [form, setForm] = useState<CmsHome>(DEFAULTS);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function set<K extends keyof CmsHome>(key: K, value: CmsHome[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
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
        <h1 className="text-2xl font-bold text-slate-900">Home</h1>
        <p className="mt-1 text-sm text-slate-500">Edit the hero section of the homepage.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="eyebrow">Eyebrow text</Label>
          <Input
            id="eyebrow"
            value={form.eyebrow}
            onChange={(e) => set("eyebrow", e.target.value)}
            placeholder="Language Center · Casagiove, Caserta · Italy"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="title">Headline (first part)</Label>
          <Input
            id="title"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            placeholder="Language, education and"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="titleAccent">Headline accent word</Label>
          <Input
            id="titleAccent"
            value={form.titleAccent}
            onChange={(e) => set("titleAccent", e.target.value)}
            placeholder="opportunity"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="lede">Intro paragraph</Label>
          <Textarea
            id="lede"
            rows={4}
            value={form.lede}
            onChange={(e) => set("lede", e.target.value)}
            placeholder="ESF Language Services is a trusted provider…"
          />
        </div>

        <ImageUpload
          label="Hero image"
          folder="hero"
          value={form.heroImagePath}
          onChange={(path) => set("heroImagePath", path)}
        />
      </div>

      <CmsSaveBar
        saving={saving}
        dirty={dirty}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}
