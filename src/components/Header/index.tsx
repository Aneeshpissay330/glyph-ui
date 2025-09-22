import type { HeaderProps } from "./index.types";
import { Menu } from "../Menu";

// Accessible utility for conditional classes
const cx = (...c: Array<string | false | null | undefined>) =>
  c.filter(Boolean).join(" ");

export const Header = ({
  logo,
  title,
  subtitle,
  navLinks = [],
  rightContent,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* LEFT: Logo + Title + Subtitle */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3">
              {logo ? (
                <img
                  src={logo}
                  alt="logo"
                  className="h-10 w-10 object-cover rounded-md shadow-sm"
                />
              ) : (
                <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center text-gray-600 font-medium">
                  {(title && title.charAt(0)) || "A"}
                </div>
              )}
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold leading-5 text-slate-900">
                  {title}
                </h1>
                {subtitle ? (
                  <p className="text-xs text-gray-500">{subtitle}</p>
                ) : (
                  <p className="text-xs text-gray-500">Dashboard</p>
                )}
              </div>
            </a>
          </div>

          {/* CENTER: Navigation */}
          <div className="flex-1">
            <nav className="hidden md:flex items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <div key={i} className="relative">
                  {"children" in (link as any) &&
                  Array.isArray((link as any).children) ? (
                    <Menu
                      label={link.label}
                      items={(link as any).children}
                      active={link.active}
                    />
                  ) : (
                    <a
                      href={(link as any).href || "#"}
                      className={cx(
                        "px-3 py-2 text-sm font-medium",
                        link.active
                          ? "text-slate-900"
                          : "text-gray-600 hover:text-slate-900"
                      )}
                    >
                      <span
                        className={
                          link.active
                            ? "border-b-2 border-slate-900 pb-2"
                            : "pb-2"
                        }
                      >
                        {link.label}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* RIGHT: Custom injected content */}
          <div className="flex items-center gap-4">{rightContent}</div>
        </div>
      </div>
    </header>
  );
};
