import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { useCmsSection, type CmsCourses, type CmsCourse } from "@/lib/cms";
import { CmsSaveBar } from "@/components/admin/CmsSaveBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const BLANK_COURSE: CmsCourse = {
  name: "",
  tagline: "",
  body: "",
  priceFrom: "",
  duration: "",
  format: "",
  levels: "",
  highlights: [""],
  syllabus: [""],
  certifications: [""],
};

const DEFAULTS: CmsCourses = {
  eyebrow: "",
  title: "",
  lede: "",
  languages: [{ ...BLANK_COURSE }],
};

export function CoursesCmsEditor() {
  const { data, loading, saving, error, save } = useCmsSection("courses");
  const [form, setForm] = useState<CmsCourses>(DEFAULTS);
  const [dirty, setDirty] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (data) {
      setForm({ ...DEFAULTS, ...data });
      setDirty(false);
    }
  }, [data]);

  function setTop<K extends keyof Omit<CmsCourses, "languages">>(key: K, value: CmsCourses[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  }

  function setCourse(index: number, patch: Partial<CmsCourse>) {
    setForm((prev) => {
      const langs = prev.languages.map((l, i) => (i === index ? { ...l, ...patch } : l));
      return { ...prev, languages: langs };
    });
    setDirty(true);
  }

  function setList(
    courseIndex: number,
    field: "highlights" | "syllabus" | "certifications",
    lineIndex: number,
    value: string,
  ) {
    const list = [...form.languages[courseIndex][field]];
    list[lineIndex] = value;
    setCourse(courseIndex, { [field]: list });
  }

  function addListItem(
    courseIndex: number,
    field: "highlights" | "syllabus" | "certifications",
  ) {
    const list = [...form.languages[courseIndex][field], ""];
    setCourse(courseIndex, { [field]: list });
  }

  function removeListItem(
    courseIndex: number,
    field: "highlights" | "syllabus" | "certifications",
    lineIndex: number,
  ) {
    const list = form.languages[courseIndex][field].filter((_, i) => i !== lineIndex);
    setCourse(courseIndex, { [field]: list });
  }

  function addCourse() {
    setForm((prev) => ({ ...prev, languages: [...prev.languages, { ...BLANK_COURSE }] }));
    setOpenIndex(form.languages.length);
    setDirty(true);
  }

  function removeCourse(index: number) {
    setForm((prev) => ({ ...prev, languages: prev.languages.filter((_, i) => i !== index) }));
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
        <h1 className="text-2xl font-bold text-slate-900">Courses</h1>
        <p className="mt-1 text-sm text-slate-500">Edit course listings and details.</p>
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
          <h2 className="font-semibold text-slate-800">Languages</h2>
          <Button type="button" variant="outline" size="sm" onClick={addCourse}>
            <Plus size={14} /> Add language
          </Button>
        </div>

        {form.languages.map((course, ci) => (
          <div key={ci} className="rounded-2xl border border-blue-100 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === ci ? null : ci)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-semibold text-slate-800">
                {course.name || `Language ${ci + 1}`}
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); removeCourse(ci); }}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-red-600"
                  aria-label="Remove language"
                >
                  <Trash2 size={15} />
                </button>
                {openIndex === ci ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

            {openIndex === ci && (
              <div className="border-t border-blue-50 px-6 pb-6 pt-4 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label>Name</Label>
                    <Input value={course.name} onChange={(e) => setCourse(ci, { name: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Tagline</Label>
                    <Input value={course.tagline} onChange={(e) => setCourse(ci, { tagline: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Price from</Label>
                    <Input value={course.priceFrom} onChange={(e) => setCourse(ci, { priceFrom: e.target.value })} placeholder="From €50 / month" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Duration</Label>
                    <Input value={course.duration} onChange={(e) => setCourse(ci, { duration: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Format</Label>
                    <Input value={course.format} onChange={(e) => setCourse(ci, { format: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Levels</Label>
                    <Input value={course.levels} onChange={(e) => setCourse(ci, { levels: e.target.value })} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>Description</Label>
                  <Textarea rows={3} value={course.body} onChange={(e) => setCourse(ci, { body: e.target.value })} />
                </div>

                {(["highlights", "syllabus", "certifications"] as const).map((field) => (
                  <div key={field} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="capitalize">{field}</Label>
                      <Button type="button" variant="outline" size="sm" onClick={() => addListItem(ci, field)}>
                        <Plus size={13} /> Add
                      </Button>
                    </div>
                    {course[field].map((item, li) => (
                      <div key={li} className="flex gap-2">
                        <Input
                          value={item}
                          onChange={(e) => setList(ci, field, li, e.target.value)}
                          className="flex-1"
                        />
                        <button
                          type="button"
                          onClick={() => removeListItem(ci, field, li)}
                          className="rounded-lg p-2 text-slate-400 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <CmsSaveBar saving={saving} dirty={dirty} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
