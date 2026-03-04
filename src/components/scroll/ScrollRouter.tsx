import { useEffect, useRef } from "react";

const SECTION_ROUTES = [
  { id: "section-top", route: "/" },
  { id: "section-about", route: "/about" },
  { id: "section-career", route: "/career" },
  { id: "section-tech", route: "/tech" },
  { id: "section-works", route: "/works" },
  { id: "section-contact", route: "/contact" },
];

export default function ScrollRouter() {
  const currentRoute = useRef(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const sectionId = visible[0].target.id;
          const config = SECTION_ROUTES.find((s) => s.id === sectionId);
          if (config && config.route !== currentRoute.current) {
            currentRoute.current = config.route;
            history.pushState({ section: sectionId }, "", config.route);
            window.dispatchEvent(
              new CustomEvent("route-change", {
                detail: { route: config.route, sectionId },
              })
            );
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    SECTION_ROUTES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.section) {
        const el = document.getElementById(event.state.section);
        if (el) {
          currentRoute.current =
            SECTION_ROUTES.find((s) => s.id === event.state.section)?.route ??
            "/";
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}
