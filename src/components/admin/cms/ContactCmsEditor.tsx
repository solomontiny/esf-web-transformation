import { useEffect, useState } from "react";
import { useCmsSection, type CmsContact } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DEFAULTS: CmsContact = {
  eyebrow: "",
  title: "",
  lede: "",
  address: "",
  phone: "",
  whatsapp: "",
  email: "",
};

export function ContactCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("contact");
  const [form, setForm] = useState<CmsContact>(DEFAULTS);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function set<K extends keyof CmsContact>(key: K, value: CmsContact[K]) {
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
        <h1 className="text-2xl font-bold text-slate-900">Contact</h1>
        <p className="mt-1 text-sm text-slate-500">Edit contact page content and details.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">Section header</h2>

        <div className="space-y-1.5">
          <Label htmlFor="eyebrow">Eyebrow</Label>
          <Input id="eyebrow" value={form.eyebrow} onChange={(e) => set("eyebrow", e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={form.title} onChange={(e) => set("title", e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lede">Lede</Label>
          <Textarea id="lede" rows={3} value={form.lede} onChange={(e) => set("lede", e.target.value)} />
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">Contact details</h2>

        <div className="space-y-1.5">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
            placeholder="Via Milano, 18 · 81022 Casagiove (CE), Italy"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+39 338 922 8520"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              type="tel"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              placeholder="+39 0823 141 0601"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="info@esflanguageservice.com"
          />
        </div>
      </div>

      <CmsSaveBar saving={saving} dirty={dirty} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
