import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { HomeCmsEditor } from "@/components/admin/cms/HomeCmsEditor";
import { AboutCmsEditor } from "@/components/admin/cms/AboutCmsEditor";
import { CoursesCmsEditor } from "@/components/admin/cms/CoursesCmsEditor";
import { ServicesCmsEditor } from "@/components/admin/cms/ServicesCmsEditor";
import { GalleryCmsEditor } from "@/components/admin/cms/GalleryCmsEditor";
import { TestimonialsCmsEditor } from "@/components/admin/cms/TestimonialsCmsEditor";
import { ContactCmsEditor } from "@/components/admin/cms/ContactCmsEditor";
import { WebsiteSettingsCmsEditor } from "@/components/admin/cms/WebsiteSettingsCmsEditor";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Route = (createFileRoute as any)("/admin/cms/$section")({
  component: AdminCmsPage,
});

const SECTION_EDITORS: Record<string, React.ComponentType> = {
  home: HomeCmsEditor,
  about: AboutCmsEditor,
  courses: CoursesCmsEditor,
  services: ServicesCmsEditor,
  gallery: GalleryCmsEditor,
  testimonials: TestimonialsCmsEditor,
  contact: ContactCmsEditor,
  website_settings: WebsiteSettingsCmsEditor,
};

function AdminCmsPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { section } = (Route as any).useParams() as { section: string };
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        await navigate({ to: "/admin/login", replace: true });
        return;
      }

      setIsAuthenticated(true);
      setIsCheckingAuth(false);
    }

    void checkAuth();
  }, [navigate]);

  async function handleLogout() {
    setIsLoggingOut(true);
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Unable to sign out:", error);
    await navigate({ to: "/admin/login", replace: true });
  }

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="rounded-2xl bg-white px-6 py-4 text-slate-600 shadow-sm" role="status">
          Checking administrator access…
        </p>
      </main>
    );
  }

  if (!isAuthenticated) return null;

  const Editor = SECTION_EDITORS[section];

  return (
    <AdminLayout onLogout={handleLogout} isLoggingOut={isLoggingOut}>
      {Editor ? (
        <Editor />
      ) : (
        <div className="rounded-2xl border border-blue-100 bg-white p-8 text-center">
          <p className="text-slate-500">
            Unknown section: <code>{section}</code>
          </p>
        </div>
      )}
    </AdminLayout>
  );
}
