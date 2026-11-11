
(() => {
    const header = document.querySelector("#site-header");
    const toggle = document.querySelector("#menu-toggle");
    const nav = document.querySelector("#main-navigation");
    const searchToggle = document.querySelector("#search-toggle");
    const panel = document.querySelector("#search-panel");

    if (!header) return;

    let previous = window.scrollY;
    let ticking = false;

    // Actualizar el encabezado al desplazarse
    function update() {
        const y = Math.max(0, window.scrollY);
        const delta = y - previous;

        header.classList.toggle("is-scrolled", y > 36);

        const overlay =
            nav?.classList.contains("is-open") ||
            (panel && !panel.hidden);

        if (!overlay && y > 180 && delta > 8) {
            header.classList.add("is-hidden");
        } else if (delta < -8 || y <= 36 || overlay) {
            header.classList.remove("is-hidden");
        }

        previous = y;
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        },
        { passive: true }
    );

    // Cerrar el menú de navegación
    function closeMenu() {
        toggle?.setAttribute("aria-expanded", "false");
        toggle?.setAttribute("aria-label", "Abrir menú");

        nav?.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    }

    // Abrir y cerrar el menú
    toggle?.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute("aria-expanded", String(!open));
        toggle.setAttribute(
            "aria-label",
            open ? "Abrir menú" : "Cerrar menú"
        );

        nav?.classList.toggle("is-open", !open);
        document.body.classList.toggle("menu-open", !open);

        header.classList.remove("is-hidden");
    });

    // Cerrar el menú al seleccionar un enlace
    nav?.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", closeMenu);
    });

    // Cerrar menú y búsqueda con Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();

            if (panel && searchToggle) {
                panel.hidden = true;
                searchToggle.setAttribute("aria-expanded", "false");
            }
        }
    });

    // Abrir y cerrar el buscador
    searchToggle?.addEventListener("click", () => {
        const open =
            searchToggle.getAttribute("aria-expanded") === "true";

        searchToggle.setAttribute("aria-expanded", String(!open));

        if (panel) {
            panel.hidden = open;
        }

        header.classList.remove("is-hidden");

        if (!open) {
            panel?.querySelector("input")?.focus();
        }
    });

    // Gestionar el envío del formulario de búsqueda
    panel?.addEventListener("submit", (e) => {
        e.preventDefault();

        const q = panel.querySelector("input")?.value.trim();

        if (q) {
            const note = panel.querySelector(".search-note");

            if (note) {
                note.textContent =
                    `La búsqueda de “${q}” estará disponible cuando publiquemos el archivo de artículos.`;
            }
        }
    });

    // Cerrar el menú al pasar a una pantalla grande
    window.addEventListener("resize", () => {
        if (innerWidth > 760) {
            closeMenu();
        }
    });
})();
