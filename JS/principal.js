
(() => {
    // Actualizar el año del footer automáticamente
    const year = document.querySelector("#current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Animaciones de entrada al aparecer en pantalla
    const items = document.querySelectorAll(".reveal");
    const reduced = matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !reduced) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        obs.unobserve(e.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -35px 0px"
            }
        );

        items.forEach((el, i) => {
            el.style.transitionDelay =
                `${Math.min(i % 4, 3) * 65}ms`;

            observer.observe(el);
        });
    } else {
        items.forEach((el) => {
            el.classList.add("is-visible");
        });
    }

    // Resaltar el enlace de navegación de la sección actual
    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(
        '.main-navigation a[href^="#"]'
    );

    if (
        "IntersectionObserver" in window &&
        sections.length &&
        links.length
    ) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        links.forEach((a) => {
                            a.classList.toggle(
                                "is-current",
                                a.getAttribute("href") ===
                                    `#${e.target.id}`
                            );
                        });
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        );

        sections.forEach((s) => {
            observer.observe(s);
        });
    }
})();



/* =========================================
   QUIRÓN — Bestia
   Archivo: JS/principal.js
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       1. DATOS EDITORIALES
       ===================================== */

    /*
      Estos son registros de ejemplo para comprobar
      la estructura. Sustituiremos sus campos por los
      artículos reales de QUIRON CONTENIDOS.xlsx.

      articleBody contiene bloques narrativos:
      paragraph, heading, image, quote.
    */

    const articulos = [
        {
            id: "articulo-reflejo-001",
            titulo: "En el terror hay dos mundos",
            autor: "Pablo Quirós",
            fecha: "15 de febrero de 2025",
            seccion: "Reflejo",
            formato: "Crónica",
            imagen: "../../assets/images/portadas-articulos/terror-dos-mundos.jpeg",
            alt: "Ese es Pablo Quirós, “un mundo de amores cruzados en el que la realidad supera a la ficción” ",
            intriga: "Nacido de la contradicción, del amor y del dolor. Con unas ansias de existir más fuertes que su historia a cuestas.",
            recomendado: true,
            profundizacion: "En septiembre del 2006 el mundo era un lugar demasiado hostil para dar acogida al bebé de una joven sin rumbo fijo ni lápida segura. No acorde a las nimiedades coyunturales, aparece en esta historia un neonato con más deseos de nacer y sobrevivir que preocupaciones sobre el peso de su herencia. Descubre el nacimiento de un hijo con dos madres, fruto de una semilla dividida, pero con un gran esqueje de amor.",
            etiquetas: ["Identidad", "Narraciones del Yo", "Maternidad", "Crónica"],
            proporcion: "1 / 1",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "En Colombia septiembre es el “mes del Amor y la Amistad”, sin embargo, para una primigestante como Nora Stella Quirós, ese mes era un recordatorio de los estragos de fin de año. “Usted fue concebido un 24 de diciembre, fruto de la emoción navideña” comenta con picardía Marleny Quirós, testigo única e incuestionable del parto de Nora Stella e irónicamente madrina y hermana mayor de la madre gestante. "
                },
                {
                    tipo: "paragraph",
                    texto: "Nora Stella tenía dos madres, una que había sido incapaz de criarla debido al antinatural temor que despierta el desconcierto de una madre ante sus hijos y otra que desprendía un amor protector que llenó su vida, pero cuya ausencia propició el primer desastre de su corazón. "
                },
                {
                    tipo: "paragraph",
                    texto: "El acontecimiento más importante de ese día, 20 de septiembre de 2006, fue el discurso de Hugo Chávez, presidente ‘electo’ de Venezuela, ante la sexagésima primera Asamblea General de las Naciones Unidas. En su discurso, Chávez advirtió: “La más grande amenaza se cierne sobre nuestro planeta, la pretensión hegemónica del Imperialismo Norteamericano” con un énfasis pictórico sobre la palabra AMENAZA, como si fuese un graffiti en grandes letras negras, resaltadas en rojo, que alertaba sobre los peligros de la furia de la Gran Potencia. "
                },
                {
                    tipo: "paragraph",
                    texto: "“Todo va fatal la vida no tiene sentido, hay gente peor pero eso no es consuelo para mí, no” una línea exacta de los Violadores del Verso en la canción ‘Filosofía y Letras’ publicada en 2006, que pareciera la descripción de la filosofía de un mundo en caos y desorden, donde Estados Unidos despertaba terror y perseguía terroristas;"
                },
                {
                    tipo: "quote",
                    texto: "en una Colombia en la que 5 millones de ciudadanos se acostaban sin comida y cerca de la mitad estaban considerados en el rango de la pobreza"
                },
                {
                    tipo: "paragraph",
                    texto: "donde en Colombia, según el Vaticano, se estaba presenciando la tercer crisis humanitaria más grave del mundo, compitiendo con las masacres del Líbano y Palestina; donde se cuestionaba la moralidad eclesiástica en una investigación en contra del papado de Pío XII por su impavidez ante el holocausto judío e incluso, en una Colombia en la que 5 millones de ciudadanos se acostaban sin comida y cerca de la mitad estaban considerados en el rango de la pobreza, según la edición del 20 de septiembre del mismo año del periódico El Colombiano."
                },
                {
                    tipo: "paragraph",
                    texto: "¿Qué esperanza podría entonces albergar Nora Stella para su primogénito en gestación? A sus 26 años ella había sufrido un derrame cerebral, resultando este en una parálisis que afectaba desde los gestos del hemisferio derecho de su cara hasta los movimientos de sus pies. Sufría a raíz de ello lagunas mentales de días enteros y episodios de narcolepsia que le impedían ser plenamente funcional y valerse por sí misma; ¿Cómo esperaba entonces cuidar a otro ser cuando el control de su cuerpo escapaba de su dominio? "
                },
                {
                    tipo: "heading",
                    texto: "Coyuntura geopolítica"
                },
                {
                    tipo: "paragraph",
                    texto: "La situación del “Imperio Yankee” con el mundo oriental iba en declive; Irak, Líbano, Palestina e Irán sufrían las consecuencias del “fuego genocida” de los Estados Unidos, pero también de su campaña propagandística contra el terrorismo; Hugo Chávez, en su discurso desde la ONU, se refiere a la CIA, el organismo de inteligencia militar de los norteamericanos, cómo unos “terroristas, culpables de homicidio”, dejando en evidencia la ‘guerra de guante blanco’ que se vivía en paralelo a la de los bombardeos y los asesinatos. Para Chávez “el mundo estaba despertando” mientras los Estados Unidos financiaban la masacre a manos de Israel o de los afganos. Tal inestabilidad podría ser comparable a la salud mental y corporal de Nora Stella, quien pese a sus terapias de rehabilitación no lograba recuperar ese estado de gimnasta profesional que tan buen futuro le había augurado."
                },
                {
                    tipo: "paragraph",
                    texto: "34 años tenía cuando pudo dar a luz a su primer y único engendro, pues le fue programada la tubectomía a la par que la cesárea. Aunque todo su embarazo fue monitoreado desde el hospital San Juan de Dios de Rionegro, en el que Marleny era enfermera jefe, el parto, debido a su alto riesgo debió ser atendido en el Hospital General de Medellín, un hospital de tercer nivel que para la época era de los que mejor nota en salud tenía en la capital antioqueña. La situación no parecía más que una copia de los problemas de Chris Gardner y su joven hijo en “The Pursuit of Happiness”, sin embargo comenzaba a parecerse a la terrorífica realidad de muchas madres en el país. La historia de Luisa Fernanda, publicada el 19 de septiembre en el Colombiano, era una de ellas, “Luisa Fernanda no tiene el primer año de vida y ya padece las condiciones de pobreza en las que se encuentra la mitad de los colombianos”. Con esto la Iglesia solicitaba al gobierno declarar el estado de “Emergencia Social” en todo el territorio."
                },
                {
                    tipo: "heading",
                    texto: "La otra madre"
                },
                {
                    tipo: "paragraph",
                    texto: "Marleny Quirós acompañó a Nora Stella de principio a fin el día del parto, “A las 4 de la tarde aprobaron la cesárea, - especifica Marleny - a las 8 de la noche la ingresan a cirugía y la acompaño hasta las 12:30 de la madrugada”. Aquí reconoce la que en un futuro sería la protectora de ese niño, que no estaba permitido la estadía de cualquier acompañante que no fuera el progenitor, así que, decidida a quedarse, le pidió ayuda a una de las enfermeras para quedarse mientras nacía el bebé, “Me escondí debajo del escritorio del gineco obstetra, aproveché a dormir una horita mientras me dejaban ver a Nora Stella”. Relata con una mezcla de vergüenza y júbilo como el doctor se sentó en el escritorio y apenas si la rozó con los pies, como si hubiese sido entrenada para espía, “era un escritorio amplio, de casi dos metros de longitud, si el doctor no se movía yo estaba tranquila”"
                },
                {
                    tipo: "paragraph",
                    texto: "“Tu progenitora no entró en trabajo de parto, fue una cesárea programada”, más allá de algunas emergencias, en el Hospital General se respiraba un ambiente controlado y pasadas las 2:10 de la madrugada del 20 de septiembre nacería sin mayores complicaciones un pequeño ser que, incluso entre los brazos de su madre, estaría a la deriva en un mundo de terrores y terroristas por doquier."
                },
                {
                    tipo: "paragraph",
                    texto: "Álvaro Uribe Vélez cursaba aún su primer año en la presidencia de Colombia, con la sorpresa de un aumento importante en el número de soldados que militaban en las regiones complejas del país. Un ejemplo sería la Comuna 13 en Medellín, cuya seguridad sería reforzada, tal vez con la promesa de ser, 15 años después, el producto de una mezcla cultural entre lo que somos y queremos ser. Curiosamente una pregunta que estaría presente en toda la historia de este ser, ínfimo acontecimiento de un mundo cambiante que no estaba preparado para contener sus ganas de ser, a pesar del terror."
                },
                {
                    tipo: "heading",
                    texto: "Milagro"
                },
                {
                    tipo: "paragraph",
                    texto: "Reunidas alrededor de la camilla de Nora Stella, sus dos madres experimentaron un regocijo genuino por la nueva vida que llegaba a la familia, entre tantas grietas, una oportunidad de unir a la familia una vez más. La mano protectora de Marleny Quirós se cernía sobre la esperanza de ambos seres, progenitora y engendro, desprotegidos, pero vistos bajo la luz de sus ojos como potencias de vida maravillosas. 'La ciencia médica no es exacta, - reflexionaba Marleny - ¿cómo un niño que se decía presentaba alto riesgo para nacer pudo llegar al mundo tan sano, sin complicaciones ni trabajo de parto?'"
                },
                {
                    tipo: "quote",
                    texto: "Ese es Pablo Quirós, «un mundo de amores cruzados en el que la realidad supera a la ficción»."
                },
                {
                    tipo: "paragraph",
                    texto: "“Sano y protegido”, las dos palabras que más figuraron en esa mujer, que sin siquiera sospecharlo sería la encargada de darle forma al futuro de ese ente nacido el miércoles 20 de septiembre de 2006 a las 2:10 de la madrugada. La historia se reitera y redunda sobre sus designios, dos madres que preceden a otras dos madres, dos mundos buscando, a través de sus formas imperfectas y temerosas, un futuro brillante para su protegido. Dos mujeres que chocan y se complementan, no solo por su historia, sino por su devenir. Ese es Pablo Quirós, «un mundo de amores cruzados en el que la realidad supera a la ficción» (Diana Londoño, “Ay el amor, cosa tan rara” El Colombiano (19/09/2006))"
                }
            ]
        },

        {
            id: "entrevista-nomadas-001",
            titulo: "Kalma, eso busca el viajero",
            autor: "Pablo Quirós",
            fecha: "31 de mayo del 2025",
            seccion: "Nómadas",
            formato: "Entrevista narrativa",
            imagen: "../../assets/images/portadas-articulos/kalma-nomadas.png",
            alt: "Un café en Kalma y descubrir la primera capital antioqueña",
            intriga: "Una perspectiva sobre el turismo regional en los pueblos aledaños a Medellín; los retos estructurales a los que se enfrentan y la propuesta decidida que tienen para construir un nuevo modelo turístico de cara al público.",
            recomendado: true,
            profundizacion: "Es importante adentrarse en el propósito de nacimiento de un lugar para comprender el lugar que ocupa en el territorio. El hotel Kalma sabe por qué llegó y por qué quiere quedarse. Una apuesta por reavivar el turismo de la antigua capital antioqueña, la puerta hacia el occidente y un lugar que parece, por momentos, suspendido en el tiempo. Eso sí, debe revisarse que tan suspendidos desean estar. ¿Será esta la mejor apuesta para un nómada?",
            etiquetas: ["Antioquia", "Nómadas", "Turismo", "Entrevista"],
            proporcion: "3 / 4",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "Aquí comienza el cuerpo del artículo. Sustituye este texto por el contenido real de la crónica o el perfil."
                },
                {
                    tipo: "heading",
                    texto: "Un subtítulo dentro de la historia"
                },
                {
                    tipo: "paragraph",
                    texto: "Este bloque permite continuar la narración y organizar el texto en apartados."
                },
                {
                    tipo: "quote",
                    texto: "Aquí puedes incorporar una cita destacada del artículo."
                },
                {
                    tipo: "paragraph",
                    texto: "El artículo puede tener tantos párrafos, subtítulos y destacados como necesite."
                }
            ]
        },

        {
            id: "entrevista-nomadas-002",
            titulo: "Los Cazatardeceres: “El nómada digital no está pasando por una ‘fase’, ya eligió un estilo de vida”",
            autor: "Pablo Quirós",
            fecha: "30 de octubre del 2024",
            seccion: "Nómadas",
            formato: "Entrevista/Testimonio",
            imagen: "../../assets/images/portadas-articulos/cazatardeceres.jpeg",
            alt: "Maria y Pipe, con su sueño de los Cazatardeceres",
            intriga: "Maria y Pipe, una pareja intrépida que está cazando el mejor atardecer en Colombia, a la par que su sueño de viajar en una casa con ruedas y alcanzar la libertad.",
            recomendado: true,
            profundizacion: "Ellos son Maria y Felipe. Una pareja de paisas que estuvieron dispuestos a arriesgar sus cómodas vidas cuando vieron que les faltaba dirección. Solo hizo falta un chispazo de aventura y ambos se embarcaron en un sueño con forma de van mientras le decían adiós a las imposiciones de lo cotidiano. Cazan el mejor ocaso, el de los sueños cumplidos.",
            etiquetas: ["Nómadas", "Lifestyle", "Viajes", "Testimonio"],
            proporcion: "3 / 4",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "Aquí comienza el cuerpo del artículo. Sustituye este texto por el contenido real de la crónica o el perfil."
                },
                {
                    tipo: "heading",
                    texto: "Un subtítulo dentro de la historia"
                },
                {
                    tipo: "paragraph",
                    texto: "Este bloque permite continuar la narración y organizar el texto en apartados."
                },
                {
                    tipo: "quote",
                    texto: "Aquí puedes incorporar una cita destacada del artículo."
                },
                {
                    tipo: "paragraph",
                    texto: "El artículo puede tener tantos párrafos, subtítulos y destacados como necesite."
                }
            ]
        },

        {
            id: "articulo-reflejo-002",
            titulo: "Mamá, yo quiero ser rapero",
            autor: "Pablo Quirós",
            fecha: "29 de mayo de 2025",
            seccion: "Reflejo",
            formato: "Crónica inmersiva",
            imagen: "../../assets/images/portadas-articulos/mama-rapero-2.png",
            alt: "(...)A ese punto ni siquiera sabía lo que significaba ser rapero...",
            intriga: "La inmersión de un estudiante universitario en un día como artista callejero en los buses, descubriendo lo que hace falta para llevar ese estilo de vida con éxito y algunos secretos que la cotidianidad no arroja.",
            recomendado: true,
            profundizacion: "Si enfrentarse a lo que temes es difícil, enfrentarse a lo que amas lo es aún más, más aún cuando estás en frente de un bus, solo, perdido, inseguro y tienes que depender de tu talento para llevar comida a tu casa. En esta inmersión descubrimos lo que realmente significa ser artista callejero, ¿cómo se llega a vivir de esto?, ¿qué hace falta para atreverse a subirse a un bus?, ¿en verdad es tan fácil rapear en la calle?",
            etiquetas: ["Inmersión", "Arte", "Crónica", "Realidad"],
            proporcion: "4 / 3",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "Aquí comienza el cuerpo del artículo. Sustituye este texto por el contenido real de la crónica o el perfil."
                },
                {
                    tipo: "heading",
                    texto: "Un subtítulo dentro de la historia"
                },
                {
                    tipo: "paragraph",
                    texto: "Este bloque permite continuar la narración y organizar el texto en apartados."
                },
                {
                    tipo: "quote",
                    texto: "Aquí puedes incorporar una cita destacada del artículo."
                },
                {
                    tipo: "paragraph",
                    texto: "El artículo puede tener tantos párrafos, subtítulos y destacados como necesite."
                }
            ]
        },

        {
            id: "articulo-reflejo-003",
            titulo: "Perfil Pablo",
            autor: "Kiara Betancur",
            fecha: "16 de marzo del 2025",
            seccion: "Reflejo",
            formato: "Perfil narrativo",
            imagen: "../../assets/images/portadas-articulos/perfil-pablo.jpeg",
            alt: "'Poema es soledad de la alborada, es un trovador en serenata queriendo la luna enamorar.'",
            intriga: "'Poema es soledad de la alborada, un ebrio triste en la calzada queriendo la luna alcanzar…' Una de las estrofas de una canción de los Hermanos Arriagada que marcó a Pablo en su infancia y fue el inicio de su futura personalidad poética.",
            recomendado: false,
            profundizacion: "",
            etiquetas: ["Perfil", "Exploración", "Identidad"],
            proporcion: "3 / 4",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "Aquí comienza el cuerpo del artículo. Sustituye este texto por el contenido real de la crónica o el perfil."
                },
                {
                    tipo: "heading",
                    texto: "Un subtítulo dentro de la historia"
                },
                {
                    tipo: "paragraph",
                    texto: "Este bloque permite continuar la narración y organizar el texto en apartados."
                },
                {
                    tipo: "quote",
                    texto: "Aquí puedes incorporar una cita destacada del artículo."
                },
                {
                    tipo: "paragraph",
                    texto: "El artículo puede tener tantos párrafos, subtítulos y destacados como necesite."
                }
            ]
        },

        {
            id: "articulo-principal-001",
            titulo: "“¡VOY A CAGAR, VOY A CAGAR!”, EL AÑO RURAL DE MARLENY QUIRÓS",
            autor: "Pablo Quirós",
            fecha: "30 de mayo del 2024",
            seccion: "Principal",
            formato: "Testimonio",
            imagen: "../../assets/images/portadas-articulos/testimonio-marleny-1.png",
            alt: "la niña lo único que gritaba era ‘voy a cagar, voy a cagar’",
            intriga: "Memorias de una cuidadora cuyo impulso de sanar llegó hasta el fondo de la herida.",
            recomendado: true,
            profundizacion: "En los 80s, ser profesional de la salud era peligroso, nunca se sabía para que bando necesitabas actuar. En un territorio como Caucasia, el peligro no hacía sino aumentar. Sumérjase en la desgarradora historia de una mujer que, buscando sanar, llegó hasta lo más profundo de la herida en Colombia.",
            etiquetas: ["Territorio", "Literario", "Testimonio", "Conflicto"],
            proporcion: "4 / 3",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "Aquí comienza el cuerpo del artículo. Sustituye este texto por el contenido real de la crónica o el perfil."
                },
                {
                    tipo: "heading",
                    texto: "Un subtítulo dentro de la historia"
                },
                {
                    tipo: "paragraph",
                    texto: "Este bloque permite continuar la narración y organizar el texto en apartados."
                },
                {
                    tipo: "quote",
                    texto: "Aquí puedes incorporar una cita destacada del artículo."
                },
                {
                    tipo: "paragraph",
                    texto: "El artículo puede tener tantos párrafos, subtítulos y destacados como necesite."
                }
            ]
        },

        {
            id: "articulo-nomadas-003",
            titulo: "Un cafecito sin plan, Julián Barela",
            autor: "Pablo Quirós",
            fecha: "29 de septiembre del 2024",
            seccion: "Nómadas",
            formato: "Retrato",
            imagen: "../../assets/images/portadas-articulos/cafecito-sin-plan.jpeg",
            alt: "Julián Barela, un porteño a su ritmo, sin afanes.",
            intriga: "Un nómada en Guatapé disfrutando del momento como solo aquellos que han encontrado su camino pueden darse el lujo de hacerlo.",
            recomendado: true,
            profundizacion: "Descubre a Julián. Un nómada argentino sin mucho afán, sin mucho lío. Su historia puede motivarte a que explores el mundo y las posibilidades de moverte libremente hacia donde un buen café llame.",
            etiquetas: ["Retrato", "Nómadas", "Guatapé", "Lifestyle"],
            proporcion: "3 / 4",
            cuerpo: [
                {
                    tipo: "paragraph",
                    texto: "Aquí comienza el cuerpo del artículo. Sustituye este texto por el contenido real de la crónica o el perfil."
                },
                {
                    tipo: "heading",
                    texto: "Un subtítulo dentro de la historia"
                },
                {
                    tipo: "paragraph",
                    texto: "Este bloque permite continuar la narración y organizar el texto en apartados."
                },
                {
                    tipo: "quote",
                    texto: "Aquí puedes incorporar una cita destacada del artículo."
                },
                {
                    tipo: "paragraph",
                    texto: "El artículo puede tener tantos párrafos, subtítulos y destacados como necesite."
                }
            ]
        },
    ];


    /* =====================================
       2. REFERENCIAS A LOS ELEMENTOS HTML
       ===================================== */

    const indice = document.getElementById("bestia-indice");
    const archivo = document.getElementById("archivo-recomendado");
    const principal = document.getElementById("principal-articulo");
    const nomadas = document.getElementById("nomadas-track");
    const reflejo = document.getElementById("reflejo-collage");

    const lector = document.getElementById("article-reader");
    const lectorContenido = document.getElementById("article-reader-content");

    const botonVolver = document.getElementById("volver-a-bestia");
    const botonVolverFinal = document.getElementById("volver-a-bestia-final");

    const anio = document.getElementById("current-year");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }


    /* =====================================
       3. FUNCIONES AUXILIARES
       ===================================== */

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

    function obtenerFechaLegible(fecha) {
        if (!fecha || fecha === "Fecha de publicación") {
            return fecha || "";
        }

        return fecha;
    }

    function renderizarMetadatos(articulo) {
        const autor = escaparHTML(articulo.autor);
        const fecha = escaparHTML(obtenerFechaLegible(articulo.fecha));
        const formato = escaparHTML(articulo.formato);

        return `
            <div class="article-meta">
                <span>${formato}</span>
                <span>${autor}</span>
                <span>${fecha}</span>
            </div>
        `;
    }

    
    function renderizarTarjeta(articulo, clase = "") {
        const titulo = escaparHTML(articulo.titulo);
        const id = escaparHTML(articulo.id);
        const imagen = escaparHTML(articulo.imagen);
        const alt = escaparHTML(articulo.alt || articulo.titulo);
        const intriga = escaparHTML(articulo.intriga || "");
        const proporcionPermitida = ["16 / 9", "4 / 3", "3 / 4", "1 / 1"];
        const proporcion = proporcionPermitida.includes(articulo.proporcion)
            ? articulo.proporcion
            : "4 / 3";

        const etiquetas = Array.isArray(articulo.etiquetas)
            ? articulo.etiquetas
                .filter(etiqueta => typeof etiqueta === "string" && etiqueta.trim())
                .map(etiqueta =>
                    `<span class="article-card__tag">${escaparHTML(etiqueta)}</span>`
                )
                .join("")
            : "";

        const etiquetasHTML = etiquetas
            ? `<div class="article-card__tags" aria-label="Temas del artículo">${etiquetas}</div>`
            : "";

        
        return `
            <article
                class="article-card ${clase}"
                data-proporcion="${articulo.proporcion || "4 / 3"}"
                style="--article-ratio: ${articulo.proporcion || "4 / 3"};"
            >
                <button
                    class="article-card__image"
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

                <div class="article-card__copy">
                    <h3>
                        <a
                            class="article-card__link"
                            href="#leer-${encodeURIComponent(articulo.id)}"
                            data-open-article="${id}"
                        >${titulo}</a>
                    </h3>

                    <div class="article-card__details">
                        <p class="article-teaser">${intriga}</p>
                        ${renderizarMetadatos(articulo)}
                        ${etiquetasHTML}
                    </div>
                </div>
            </article>
        `;
    }

    /* =====================================
       4. RECOMENDACIÓN DIARIA
       ===================================== */

    /*
      La recomendación se calcula usando la fecha local
      y el conjunto de artículos disponibles.

      Con la misma lista y la misma fecha, la elección
      será la misma. Cambiará al llegar el día siguiente.

      No necesita almacenamiento ni servidor.
    */

    function obtenerNumeroDelDia(fecha, cantidad) {
        const claveFecha = [
            fecha.getFullYear(),
            String(fecha.getMonth() + 1).padStart(2, "0"),
            String(fecha.getDate()).padStart(2, "0")
        ].join("-");

        let hash = 0;

        for (let i = 0; i < claveFecha.length; i++) {
            hash = (hash * 31 + claveFecha.charCodeAt(i)) >>> 0;
        }

        return cantidad > 0 ? hash % cantidad : 0;
    }

    function elegirRecomendacionDiaria() {
        /*
          Excluimos registros incompletos de ejemplo.
          Solo pueden recomendarse artículos con datos reales.
        */

        const candidatos = articulos.filter(articulo =>
            articulo.titulo &&
            articulo.imagen &&
            articulo.intriga &&
            articulo.titulo !== "Título del artículo principal" &&
            articulo.autor !== "Nombre del autor" &&
            articulo.fecha !== "Fecha de publicación"
        );

        if (candidatos.length === 0) {
            return null;
        }

        const hoy = new Date();
        const posicion = obtenerNumeroDelDia(hoy, candidatos.length);

        return candidatos[posicion];
    }

    function renderizarRecomendacionDiaria() {
        if (!archivo) return;

        const articulo = elegirRecomendacionDiaria();

        if (!articulo) {
            archivo.innerHTML = `
                <p class="article-teaser">
                    El archivo recomendado aparecerá cuando incorpores
                    los artículos reales al catálogo de Bestia.
                </p>
            `;
            return;
        }

        archivo.innerHTML = `
            <div class="daily-card__image"
             style="--article-ratio: ${escaparHTML(articulo.proporcion || "4 / 3")};"
            >
                <img
                    src="${escaparHTML(articulo.imagen)}"
                    alt="${escaparHTML(articulo.alt)}"
                    loading="lazy"
                >
            </div>

            <div class="daily-card__copy">
                <p class="eyebrow">La recomendación de hoy</p>

                ${renderizarMetadatos(articulo)}

                <h3>${escaparHTML(articulo.titulo)}</h3>

                <p>${escaparHTML(articulo.intriga)}</p>

                <div class="daily-card__deepening">
                    <p>${escaparHTML(articulo.profundizacion || "")}</p>
                </div>

                <button
                    class="daily-card__link"
                    type="button"
                    data-open-article="${escaparHTML(articulo.id)}"
                >
                    Entrar en la historia →
                </button>
            </div>
        `;
    }


    /* =====================================
       5. RENDERIZAR LOS BLOQUES
       ===================================== */

    function renderizarPrincipal() {
        if (!principal) return;

        const articulo = articulos.find(item =>
            item.seccion === "Principal"
        );

        if (!articulo) {
            principal.innerHTML = "<p>Próximamente.</p>";
            return;
        }

        principal.innerHTML = `
            <button
                class="principal-feature__image"
                type="button"
                data-open-article="${escaparHTML(articulo.id)}"
                aria-label="Leer: ${escaparHTML(articulo.titulo)}"
            >
                <img
                    src="${escaparHTML(articulo.imagen)}"
                    alt="${escaparHTML(articulo.alt)}"
                    loading="lazy"
                >
            </button>

            <div class="principal-feature__copy">
                ${renderizarMetadatos(articulo)}

                <h3>${escaparHTML(articulo.titulo)}</h3>

                <p class="article-teaser">
                    ${escaparHTML(articulo.intriga)}
                </p>

                <button
                    class="article-card__link"
                    type="button"
                    data-open-article="${escaparHTML(articulo.id)}"
                >
                    Leer la historia →
                </button>
            </div>
        `;
    }

    function renderizarNomadas() {
        if (!nomadas) return;

        const articulosNomadas = articulos.filter(item =>
            item.seccion === "Nómadas"
        );

        if (articulosNomadas.length === 0) {
            nomadas.innerHTML = `
                <p>
                    Los artículos de Nómadas en Primavera aparecerán aquí
                    cuando se incorporen al catálogo.
                </p>
            `;
            return;
        }

        nomadas.innerHTML = articulosNomadas
            .map(articulo => renderizarTarjeta(articulo, "nomadas-card"))
            .join("");
    }

    function renderizarReflejo() {
        if (!reflejo) return;

        const articulosReflejo = articulos.filter(item =>
            item.seccion === "Reflejo"
        );

        if (articulosReflejo.length === 0) {
            reflejo.innerHTML = "<p>Próximamente.</p>";
            return;
        }

        reflejo.innerHTML = articulosReflejo
            .map(articulo => renderizarTarjeta(articulo, "reflejo-card"))
            .join("");
    }


    /* =====================================
       6. VISTA DE LECTURA DEL ARTÍCULO
       ===================================== */

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

                case "paragraph":
                default:
                    return `<p>${texto}</p>`;
            }
        }).join("");
    }

    function renderizarArticulo(articulo) {
        lectorContenido.innerHTML = `
            <div class="article-reader__content">

                <header class="article-reader__header">
                    <p class="eyebrow">
                        ${escaparHTML(articulo.seccion)} ·
                        ${escaparHTML(articulo.formato)}
                    </p>

                    <h1>${escaparHTML(articulo.titulo)}</h1>

                    <p class="article-reader__standfirst">
                        ${escaparHTML(articulo.intriga)}
                    </p>

                    ${renderizarMetadatos(articulo)}
                </header>

                <figure class="article-reader__hero">
                    <img
                        src="${escaparHTML(articulo.imagen)}"
                        alt="${escaparHTML(articulo.alt)}"
                    >
                    <figcaption class="article-reader__caption">
                        ${escaparHTML(articulo.alt)}
                    </figcaption>
                </figure>

                <div class="article-reader__body">
                    ${renderizarCuerpo(articulo.cuerpo)}
                </div>

            </div>
        `;
    }

    function abrirArticulo(id) {
        const articulo = obtenerArticulo(id);

        if (!articulo || !indice || !lector || !lectorContenido) {
            return;
        }

        renderizarArticulo(articulo);

        indice.hidden = true;
        lector.hidden = false;

        document.title = `${articulo.titulo} | Bestia — Quirón`;

        const nuevaURL = `#leer-${encodeURIComponent(articulo.id)}`;
        history.pushState({ articuloId: articulo.id }, "", nuevaURL);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function cerrarArticulo(actualizarHistorial = true) {
        if (!indice || !lector) return;

        lector.hidden = true;
        indice.hidden = false;

        document.title = "Bestia | Quirón";

        if (actualizarHistorial) {
            history.pushState({}, "", window.location.pathname + window.location.search);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* =====================================
       7. EVENTOS DE APERTURA Y CIERRE
       ===================================== */

    document.addEventListener("click", evento => {
        const activador = evento.target.closest("[data-open-article]");

        if (!activador) return;

        evento.preventDefault();

        abrirArticulo(activador.dataset.openArticle);
    });

    if (botonVolver) {
        botonVolver.addEventListener("click", () => {
            cerrarArticulo();
        });
    }

    if (botonVolverFinal) {
        botonVolverFinal.addEventListener("click", () => {
            cerrarArticulo();
        });
    }

    window.addEventListener("popstate", evento => {
        if (evento.state && evento.state.articuloId) {
            abrirArticuloSinHistorial(evento.state.articuloId);
        } else {
            cerrarArticulo(false);
        }
    });

    function abrirArticuloSinHistorial(id) {
        const articulo = obtenerArticulo(id);

        if (!articulo || !indice || !lector || !lectorContenido) return;

        renderizarArticulo(articulo);
        indice.hidden = true;
        lector.hidden = false;
        document.title = `${articulo.titulo} | Bestia — Quirón`;

        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    /* =====================================
       8. NAVEGACIÓN SUAVE ENTRE BLOQUES
       ===================================== */

    document.querySelectorAll('.bestia-subnav a[href^="#"]').forEach(enlace => {
        enlace.addEventListener("click", evento => {
            const destino = document.querySelector(enlace.getAttribute("href"));

            if (!destino) return;

            evento.preventDefault();

            destino.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                block: "start"
            });

            history.replaceState(
                history.state,
                "",
                enlace.getAttribute("href")
            );
        });
    });


    /* =====================================
       9. FLECHAS DEL CARRUSEL DE NÓMADAS
       ===================================== */

    document.querySelectorAll("[data-carousel-prev], [data-carousel-next]")
        .forEach(boton => {
            boton.addEventListener("click", () => {
                const id = boton.dataset.carouselPrev ||
                           boton.dataset.carouselNext;

                const carrusel = document.getElementById(id);

                if (!carrusel) return;

                const direccion = boton.hasAttribute("data-carousel-next") ? 1 : -1;

                carrusel.scrollBy({
                    left: direccion * carrusel.clientWidth * 0.8,
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                        ? "auto"
                        : "smooth"
                });
            });
        });


    /* =====================================
       10. INICIALIZACIÓN
       ===================================== */

    renderizarRecomendacionDiaria();
    renderizarPrincipal();
    renderizarNomadas();
    renderizarReflejo();

    /*
      Si el navegador carga directamente un enlace
      del tipo #leer-articulo-principal, abrimos
      el artículo correspondiente.
    */

    const coincidencia = window.location.hash.match(/^#leer-(.+)$/);

    if (coincidencia) {
        abrirArticuloSinHistorial(decodeURIComponent(coincidencia[1]));
    }

});
