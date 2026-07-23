import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useCmsSection, type CmsAbout } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const DEFAULTS: CmsAbout = {
  eyebrow: "",
  title: "",
  body: [""],
  missionTitle: "",
  missionBody: "",
  visionTitle: "",
  visionBody: "",
  stats: [{ label: "", value: "" }],
};

export function AboutCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("about");
  const [form, setForm] = useState<CmsAbout>(DEFAULTS);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function setField<K extends keyof CmsAbout>(key: K, value: CmsAbout[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  }

  function setBodyLine(index: number, value: string) {
    const next = [...form.body];
    next[index] = value;
    setField("body", next);
  }

  function addBodyLine() {
    setField("body", [...form.body, ""]);
  }

  function removeBodyLine(index: number) {
    setField("body", form.body.filter((_, i) => i !== index));
  }

  function setStat(index: number, key: "label" | "value", value: string) {
    const next = form.stats.map((s, i) => (i === index ? { ...s, [key]: value } : s));
    setField("stats", next);
  }

  function addStat() {
    setField("stats", [...form.stats, { label: "", value: "" }]);
  }

  function removeStat(index: number) {
    setField("stats", form.stats.filter((_, i) => i !== index));
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
        <h1 className="text-2xl font-bold text-slate-900">About</h1>
        <p className="mt-1 text-sm text-slate-500">Edit the About page content.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">Header</h2>

        <div className="space-y-1.5">
          <Label htmlFor="eyebrow">Eyebrow</Label>
          <Input id="eyebrow" value={form.eyebrow} onChange={(e) => setField("eyebrow", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={form.title} onChange={(e) => setField("title", e.target.value)} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Body paragraphs</Label>
            <Button type="button" variant="outline" size="sm" onClick={addBodyLine}>
              <Plus size={14} /> Add paragraph
            </Button>
          </div>
          {form.body.map((para, i) => (
            <div key={i} className="flex gap-2">
              <Textarea
                rows={3}
                value={para}
                onChange={(e) => setBodyLine(i, e.target.value)}
                className="flex-1"
              />
              <button
                type="button"
                onClick={() => removeBodyLine(i)}
                className="self-start rounded-lg p-2 text-slate-400 hover:text-red-600"
                aria-label="Remove paragraph"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">Mission &amp; Vision</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="missionTitle">Mission title</Label>
            <Input id="missionTitle" value={form.missionTitle} onChange={(e) => setField("missionTitle", e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="visionTitle">Vision title</Label>
            <Input id="visionTitle" value={form.visionTitle} onChange={(e) => setField("visionTitle", e.target.value)} />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="missionBody">Mission body</Label>
          <Textarea id="missionBody" rows={3} value={form.missionBody} onChange={(e) => setField("missionBody", e.target.value)} />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="visionBody">Vision body</Label>
          <Textarea id="visionBody" rows={3} value={form.visionBody} onChange={(e) => setField("visionBody", e.target.value)} />
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Stats</h2>
          <Button type="button" variant="outline" size="sm" onClick={addStat}>
            <Plus size={14} /> Add stat
          </Button>
        </div>

        {form.stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <Input
              placeholder="Value (e.g. 9+)"
              value={stat.value}
              onChange={(e) => setStat(i, "value", e.target.value)}
              className="w-28"
            />
            <Input
              placeholder="Label (e.g. Years of practice)"
              value={stat.label}
              onChange={(e) => setStat(i, "label", e.target.value)}
              className="flex-1"
            />
            <button
              type="button"
              onClick={() => removeStat(i)}
              className="rounded-lg p-2 text-slate-400 hover:text-red-600"
              aria-label="Remove stat"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <CmsSaveBar saving={saving} dirty={dirty} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
