import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "/about", sectionId: "section-about" },
  { label: "Career", href: "/career", sectionId: "section-career" },
  { label: "Tech", href: "/tech", sectionId: "section-tech" },
  { label: "Works", href: "/works", sectionId: "section-works" },
  { label: "Contact", href: "/contact", sectionId: "section-contact" },
];

interface Props {
  alwaysVisible?: boolean;
}

export default function Header({ alwaysVisible = false }: Props) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      setCurrentRoute(window.location.pathname);
      return;
    }

    const isTop = window.location.pathname === "/";
    setVisible(!isTop);
    setCurrentRoute(window.location.pathname);

    const handleRouteChange = (e: Event) => {
      const { route } = (e as CustomEvent).detail;
      setCurrentRoute(route);
      setVisible(route !== "/");
    };
    window.addEventListener("route-change", handleRouteChange);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const topSection = document.getElementById("section-top");
        if (topSection) {
          const rect = topSection.getBoundingClientRect();
          const progress = Math.max(
            0,
            Math.min(1, -rect.top / (rect.height * 0.5))
          );
          setVisible(progress > 0.5);
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("route-change", handleRouteChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [alwaysVisible]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return false;
    const top = el.getBoundingClientRect().top + window.scrollY;
    // Scroll so sticky title is just pinned below header
    window.scrollTo({ top: top + window.innerHeight * 0.25, behavior: "smooth" });
    return true;
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    href: string
  ) => {
    e.preventDefault();
    if (!scrollToSection(sectionId)) {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }
        bg-white/60 backdrop-blur-md border-b border-gray-200/30`}
      style={{ viewTransitionName: "header" }}
    >
      <nav className="mx-auto px-4 h-14 flex items-center" style={{ maxWidth: "54rem" }}>
        {/* avatar on the left */}
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("section-top");
            if (el) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.location.href = "/";
            }
          }}
        >
          <div
            className="w-8 h-8 rounded-full overflow-hidden
                       bg-white/30 border border-white/40
                       shadow-sm"
            style={{ viewTransitionName: "avatar" }}
          >
            <img
              src="/images/avatar.webp"
              alt="bo-yakitarako"
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        {/* nav links */}
        <div className="flex items-center gap-4 ml-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors
                ${
                  currentRoute.startsWith(item.href)
                    ? "text-accent-blue"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              onClick={(e) => handleNavClick(e, item.sectionId, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
