/* =====================================================
   QUIRÓN — CONVERS-AC-IÓN
   Archivo: JS/conversacion.js
   Índice editorial, tarjetas y lector de artículos.
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    /* -------------------------------------------------
       1. DATOS EDITORIALES
       -------------------------------------------------
       Sustituye [] por los cinco objetos reales cuando
       incorporemos el contenido. No se inventan artículos.

       Campos:
       id, titulo, autor, fecha, categoria, formato,
       imagen, alt, intriga, etiquetas, proporcion,
       distribucion y cuerpo.

       categoria: "conversacion" | "debate" | "conversion"
       distribucion: "principal" | "secundaria" |
                     "horizontal" | "compacta" | "impacto"
       proporcion: "1 / 1" | "3 / 4" | "4 / 3" | "16 / 9"

       cuerpo acepta bloques:
       { tipo: "paragraph", texto: "..." }
       { tipo: "heading", texto: "..." }
       { tipo: "subheading", texto: "..." }
       { tipo: "quote", texto: "..." }
       { tipo: "image", imagen: "ruta/imagen.jpg", alt: "...", pie: "..." }
    ------------------------------------------------- */

    const articulos = [
        
        {
            id: "conversacion-001",
            titulo: "Cortesía de censura",
            autor: "Pablo Quirós",
            fecha: "5 de septiembre del 2026",
            categoria: "conversacion",
            formato: "Ensayo",
            imagen: "../../assets/images/portadas-articulos/cortesia-censura.jpeg",
            alt: "Hasta 3 ruedas de prensa al día y sin preguntas...",
            intriga: "Entradilla crítica que despierte curiosidad sin resumir todo el texto.",
            etiquetas: ["Política", "Libertad de prensa", "Censura"],
            proporcion: "1 / 1",
            distribucion: "secundaria",
            cuerpo: [
                { tipo: "paragraph", 
                    texto: "Primer párrafo del artículo..." },
                { tipo: "heading", 
                    texto: "Subtítulo" },
                { tipo: "paragraph", 
                    texto: "Desarrollo..." },
                { tipo: "quote", 
                    texto: "Cita destacada..." }
            ]
        },

        {
            id: "debate-001",
            titulo: "El gobierno de la gente",
            autor: "Pablo Quirós",
            fecha: "15 agosto del 2025",
            categoria: "debate",
            formato: "Columna de opinión",
            imagen: "../../assets/images/portadas-articulos/el-gobierno-de-la-gente-2.png",
            alt: "la polarizada banda de detractores se encargó de ponerle la máscara de monstruo",
            intriga: "Entradilla crítica que despierte curiosidad sin resumir todo el texto.",
            etiquetas: ["Polarización", "Política", "Oposición"],
            proporcion: "16 / 9",
            distribucion: "principal",
            cuerpo: [
                { tipo: "paragraph", 
                    texto: "Primer párrafo del artículo..." },
                { tipo: "heading", 
                    texto: "Subtítulo" },
                { tipo: "paragraph", 
                    texto: "Desarrollo..." },
                { tipo: "quote", 
                    texto: "Cita destacada..." }
            ]
        },

        {
            id: "conversion-001",
            titulo: "El odio es el virus, ¿queremos la cura?",
            autor: "Pablo Quirós",
            fecha: "30 de septiembre del 2025",
            categoria: "conversion",
            formato: "Columna de opinión",
            imagen: "../../assets/images/portadas-articulos/odio-cura.jpeg",
            alt: "Impulsó la creación del Turning Point dentro del MAGA",
            intriga: "Entradilla crítica que despierte curiosidad sin resumir todo el texto.",
            etiquetas: ["Política internacional", "Polarización", "Libertad"],
            proporcion: "16 / 9",
            distribucion: "principal",
            cuerpo: [
                { tipo: "paragraph", 
                    texto: "Primer párrafo del artículo..." },
                { tipo: "heading", 
                    texto: "Subtítulo" },
                { tipo: "paragraph", 
                    texto: "Desarrollo..." },
                { tipo: "quote", 
                    texto: "Cita destacada..." }
            ]
        },

        {
            id: "debate-002",
            titulo: "La batalla de la nueva Colombia",
            autor: "Pablo Quirós",
            fecha: "5 de agosto del 2026",
            categoria: "debate",
            formato: "Columna de opinión",
            imagen: "../../assets/images/portadas-articulos/batalla-colombia .jpeg",
            alt: "El 7 de agosto es un hito y una marca",
            intriga: "Entradilla crítica que despierte curiosidad sin resumir todo el texto.",
            etiquetas: ["Política", "Elecciones", "Historia"],
            proporcion: "1 / 1",
            distribucion: "secundaria",
            cuerpo: [
                { tipo: "paragraph", 
                    texto: "Primer párrafo del artículo..." },
                { tipo: "heading", 
                    texto: "Subtítulo" },
                { tipo: "paragraph", 
                    texto: "Desarrollo..." },
                { tipo: "quote", 
                    texto: "Cita destacada..." }
            ]
        },

        {
            id: "conversion-002",
            titulo: "Las garras de una Colombia que se desangra en Paz",
            autor: "Pablo Quirós",
            fecha: "31 de mayo del 2026",
            categoria: "conversion",
            formato: "Columna de opinión",
            imagen: "../../assets/images/portadas-articulos/las-garras-2.png",
            alt: "Los nadies contra los nunca",
            intriga: "Entradilla crítica que despierte curiosidad sin resumir todo el texto.",
            etiquetas: ["Sociedad", "Historia", "Elecciones"],
            proporcion: "4 / 3",
            distribucion: "impacto",
            cuerpo: [
                { tipo: "paragraph", 
                    texto: "Primer párrafo del artículo..." },
                { tipo: "heading", 
                    texto: "Subtítulo" },
                { tipo: "paragraph", 
                    texto: "Desarrollo..." },
                { tipo: "quote", 
                    texto: "Cita destacada..." }
            ]
        }
    
    ];

    /* -------------------------------------------------
       2. REFERENCIAS HTML
       ------------------------------------------------- */
    const indice = document.getElementById("conversacion-indice");
    const grid = document.getElementById("conversacion-grid");
    const lector = document.getElementById("article-reader");
    const lectorContenido = document.getElementById("article-reader-content");
    const botonVolver = document.getElementById("volver-a-conversacion");
    const botonVolverFinal = document.getElementById("volver-a-conversacion-final");
    const anio = document.getElementById("current-year");

    if (anio) anio.textContent = new Date().getFullYear();

    /* -------------------------------------------------
       3. FUNCIONES AUXILIARES
       ------------------------------------------------- */
    function escaparHTML(valor = "") {
        return String(valor).replace(/[&<>"']/g, caracter => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[caracter]);
    }

    function obtenerArticulo(id) {
        return articulos.find(articulo => articulo.id === id);
    }

    function categoriaValida(categoria) {
        return ["conversacion", "debate", "conversion"].includes(categoria)
            ? categoria
            : "conversacion";
    }

    function distribucionValida(distribucion) {
        return ["principal", "secundaria", "horizontal", "compacta", "impacto"].includes(distribucion)
            ? distribucion
            : "secundaria";
    }

    function renderizarMetadatos(articulo) {
        return `
            <div class="cv-card__meta">
                <span>${escaparHTML(articulo.formato || "")}</span>
                <span>${escaparHTML(articulo.autor || "")}</span>
                <time>${escaparHTML(articulo.fecha || "")}</time>
            </div>
        `;
    }

    /* -------------------------------------------------
       4. TARJETAS DEL COLLAGE
       ------------------------------------------------- */
    function renderizarTarjeta(articulo) {
    const categoria = categoriaValida(articulo.categoria);
    const distribucion = distribucionValida(articulo.distribucion);

    const id = escaparHTML(articulo.id);
    const titulo = escaparHTML(articulo.titulo);
    const imagen = escaparHTML(articulo.imagen);
    const alt = escaparHTML(articulo.alt || articulo.titulo);
    const intriga = escaparHTML(articulo.intriga || "");
    const proporcion = escaparHTML(articulo.proporcion || "4 / 3");

    const nombresCategoria = {
        conversacion: "Conversación",
        debate: "Debate",
        conversion: "Conversión"
    };

    const nombreCategoria = nombresCategoria[categoria] || "Conversación";

    const etiquetasHTML = Array.isArray(articulo.etiquetas)
        ? articulo.etiquetas
            .map(etiqueta => `
                <span class="cv-card__tag">
                    ${escaparHTML(etiqueta)}
                </span>
            `)
            .join("")
        : "";

    return `
        <article
            class="cv-card cv-card--${distribucion} cv-card--${categoria}"
            style="--cv-image-ratio: ${proporcion};"
        >
            <div class="cv-card__visual">

                <button
                    class="cv-card__image"
                    type="button"
                    data-open-article="${id}"
                    aria-label="Leer: ${titulo}"
                >
                    <img
                        src="${imagen}"
                        alt="${alt}"
                        loading="lazy"
                    >
                </button>

                <div class="cv-card__copy">

                    <span class="cv-card__category">
                        ${nombreCategoria}
                    </span>

                    <h3 class="cv-card__title">
                        <a
                            class="cv-card__link"
                            href="#leer-${encodeURIComponent(articulo.id)}"
                            data-open-article="${id}"
                        >
                            ${titulo}
                        </a>
                    </h3>

                    <div class="cv-card__details">

                        <p class="cv-card__teaser">
                            ${intriga}
                        </p>

                        ${renderizarMetadatos(articulo)}

                        ${etiquetasHTML
                            ? `<div class="cv-card__tags">${etiquetasHTML}</div>`
                            : ""
                        }

                        <a
                            class="cv-card__read"
                            href="#leer-${encodeURIComponent(articulo.id)}"
                            data-open-article="${id}"
                        >
                            Leer artículo <span aria-hidden="true">↗</span>
                        </a>

                    </div>
                </div>
            </div>
        </article>
    `;
}

    function renderizarIndice() {
        if (!grid) return;

        if (!articulos.length) {
            grid.innerHTML = `
                <p class="conversacion-empty">
                    El índice está preparado. Añade los objetos editoriales en el arreglo
                    <code>articulos</code> de <code>conversacion.js</code> para que aparezcan aquí.
                </p>
            `;
            return;
        }

        grid.innerHTML = articulos.map(renderizarTarjeta).join("");
    }

    /* -------------------------------------------------
       5. CUERPO DEL ARTÍCULO
       ------------------------------------------------- */
    function renderizarCuerpo(cuerpo = []) {
        return cuerpo.map(bloque => {
            const texto = escaparHTML(bloque.texto || "");

            switch (bloque.tipo) {
                case "heading":
                    return `<h2>${texto}</h2>`;

                case "subheading":
                    return `<h3>${texto}</h3>`;

                case "quote":
                    return `<blockquote>${texto}</blockquote>`;

                case "image": {
                    if (!bloque.imagen) return "";
                    const alt = escaparHTML(bloque.alt || "");
                    const pie = escaparHTML(bloque.pie || "");
                    return `
                        <figure>
                            <img src="${escaparHTML(bloque.imagen)}" alt="${alt}" loading="lazy">
                            ${pie ? `<figcaption>${pie}</figcaption>` : ""}
                        </figure>
                    `;
                }

                case "paragraph":
                default:
                    return `<p>${texto}</p>`;
            }
        }).join("");
    }

    function renderizarArticulo(articulo) {
        const categoria = categoriaValida(articulo.categoria);
        const nombreCategoria = categoria === "conversacion"
            ? "Conversación"
            : categoria === "debate" ? "Debate" : "Conversión";

        lectorContenido.innerHTML = `
            <div class="article-reader__content">
                <header class="article-reader__header">
                    <p class="eyebrow">${nombreCategoria} · ${escaparHTML(articulo.formato || "")}</p>
                    <h1>${escaparHTML(articulo.titulo)}</h1>
                    <p class="article-reader__standfirst">${escaparHTML(articulo.intriga || "")}</p>
                    <div class="article-reader__meta">
                        <span>${escaparHTML(articulo.autor || "")}</span>
                        <span>${escaparHTML(articulo.fecha || "")}</span>
                    </div>
                </header>

                ${articulo.imagen ? `
                    <figure class="article-reader__hero">
                        <img src="${escaparHTML(articulo.imagen)}" alt="${escaparHTML(articulo.alt || articulo.titulo)}">
                        ${articulo.alt ? `<figcaption>${escaparHTML(articulo.alt)}</figcaption>` : ""}
                    </figure>
                ` : ""}

                <div class="article-reader__body">
                    ${renderizarCuerpo(articulo.cuerpo)}
                </div>

                ${Array.isArray(articulo.etiquetas) && articulo.etiquetas.length ? `
                    <div class="article-reader__tags">${articulo.etiquetas.map(tag => `<span>${escaparHTML(tag)}</span>`).join("")}</div>
                ` : ""}
            </div>
        `;
    }

    /* -------------------------------------------------
       6. APERTURA / CIERRE + HISTORIAL DEL NAVEGADOR
       ------------------------------------------------- */
    function mostrarArticulo(id, actualizarHistorial = true) {
        const articulo = obtenerArticulo(id);
        if (!articulo || !indice || !lector || !lectorContenido) return;

        renderizarArticulo(articulo);
        indice.hidden = true;
        lector.hidden = false;
        document.title = `${articulo.titulo} | Convers-ac-ión — Quirón`;

        if (actualizarHistorial) {
            history.pushState({ articuloId: articulo.id }, "", `#leer-${encodeURIComponent(articulo.id)}`);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function cerrarArticulo(actualizarHistorial = true) {
        if (!indice || !lector) return;

        lector.hidden = true;
        indice.hidden = false;
        document.title = "Convers-ac-ión | Quirón — Mártires de la razón";

        if (actualizarHistorial) {
            history.pushState({}, "", window.location.pathname + window.location.search);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.addEventListener("click", evento => {
        const activador = evento.target.closest("[data-open-article]");
        if (!activador) return;
        evento.preventDefault();
        mostrarArticulo(activador.dataset.openArticle);
    });

    botonVolver?.addEventListener("click", (evento) => {
    evento.preventDefault();
    evento.stopPropagation();

    console.log("Se pulsó Volver a Conversación");

    cerrarArticulo();
});

    botonVolverFinal?.addEventListener("click", (evento) => {
        evento.preventDefault();
        evento.stopPropagation();
        cerrarArticulo();
    });

    window.addEventListener("popstate", evento => {
        if (evento.state?.articuloId) {
            mostrarArticulo(evento.state.articuloId, false);
            return;
        }

        const coincidencia = window.location.hash.match(/^#leer-(.+)$/);
        if (coincidencia) {
            mostrarArticulo(decodeURIComponent(coincidencia[1]), false);
        } else {
            cerrarArticulo(false);
        }
    });

    /* Permite abrir una lectura mediante enlace directo #leer-id. */
    const coincidenciaInicial = window.location.hash.match(/^#leer-(.+)$/);
    if (coincidenciaInicial) {
        mostrarArticulo(decodeURIComponent(coincidenciaInicial[1]), false);
    }

    renderizarIndice();
});
