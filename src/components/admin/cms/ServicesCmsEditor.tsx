import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { useCmsSection, type CmsServices, type CmsServiceItem } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const BLANK_SERVICE: CmsServiceItem = { title: "", intro: "", bullets: [""] };

const DEFAULTS: CmsServices = {
  eyebrow: "",
  title: "",
  lede: "",
  services: [{ ...BLANK_SERVICE }],
};

export function ServicesCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("services");
  const [form, setForm] = useState<CmsServices>(DEFAULTS);
  const [dirty, setDirty] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function setTop<K extends keyof Omit<CmsServices, "services">>(key: K, value: CmsServices[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  }

  function setService(index: number, patch: Partial<CmsServiceItem>) {
    setForm((prev) => {
      const services = prev.services.map((s, i) => (i === index ? { ...s, ...patch } : s));
      return { ...prev, services };
    });
    setDirty(true);
  }

  function setBullet(serviceIndex: number, bulletIndex: number, value: string) {
    const bullets = [...form.services[serviceIndex].bullets];
    bullets[bulletIndex] = value;
    setService(serviceIndex, { bullets });
  }

  function addBullet(serviceIndex: number) {
    const bullets = [...form.services[serviceIndex].bullets, ""];
    setService(serviceIndex, { bullets });
  }

  function removeBullet(serviceIndex: number, bulletIndex: number) {
    const bullets = form.services[serviceIndex].bullets.filter((_, i) => i !== bulletIndex);
    setService(serviceIndex, { bullets });
  }

  function addService() {
    setForm((prev) => ({ ...prev, services: [...prev.services, { ...BLANK_SERVICE }] }));
    setOpenIndex(form.services.length);
    setDirty(true);
  }

  function removeService(index: number) {
    setForm((prev) => ({ ...prev, services: prev.services.filter((_, i) => i !== index) }));
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
        <h1 className="text-2xl font-bold text-slate-900">Services</h1>
        <p className="mt-1 text-sm text-slate-500">Edit the services listed on the website.</p>
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
        <div className="space-y-1.5">
          <Label htmlFor="lede">Lede</Label>
          <Textarea id="lede" rows={3} value={form.lede} onChange={(e) => setTop("lede", e.target.value)} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800">Services ({form.services.length})</h2>
          <Button type="button" variant="outline" size="sm" onClick={addService}>
            <Plus size={14} /> Add service
          </Button>
        </div>

        {form.services.map((service, si) => (
          <div key={si} className="rounded-2xl border border-blue-100 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === si ? null : si)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-semibold text-slate-800">
                {service.title || `Service ${si + 1}`}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); removeService(si); }}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-red-600"
                  aria-label="Remove service"
                >
                  <Trash2 size={15} />
                </button>
                {openIndex === si ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

            {openIndex === si && (
              <div className="border-t border-blue-50 px-6 pb-6 pt-4 space-y-4">
                <div className="space-y-1.5">
                  <Label>Title</Label>
                  <Input value={service.title} onChange={(e) => setService(si, { title: e.target.value })} />
                </div>
                <div className="space-y-1.5">
                  <Label>Intro paragraph</Label>
                  <Textarea rows={3} value={service.intro} onChange={(e) => setService(si, { intro: e.target.value })} />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Bullet points</Label>
                    <Button type="button" variant="outline" size="sm" onClick={() => addBullet(si)}>
                      <Plus size={13} /> Add bullet
                    </Button>
                  </div>
                  {service.bullets.map((bullet, bi) => (
                    <div key={bi} className="flex gap-2">
                      <Input
                        value={bullet}
                        onChange={(e) => setBullet(si, bi, e.target.value)}
                        className="flex-1"
                      />
                      <button
                        type="button"
                        onClick={() => removeBullet(si, bi)}
                        className="rounded-lg p-2 text-slate-400 hover:text-red-600"
                        aria-label="Remove bullet"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <CmsSaveBar saving={saving} dirty={dirty} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
