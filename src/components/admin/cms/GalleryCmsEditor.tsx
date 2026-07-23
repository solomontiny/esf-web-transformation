import { useEffect, useRef, useState } from "react";
import { Trash2, Upload } from "lucide-react";
import {
  addGalleryImage,
  deleteGalleryImage,
  getPublicUrl,
  loadGallery,
  type CmsGalleryImage,
} from "@/lib/cms";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function GalleryCmsEditor() {
  const [images, setImages] = useState<CmsGalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setLoading(true);
    loadGallery()
      .then(setImages)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleUpload(file: File) {
    setUploading(true);
    setError(null);
    try {
      const sortOrder = images.length;
      const newImage = await addGalleryImage(file, caption, sortOrder);
      setImages((prev) => [...prev, newImage]);
      setCaption("");
      if (inputRef.current) inputRef.current.value = "";
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(image: CmsGalleryImage) {
    setError(null);
    try {
      await deleteGalleryImage(image);
      setImages((prev) => prev.filter((img) => img.id !== image.id));
    } catch (e) {
      setError((e as Error).message);
    }
  }

  if (loading) return <p className="text-slate-500">Loading…</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Gallery</h1>
        <p className="mt-1 text-sm text-slate-500">Upload and manage gallery images.</p>
      </div>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      {/* Upload panel */}
      <div className="rounded-2xl border border-blue-100 bg-white p-6 space-y-4">
        <h2 className="font-semibold text-slate-800">Upload new image</h2>

        <div className="space-y-1.5">
          <Label htmlFor="caption">Caption (optional)</Label>
          <Input
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="e.g. Classroom session, summer 2024"
          />
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-28 w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 text-sm text-slate-500 transition hover:border-blue-400 hover:text-blue-600 disabled:opacity-50"
        >
          <Upload size={18} aria-hidden="true" />
          {uploading ? "Uploading…" : "Click to choose an image"}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleUpload(file);
          }}
        />
      </div>

      {/* Image grid */}
      {images.length === 0 ? (
        <p className="text-sm text-slate-400">No images yet. Upload one above.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <img
                src={getPublicUrl(img.storage_path)}
                alt={img.caption || "Gallery image"}
                className="h-44 w-full object-cover"
              />
              <div className="px-3 py-2">
                <p className="truncate text-sm text-slate-600">
                  {img.caption || <span className="italic text-slate-400">No caption</span>}
                </p>
                <p className="text-xs text-slate-400">Order: {img.sort_order}</p>
              </div>
              <button
                type="button"
                onClick={() => void handleDelete(img)}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white opacity-0 shadow transition group-hover:opacity-100 hover:bg-red-700"
                aria-label="Delete image"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
