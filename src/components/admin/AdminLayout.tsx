import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Home,
  Image,
  Info,
  Mail,
  MessageSquare,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Results", href: "/admin/results", icon: BarChart2 },
  { label: "Home", href: "/admin/cms/home", icon: Home },
  { label: "About", href: "/admin/cms/about", icon: Info },
  { label: "Courses", href: "/admin/cms/courses", icon: BookOpen },
  { label: "Services", href: "/admin/cms/services", icon: Briefcase },
  { label: "Gallery", href: "/admin/cms/gallery", icon: Image },
  { label: "Testimonials", href: "/admin/cms/testimonials", icon: MessageSquare },
  { label: "Contact", href: "/admin/cms/contact", icon: Mail },
  { label: "Website Settings", href: "/admin/cms/website_settings", icon: Settings },
] as const;

interface AdminLayoutProps {
  children: ReactNode;
  onLogout: () => void;
  isLoggingOut?: boolean;
}

export function AdminLayout({ children, onLogout, isLoggingOut }: AdminLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 flex-col border-r border-blue-100 bg-white lg:flex">
        <div className="border-b border-blue-100 px-5 py-5">
          <p className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            ESF Language Service
          </p>
          <p className="mt-0.5 text-sm font-bold text-slate-900">Admin Panel</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
              const active = location.pathname === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                    )}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-blue-100 px-3 py-4">
          <a
            href="/en"
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
          >
            ← Website
          </a>
          <button
            type="button"
            onClick={onLogout}
            disabled={isLoggingOut}
            className="mt-1 flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50"
          >
            {isLoggingOut ? "Logging out…" : "Logout"}
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-blue-100 bg-white px-4 py-3 lg:hidden">
        <p className="shrink-0 text-sm font-bold text-slate-900">ESF Admin</p>
        <div className="flex items-center gap-1 overflow-x-auto pl-3">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                location.pathname === href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50",
              )}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto px-4 py-10 pt-20 lg:px-8 lg:pt-10">
        {children}
      </main>
    </div>
  );
}
