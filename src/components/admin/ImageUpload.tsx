import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getPublicUrl } from "@/lib/cms";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  /** Current storage path (e.g. "hero/abc123.jpg") or empty string */
  value: string;
  /** Called with the new storage path after a successful upload */
  onChange: (storagePath: string) => void;
  /** Folder inside the cms-images bucket, e.g. "hero" */
  folder?: string;
  label?: string;
  className?: string;
}

export function ImageUpload({
  value,
  onChange,
  folder = "misc",
  label = "Image",
  className,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setUploadError(null);

    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error } = await supabase.storage
      .from("cms-images")
      .upload(path, file, { upsert: false });

    setUploading(false);

    if (error) {
      setUploadError(error.message);
      return;
    }

    onChange(path);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) void handleFile(file);
  }

  function handleClear() {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  }

  const previewUrl = value ? getPublicUrl(value) : null;

  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm font-medium text-slate-700">{label}</p>

      {previewUrl ? (
        <div className="relative inline-block">
          <img
            src={previewUrl}
            alt="Preview"
            className="h-40 w-auto rounded-xl border border-slate-200 object-cover"
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow transition hover:bg-red-700"
            aria-label="Remove image"
          >
            <X size={12} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-32 w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 text-sm text-slate-500 transition hover:border-blue-400 hover:text-blue-600 disabled:opacity-50"
        >
          <Upload size={18} aria-hidden="true" />
          {uploading ? "Uploading…" : "Click to upload"}
        </button>
      )}

      {!previewUrl && (
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      )}

      {uploadError && (
        <p className="text-xs text-red-600" role="alert">
          {uploadError}
        </p>
      )}

      {value && (
        <p className="truncate text-xs text-slate-400">{value}</p>
      )}
    </div>
  );
}
