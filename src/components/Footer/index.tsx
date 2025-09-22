import React from "react";
import type { FooterProps, FooterLink } from "./index.types";
import { ExternalLink } from "lucide-react";

const FooterLinkItem = ({ link }: { link: FooterLink }) => {
  const { label, href = "#", external } = link;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
    >
      {label}
      {external && (
        <ExternalLink className="inline-block ml-1 -translate-y-[1px] h-3 w-3 text-gray-400" />
      )}
    </a>
  );
};

export const Footer: React.FC<FooterProps> = ({
  title = "Brand",
  logo,
  links = [],
  legalLinks = [],
  social = [],
  copyrightText,
  smallText,
  className = "",
  rightContent,
}) => {
  const year = new Date().getFullYear();
  const defaultCopyright = `© ${year} ${title}. All rights reserved.`;

  return (
    <footer
      className={`w-full border-t border-gray-200 bg-white/80 backdrop-blur-sm z-40 ${className}`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        {/* TOP ROW: grid with 1fr auto 1fr so center stays perfectly centered */}
        {/* small screens: grid-cols-1; md+: grid-cols-[1fr_auto_1fr] */}
        <div className="grid items-center gap-6 grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
          {/* LEFT: Brand */}
          <div className="flex items-center gap-3 justify-start min-w-0">
            {logo ? (
              <img
                src={logo}
                alt={title}
                className="h-10 w-10 object-cover rounded-md shadow-sm flex-shrink-0"
              />
            ) : (
              <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-700 font-medium flex-shrink-0">
                {title?.charAt(0) ?? "B"}
              </div>
            )}

            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-slate-900 truncate">
                {title}
              </span>
              {smallText ? (
                <span className="text-xs text-gray-500 truncate">{smallText}</span>
              ) : (
                <span className="text-xs text-gray-400 hidden md:block">
                  Building delightful experiences
                </span>
              )}
            </div>
          </div>

          {/* CENTER: Links - centered regardless of left/right width */}
          <nav
            aria-label="Footer"
            className="flex justify-center items-center"
          >
            <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-[640px]">
              {links.map((l, i) => (
                <li key={i} className="whitespace-nowrap">
                  <FooterLinkItem link={l} />
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: legal links + social or custom rightContent */}
          <div className="flex items-center justify-end gap-4 min-w-0">
            {rightContent ? (
              rightContent
            ) : (
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-4">
                  {legalLinks.map((l, i) => (
                    <FooterLinkItem key={i} link={l} />
                  ))}
                </div>

                {social.length > 0 && (
                  <div className="flex items-center gap-2">
                    {social.map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.label}
                        className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                      >
                        {s.icon ?? <span className="sr-only">{s.label}</span>}
                      </a>
                    ))}
                  </div>
                )}

                <div className="sm:hidden">
                  {legalLinks[0] && <FooterLinkItem link={legalLinks[0]} />}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom row: copyright only */}
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              {copyrightText ?? defaultCopyright}
            </p>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
