import { Button } from "@/components/ui/button";

interface CmsSaveBarProps {
  saving: boolean;
  dirty: boolean;
  onSave: () => void;
  onCancel: () => void;
}

export function CmsSaveBar({ saving, dirty, onSave, onCancel }: CmsSaveBarProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-sm">
      <Button onClick={onSave} disabled={saving || !dirty}>
        {saving ? "Saving…" : "Save changes"}
      </Button>
      <Button variant="outline" onClick={onCancel} disabled={saving}>
        Cancel
      </Button>
      {dirty && !saving && (
        <p className="text-sm text-amber-600">You have unsaved changes.</p>
      )}
      {!dirty && !saving && (
        <p className="text-sm text-slate-400">All changes saved.</p>
      )}
    </div>
  );
}
