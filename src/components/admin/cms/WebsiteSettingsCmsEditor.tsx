import { useEffect, useState } from "react";
import { useCmsSection, type CmsWebsiteSettings } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { ImageUpload } from "@/components/admin/ImageUpload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DEFAULTS: CmsWebsiteSettings = {
  siteName: "",
  metaTitle: "",
  metaDescription: "",
  primaryColor: "#1d4ed8",
  logoPath: "",
  facebookUrl: "",
  instagramUrl: "",
  whatsappNumber: "",
};

export function WebsiteSettingsCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("website_settings");
  const [form, setForm] = useState<CmsWebsiteSettings>(DEFAULTS);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function set<K extends keyof CmsWebsiteSettings>(key: K, value: CmsWebsiteSettings[K]) {
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
        <h1 className="text-2xl font-bold text-slate-900">Website Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Global site identity, SEO and social links.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">Identity</h2>

        <div className="space-y-1.5">
          <Label htmlFor="siteName">Site name</Label>
          <Input
            id="siteName"
            value={form.siteName}
            onChange={(e) => set("siteName", e.target.value)}
            placeholder="ESF Language Service"
          />
        </div>

        <ImageUpload
          label="Logo"
          folder="logo"
          value={form.logoPath}
          onChange={(path) => set("logoPath", path)}
        />

        <div className="space-y-1.5">
          <Label htmlFor="primaryColor">Primary colour (hex)</Label>
          <div className="flex items-center gap-3">
            <input
              id="primaryColor"
              type="color"
              value={form.primaryColor}
              onChange={(e) => set("primaryColor", e.target.value)}
              className="h-9 w-14 cursor-pointer rounded-md border border-input"
            />
            <Input
              value={form.primaryColor}
              onChange={(e) => set("primaryColor", e.target.value)}
              className="w-36"
              placeholder="#1d4ed8"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">SEO</h2>

        <div className="space-y-1.5">
          <Label htmlFor="metaTitle">Meta title</Label>
          <Input
            id="metaTitle"
            value={form.metaTitle}
            onChange={(e) => set("metaTitle", e.target.value)}
            placeholder="ESF Language Service — English, French, Spanish & Italian courses"
          />
          <p className="text-xs text-slate-400">Recommended: 50–60 characters.</p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="metaDescription">Meta description</Label>
          <Textarea
            id="metaDescription"
            rows={3}
            value={form.metaDescription}
            onChange={(e) => set("metaDescription", e.target.value)}
            placeholder="Boutique language studio in Casagiove, Caserta…"
          />
          <p className="text-xs text-slate-400">Recommended: 120–160 characters.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-5">
        <h2 className="font-semibold text-slate-800">Social &amp; contact</h2>

        <div className="space-y-1.5">
          <Label htmlFor="whatsappNumber">WhatsApp number (international format)</Label>
          <Input
            id="whatsappNumber"
            type="tel"
            value={form.whatsappNumber}
            onChange={(e) => set("whatsappNumber", e.target.value)}
            placeholder="+3908231410601"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="facebookUrl">Facebook URL</Label>
          <Input
            id="facebookUrl"
            type="url"
            value={form.facebookUrl}
            onChange={(e) => set("facebookUrl", e.target.value)}
            placeholder="https://facebook.com/esflanguageservice"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="instagramUrl">Instagram URL</Label>
          <Input
            id="instagramUrl"
            type="url"
            value={form.instagramUrl}
            onChange={(e) => set("instagramUrl", e.target.value)}
            placeholder="https://instagram.com/esflanguageservice"
          />
        </div>
      </div>

      <CmsSaveBar saving={saving} dirty={dirty} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
