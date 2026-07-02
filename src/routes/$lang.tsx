import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { Lang } from "@/i18n/dictionaries";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (params.lang !== "en" && params.lang !== "it") {
      throw redirect({ to: "/$lang", params: { lang: "en" } });
    }
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header lang={lang as Lang} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer lang={lang as Lang} />
      <a
        href={`https://api.whatsapp.com/send?phone=3908231410601`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.16_150)] text-white shadow-lg transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .01 5.36.01 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.36 12-11.99 0-3.2-1.25-6.21-3.48-8.53ZM12 21.82a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.68.96.98-3.58-.24-.37A9.83 9.83 0 1 1 21.82 12c0 5.42-4.4 9.82-9.82 9.82Zm5.38-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.5.07-.76.37-.26.3-1 1-1 2.44 0 1.44 1.03 2.83 1.17 3.02.15.2 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.6.69.22 1.32.19 1.82.11.55-.08 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}
