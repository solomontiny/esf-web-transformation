import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// ── Section content shapes ───────────────────────────────────

export interface CmsHome {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lede: string;
  heroImagePath: string;
}

export interface CmsAbout {
  eyebrow: string;
  title: string;
  body: string[];
  missionTitle: string;
  missionBody: string;
  visionTitle: string;
  visionBody: string;
  stats: { label: string; value: string }[];
}

export interface CmsCourse {
  name: string;
  tagline: string;
  body: string;
  priceFrom: string;
  duration: string;
  format: string;
  levels: string;
  highlights: string[];
  syllabus: string[];
  certifications: string[];
}

export interface CmsCourses {
  eyebrow: string;
  title: string;
  lede: string;
  languages: CmsCourse[];
}

export interface CmsServiceItem {
  title: string;
  intro: string;
  bullets: string[];
}

export interface CmsServices {
  eyebrow: string;
  title: string;
  lede: string;
  services: CmsServiceItem[];
}

export interface CmsTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface CmsTestimonials {
  eyebrow: string;
  title: string;
  items: CmsTestimonial[];
}

export interface CmsContact {
  eyebrow: string;
  title: string;
  lede: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export interface CmsWebsiteSettings {
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  primaryColor: string;
  logoPath: string;
  facebookUrl: string;
  instagramUrl: string;
  whatsappNumber: string;
}

export interface CmsGalleryImage {
  id: string;
  storage_path: string;
  caption: string;
  sort_order: number;
}

export type CmsSectionMap = {
  home: CmsHome;
  about: CmsAbout;
  courses: CmsCourses;
  services: CmsServices;
  testimonials: CmsTestimonials;
  contact: CmsContact;
  website_settings: CmsWebsiteSettings;
};

export type CmsSectionKey = keyof CmsSectionMap;

// ── Deep-merge helper ────────────────────────────────────────
// Merges CMS overrides onto a fallback object. Any CMS field
// that is an empty string, empty array, or missing falls back
// to the corresponding value from `fallback`.
function mergeValue<T>(fallback: T, override: unknown): T {
  if (override === undefined || override === null) return fallback;
  if (typeof override === "string") {
    return (override.trim() === "" ? fallback : override) as T;
  }
  if (Array.isArray(fallback)) {
    const ov = Array.isArray(override) ? override : [];
    if (ov.length === 0) return fallback;
    // Merge each element; if element is an object, recurse
    return ov.map((item, i) => {
      const fb = (fallback as unknown[])[i];
      if (fb !== undefined && typeof item === "object" && item !== null && !Array.isArray(item)) {
        return mergeValue(fb, item);
      }
      return item ?? fb;
    }) as T;
  }
  if (typeof fallback === "object" && fallback !== null && typeof override === "object" && override !== null) {
    const result = { ...(fallback as Record<string, unknown>) };
    for (const key of Object.keys(result)) {
      result[key] = mergeValue(
        result[key],
        (override as Record<string, unknown>)[key],
      );
    }
    return result as T;
  }
  return override as T;
}

/**
 * Fetches a CMS section from Supabase and deep-merges it over
 * the provided dictionary fallback. Returns the fallback
 * immediately if the fetch fails or the section is empty.
 */
export async function fetchCmsSection<K extends CmsSectionKey>(
  section: K,
  fallback: CmsSectionMap[K],
): Promise<CmsSectionMap[K]> {
  try {
    const { data, error } = await supabase
      .from("cms_content")
      .select("content")
      .eq("section", section)
      .single();
    if (error || !data?.content) return fallback;
    return mergeValue(fallback, data.content) as CmsSectionMap[K];
  } catch {
    return fallback;
  }
}

/**
 * Client-side hook: fetches a CMS section and merges it over
 * the dictionary fallback. Returns the fallback while loading
 * so the page never renders empty.
 */
export function useCmsData<K extends CmsSectionKey>(
  section: K,
  fallback: CmsSectionMap[K],
): CmsSectionMap[K] {
  const [merged, setMerged] = useState<CmsSectionMap[K]>(fallback);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("cms_content")
      .select("content")
      .eq("section", section)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (!error && data?.content) {
          setMerged(mergeValue(fallback, data.content) as CmsSectionMap[K]);
        }
      });
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  return merged;
}

/**
 * Fetches gallery images from Supabase. Returns [] on error
 * so the public gallery page always renders (falls back to
 * the hardcoded ITEMS array in the route).
 */
export async function fetchGalleryImages(): Promise<CmsGalleryImage[]> {
  try {
    const { data, error } = await supabase
      .from("cms_gallery")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) return [];
    return (data ?? []) as CmsGalleryImage[];
  } catch {
    return [];
  }
}

// Suppress unused import warning — Dict is used by consumers of this module
// (no re-export needed; consumers import directly from @/i18n/dictionaries)

// ── Hook ─────────────────────────────────────────────────────

export function useCmsSection<K extends CmsSectionKey>(section: K) {
  const [data, setData] = useState<CmsSectionMap[K] | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    supabase
      .from("cms_content")
      .select("content")
      .eq("section", section)
      .single()
      .then(({ data: row, error: err }) => {
        if (cancelled) return;
        if (err && err.code !== "PGRST116") {
          setError(err.message);
        } else {
          setData((row?.content as CmsSectionMap[K]) ?? null);
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [section]);

  const save = useCallback(
    async (payload: CmsSectionMap[K]): Promise<boolean> => {
      setSaving(true);
      setError(null);

      const { error: err } = await supabase
        .from("cms_content")
        .upsert({ section, content: payload }, { onConflict: "section" });

      setSaving(false);

      if (err) {
        setError(err.message);
        return false;
      }

      setData(payload);
      return true;
    },
    [section],
  );

  return { data, loading, saving, error, save };
}

// ── Gallery helpers ───────────────────────────────────────────

export async function loadGallery(): Promise<CmsGalleryImage[]> {
  const { data, error } = await supabase
    .from("cms_gallery")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as CmsGalleryImage[];
}

export async function addGalleryImage(
  file: File,
  caption: string,
  sortOrder: number,
): Promise<CmsGalleryImage> {
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `gallery/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("cms-images")
    .upload(path, file, { upsert: false });

  if (uploadError) throw new Error(uploadError.message);

  const { data, error: insertError } = await supabase
    .from("cms_gallery")
    .insert({ storage_path: path, caption, sort_order: sortOrder })
    .select()
    .single();

  if (insertError) throw new Error(insertError.message);
  return data as CmsGalleryImage;
}

export async function deleteGalleryImage(image: CmsGalleryImage): Promise<void> {
  await supabase.storage.from("cms-images").remove([image.storage_path]);

  const { error } = await supabase
    .from("cms_gallery")
    .delete()
    .eq("id", image.id);

  if (error) throw new Error(error.message);
}

export function getPublicUrl(storagePath: string): string {
  const { data } = supabase.storage.from("cms-images").getPublicUrl(storagePath);
  return data.publicUrl;
}
