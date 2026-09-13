// =====================================================
// BIAC 2026 — AGENDA
// JavaScript principal
// =====================================================


// =====================================================
// 1. ACTIVIDADES DE PRUEBA
// =====================================================

const actividades = [

    {
        dia: "24",
        horaInicio: "09:00",
        horaFin: "10:00",
        tipo: "CONFERENCIA",
        titulo: "Actividad de prueba 1",
        tematica: "TERRITORIO",
        sede: "Teatro Oficial Juan de Vera",
        presentador: "Presentador/a de prueba",
        profesion: "Arquitectura",
        foto: "images/expositor-01.png",
        estado: "CONFIRMADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    },

    {
        dia: "24",
        horaInicio: "10:30",
        horaFin: "11:30",
        tipo: "MESA",
        titulo: "Actividad de prueba 2",
        tematica: "CIUDAD",
        sede: "Auditorio Julián Zini",
        presentador: "Presentador/a de prueba",
        profesion: "Urbanismo",
        foto: "images/expositor-02.png",
        estado: "CANCELADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    },

    {
        dia: "24",
        horaInicio: "12:00",
        horaFin: "13:00",
        tipo: "WORKSHOP",
        titulo: "Actividad de prueba 3",
        tematica: "ARQUITECTURA",
        sede: "FAU-UNNE",
        presentador: "Presentador/a de prueba",
        profesion: "Arquitectura",
        foto: "images/expositor-03.png",
        estado: "REPROGRAMADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    },

    {
        dia: "25",
        horaInicio: "09:30",
        horaFin: "10:30",
        tipo: "CONFERENCIA",
        titulo: "Actividad de prueba 4",
        tematica: "ARQUITECTURA",
        sede: "Teatro Oficial Juan de Vera",
        presentador: "Presentador/a de prueba",
        profesion: "Arquitectura",
        estado: "CONFIRMADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    },

    {
        dia: "25",
        horaInicio: "11:00",
        horaFin: "12:00",
        tipo: "TALLER",
        titulo: "Actividad de prueba 5",
        tematica: "TERRITORIO",
        sede: "FAU-UNNE",
        presentador: "Presentador/a de prueba",
        profesion: "Urbanismo",
        estado: "REPROGRAMADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    },

    {
        dia: "26",
        horaInicio: "10:00",
        horaFin: "11:00",
        tipo: "MESA",
        titulo: "Actividad de prueba 6",
        tematica: "CIUDAD",
        sede: "Auditorio Julián Zini",
        presentador: "Presentador/a de prueba",
        profesion: "Arquitectura",
        estado: "CANCELADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    }

];


// =====================================================
// 2. INFORMACIÓN DE LAS SEDES
// =====================================================

const sedes = {

    "Teatro Oficial Juan de Vera": {

        direccion: "San Juan 637, Corrientes",

        descripcion:
            "Teatro histórico de la ciudad de Corrientes.",

        imagen:
            "images/teatro-juan-de-vera.jpg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=Teatro+Oficial+Juan+de+Vera+Corrientes"
    },


    "Auditorio Julián Zini": {

        direccion:
            "Blas Benjamín de la Vega 1699, Corrientes",

        descripcion:
            "Espacio cultural y auditorio destinado a actividades académicas y culturales.",

        imagen:
            "images/auditorio-julian-zini.jpg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=Auditorio+Julian+Zini+Blas+Benjamin+de+la+Vega+1699+Corrientes"
    },


    "FAU-UNNE": {

        direccion:
            "Av. Las Heras 727, Resistencia, Chaco",

        descripcion:
            "Facultad de Arquitectura y Urbanismo de la Universidad Nacional del Nordeste.",

        imagen:
            "images/fau-unne-1.jpeg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=FAU+UNNE+Av+Las+Heras+727+Resistencia+Chaco"
    },


    "MACC": {

        direccion:
            "9 de Julio 1098, Corrientes",

        descripcion:
            "Museo de Arte Contemporáneo de Corrientes.",

        imagen:
            "images/macc.jpg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=Museo+de+Arte+Contemporaneo+9+de+Julio+1098+Corrientes"
    }

};


// =====================================================
// 3. ELEMENTOS DEL HTML
// =====================================================

const contenedor =
    document.getElementById("actividades");

const botonesDias =
    document.querySelectorAll(".dia");

const botonesFiltros =
    document.querySelectorAll(".filtro");

const tituloDia =
    document.getElementById("titulo-dia");


// =====================================================
// 4. FILTROS ACTIVOS
// =====================================================

let filtroTipo = "TODOS";

let filtroTematica = "TODAS";

let filtroEstado = "TODOS";


// =====================================================
// 5. MOSTRAR ACTIVIDADES
// =====================================================

function mostrarActividades() {

    // Día actualmente seleccionado
    const botonDiaActivo =
        document.querySelector(".dia.activo");

    const diaSeleccionado =
        botonDiaActivo.dataset.dia;


    // Filtrar actividades
    const actividadesFiltradas =
        actividades.filter(actividad => {

            const coincideDia =
                actividad.dia === diaSeleccionado;

            const coincideTipo =
                filtroTipo === "TODOS" ||
                actividad.tipo === filtroTipo;

            const coincideTematica =
                filtroTematica === "TODAS" ||
                actividad.tematica === filtroTematica;

            const coincideEstado =
                filtroEstado === "TODOS" ||
                actividad.estado === filtroEstado;


            return (
                coincideDia &&
                coincideTipo &&
                coincideTematica &&
                coincideEstado
            );

        });


    // Limpiar contenido anterior
    contenedor.innerHTML = "";


    // Si no existen resultados
    if (actividadesFiltradas.length === 0) {

        contenedor.innerHTML = `

            <p class="sin-resultados">

                No hay actividades que coincidan
                con los filtros seleccionados.

            </p>

        `;

        return;
    }


    // Crear tarjetas
    actividadesFiltradas.forEach(actividad => {

        const tarjeta =
            document.createElement("article");


        tarjeta.classList.add("actividad");


        tarjeta.innerHTML = `
            <div class="horario">
                <strong class="inicio">${actividad.horaInicio}</strong>
                <span class="fin">${actividad.horaFin}</span>
            </div>

            <div class="actividad-info">
                <span class="tipo">${actividad.tipo}</span>
                <h3>${actividad.titulo}</h3>
                <span class="tematica">${actividad.tematica}</span>

                <p class="descripcion">
                    ${actividad.descripcion}
                </p>

                <p class="sede">
                    <span>SEDE:</span>
                    <button class="sede-btn" data-sede="${actividad.sede}">
                        ${actividad.sede}
                    </button>
                </p>
            </div>

            <div class="presentador">
                <div class="presentador-principal">
                    <img
                        src="${actividad.foto}"
                        alt="${actividad.presentador}"
                        class="foto-presentador"
                    >

                    <div class="presentador-datos">
                        <strong>${actividad.presentador}</strong>
                        <span>${actividad.profesion}</span>
                    </div>
                </div>

                <div class="actividad-acciones">
                    <span class="estado estado-${actividad.estado.toLowerCase()}">
                        ${actividad.estado}
                    </span>

                    <button class="opinion-btn">
                        OPINIONES
                    </button>
                </div>
            </div>
        `;


        contenedor.appendChild(tarjeta);

    });

}


// =====================================================
// 6. CAMBIAR DE DÍA
// =====================================================

botonesDias.forEach(boton => {

    boton.addEventListener("click", function() {


        // Quitar estado activo
        botonesDias.forEach(btn => {

            btn.classList.remove("activo");

        });


        // Activar botón seleccionado
        this.classList.add("activo");


        // Actualizar título
        tituloDia.textContent =
            obtenerTituloDia(this.dataset.dia);


        // Mostrar actividades
        mostrarActividades();

    });

});


// =====================================================
// 7. TÍTULO DEL DÍA
// =====================================================

function obtenerTituloDia(dia) {

    const titulos = {

        "24": "24 SEPTIEMBRE — JUEVES",

        "25": "25 SEPTIEMBRE — VIERNES",

        "26": "26 SEPTIEMBRE — SÁBADO"

    };


    return titulos[dia] || "AGENDA";

}


// =====================================================
// 8. FILTROS
// =====================================================

botonesFiltros.forEach(boton => {

    boton.addEventListener("click", function() {


        const tipoFiltro =
            this.dataset.filtro;

        const valor =
            this.dataset.valor;


        // Activar visualmente el botón
        this.parentElement
            .querySelectorAll(".filtro")
            .forEach(btn => {

                btn.classList.remove("activo");

            });


        this.classList.add("activo");


        // Guardar selección

        if (tipoFiltro === "tipo") {

            filtroTipo = valor;

        }


        if (tipoFiltro === "tematica") {

            filtroTematica = valor;

        }


        if (tipoFiltro === "estado") {

            filtroEstado = valor;

        }


        // Actualizar actividades
        mostrarActividades();

    });

});


// =====================================================
// 9. INFORMACIÓN DE LAS SEDES
// =====================================================

document.addEventListener("click", function(event) {


    // Verificar si se hizo clic en una sede
    if (!event.target.classList.contains("sede-btn")) {

        return;

    }


    const nombreSede =
        event.target.dataset.sede;


    const sede =
        sedes[nombreSede];


    // Si no existe información
    if (!sede) {

        alert(
            "Información de esta sede próximamente."
        );

        return;

    }


    // Crear modal
    const modal =
        document.createElement("div");


    modal.classList.add("sede-modal");


    modal.innerHTML = `

        <div class="sede-modal-contenido">

            <button
                class="sede-modal-cerrar"
            >
                ×
            </button>


            <img
                src="${sede.imagen}"
                alt="${nombreSede}"
                class="sede-modal-imagen"
            >


            <span class="sede-modal-etiqueta">
                SEDE
            </span>


            <h2>
                ${nombreSede}
            </h2>


            <p class="sede-direccion">
                ${sede.direccion}
            </p>


            <p class="sede-descripcion">
                ${sede.descripcion}
            </p>


            <button
                class="mapa-btn"
                data-mapa="${sede.mapa}"
            >
                VER UBICACIÓN
            </button>

        </div>

    `;


    document.body.appendChild(modal);


    // Botón mapa
    const mapaBtn =
        modal.querySelector(".mapa-btn");


    mapaBtn.addEventListener("click", function() {

        window.open(
            this.dataset.mapa,
            "_blank"
        );

    });


    // Botón cerrar
    const cerrar =
        modal.querySelector(
            ".sede-modal-cerrar"
        );


    cerrar.addEventListener("click", function() {

        modal.remove();

    });


    // Cerrar haciendo clic fuera
    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            modal.remove();

        }

    });

});


// =====================================================
// 10. INICIAR AGENDA
// =====================================================

// Mostrar el primer día al cargar la página

mostrarActividades();