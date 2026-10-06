"use client";

import Image from "next/image";
import { useState } from "react";

type Phase = "all" | "gestacion" | "operativa" | "cierre";

const filters: { id: Phase; label: string; note: string }[] = [
  { id: "all", label: "Todas las fases", note: "26 hitos" },
  { id: "gestacion", label: "Gestación", note: "2018 — 2022" },
  { id: "operativa", label: "Legal y operativa", note: "2022 — 2025" },
  { id: "cierre", label: "Cierre", note: "2026" },
];

export function HomePage() {
  const [filter, setFilter] = useState<Phase>("all");

  function select(next: Phase) {
    setFilter(next);
    const timeline = document.getElementById("timeline");
    if (!timeline) return;
    const y = timeline.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }

  function hidden(phase: Exclude<Phase, "all">) {
    return filter !== "all" && filter !== phase ? " is-hidden" : "";
  }

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <Image
            className="logo"
            src="/logo-wordmark.png"
            alt="Asociación Chilena de Experiencias Inmersivas"
            width={480}
            height={220}
            priority
            style={{ width: "auto", height: "56px" }}
          />
          <div className="top-meta" aria-label="Datos clave">
            <span className="pill">
              Formalización <b>22 jul 2022</b>
            </span>
            <span className="pill">
              Ciclo <b>2018 — 2026</b>
            </span>
            <span className="pill">Chile</span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="hero" aria-labelledby="title">
          <div className="hero-grid">
            <div>
              <p className="kicker">Línea de tiempo visual · 2018 — 2026</p>
              <h1 id="title">
                De la idea
                <br />
                <em>a la institución,</em>
                <br />y al cierre.
              </h1>
              <p className="hero-lede">
                ACHEX nació en 2018 como una iniciativa de profesionales del
                sector XR chileno. Se constituyó legalmente como la{" "}
                <strong>
                  Asociación Gremial Chilena de Experiencias Inmersivas
                </strong>{" "}
                el 22 de julio de 2022 y completó su ciclo en 2026, tras ocho
                años articulando a la industria inmersiva del país. Fue el
                único gremio de Chile dedicado al fomento y desarrollo de la
                industria XR: una asociación gremial sin fines de lucro que
                fomentó la colaboración entre empresas, instituciones y
                personas innovadoras del ecosistema de tecnologías inmersivas y
                las industrias creativas.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#timeline">
                  Ver línea de tiempo
                </a>
                <a className="btn" href="#fundadores">
                  Fundadores formales
                </a>
                <a className="btn" href="#legado">
                  Legado
                </a>
              </div>
              <div className="highlight" role="note">
                <span className="num">972</span>
                <p>
                  <b>Chilenos capacitados en tecnologías de realidad aumentada.</b>{" "}
                  Resultado de la capacitación en Spark AR realizada junto a
                  Chile Creativo y CRT+IC, uno de los impactos medibles del
                  gremio.
                </p>
              </div>
              <figure className="spot">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/achex-spot.jpg"
                >
                  <source src="/achex-spot.mp4" type="video/mp4" />
                </video>
                <figcaption>
                  Pieza institucional de ACHEX: qué es el gremio y a quién
                  reúne.
                </figcaption>
              </figure>
            </div>

            <aside className="hero-card" aria-label="Resumen">
              <h3>Resumen del ciclo</h3>
              <div className="big-years">
                2018 <span>→</span> 2026 <span>· 8 años</span>
              </div>
              <p className="summary">
                Gestación, constitución legal, operación gremial y cierre de
                ciclo. Cuatro fundadores formales en 2022, una red
                internacional activa y capacidades instaladas que no existían
                al inicio.
              </p>
              <div className="stats">
                <div className="stat">
                  <b>22 jul 2022</b>
                  <span>
                    Constitución legal ante notaría en Santiago, Repertorio N°
                    2101-2022
                  </span>
                </div>
                <div className="stat">
                  <b>972</b>
                  <span>
                    Chilenos capacitados en tecnologías de realidad aumentada
                    con Spark AR (Chile Creativo + CRT+IC, 2022)
                  </span>
                </div>
                <div className="stat">
                  <b>32</b>
                  <span>
                    Empresas asociadas en 6 verticales de industria durante la
                    fase operativa (2022 — 2024)
                  </span>
                </div>
                <div className="stat">
                  <b>4</b>
                  <span>Miembros fundadores registrados en el acta de 2022</span>
                </div>
                <div className="stat">
                  <b>2</b>
                  <span>
                    Procesos de constitución pagados. El primero (ACHEI, 2021)
                    se archivó por conflicto de nombre.
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <div className="phase-nav" role="group" aria-label="Filtrar por fase">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className="phase-btn"
                aria-pressed={filter === item.id}
                onClick={() => select(item.id)}
              >
                {item.label} <small>{item.note}</small>
              </button>
            ))}
          </div>
        </section>

        <section id="timeline" className="timeline-wrap" aria-labelledby="timeline-title">
          <div className="timeline-head">
            <div>
              <h2 id="timeline-title">Hitos principales</h2>
              <p>
                Orden cronológico, con fecha, contexto y protagonistas. Filtra
                por fase para leer el arco completo o cada etapa por separado.
              </p>
            </div>
            <div className="legend" aria-hidden="true">
              <span>
                <i className="dot gest" />
                Gestación
              </span>
              <span>
                <i className="dot legal" />
                Operativa
              </span>
              <span>
                <i className="dot cierre" />
                Cierre
              </span>
            </div>
          </div>

          <div className="timeline">
            <div className={`year-group${hidden("gestacion")}`}>
              <div className="year-label">
                <strong>2018</strong>
                <span>Gestación</span>
              </div>
              <div className="entries">
                <article className="entry left" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2018</span>
                    <span className="entry-tag">Génesis</span>
                  </div>
                  <h3>La idea del gremio</h3>
                  <p>
                    Oscar Cartagena comienza a impulsar la creación de una
                    asociación gremial que agrupe y dé dirección al ecosistema
                    de experiencias inmersivas en Chile (XR: realidad
                    aumentada, virtual y mixta). En paralelo funda Augmented
                    Experiences, la base operativa desde donde empuja el
                    proyecto.
                  </p>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("gestacion")}`}>
              <div className="year-label">
                <strong>2019</strong>
                <span>Primeros actos</span>
              </div>
              <div className="entries">
                <article className="entry right" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2 jul 2019</span>
                    <span className="entry-tag">Hito fundacional</span>
                  </div>
                  <h3>Compra del dominio achei.org</h3>
                  <p>
                    Primer acto concreto y tangible del proyecto. Antes de
                    existir legalmente, ACHEX ya tiene nombre y presencia
                    digital. El nombre original, ACHEI, juega con la arenga
                    chilena (C, H, I) y define la identidad inicial.
                  </p>
                </article>
                <article className="entry left" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">13 dic 2019</span>
                    <span className="entry-tag">Correo clave</span>
                  </div>
                  <h3>La primera red del gremio</h3>
                  <p>
                    Oscar envía un correo extenso a la dirección del CRTIC, con
                    el borrador del proyecto gremial y la red de empresas e
                    instituciones con las que ya había conversado. El correo
                    ordena la primera red de la futura asociación y fija la
                    ruta de trabajo inicial.
                  </p>
                  <ul>
                    <li>
                      Empresas e instituciones contactadas a esa fecha:
                      InvadeLab, MetaVR / XplorAR, CleverIT, Wizar.co, VRidge,
                      PleiQ, Legamaster, Samsonite, Fonterra / Soprole, FOX
                      Channel / Avid XR y Unity.
                    </li>
                    <li>
                      Próximos pasos planteados: gran reunión de fundación,
                      formalizar founding members, definir cargos y comités,
                      buscar partnerships y perks.
                    </li>
                  </ul>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("gestacion")}`}>
              <div className="year-label">
                <strong>2020</strong>
                <span>Pandemia y activación</span>
              </div>
              <div className="entries">
                <article className="entry right" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2 abr 2020</span>
                    <span className="entry-tag">Primera reunión</span>
                  </div>
                  <h3>Primera reunión virtual oficial de ACHEI</h3>
                  <p>
                    Convocada por Oscar Cartagena vía Zoom. Participan
                    representantes de empresas e instituciones del ecosistema XR
                    chileno. Se conocen los involucrados, se definen Presidente,
                    Tesorero y Secretario para la primera etapa, se evalúa
                    postular a SERCOTEC para Fortalecimiento Gremial y se hace
                    brainstorming de actividades.
                  </p>
                  <div className="meta">
                    <span className="chip">
                      Modalidad <b>Zoom + Virbela</b>
                    </span>
                    <span className="chip">
                      Estado <b>Informal, sin personería</b>
                    </span>
                  </div>
                </article>
                <article className="entry left" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">21 may 2020</span>
                    <span className="entry-tag">3.ª reunión</span>
                  </div>
                  <h3>Tercera reunión en la oficina de Virbela</h3>
                  <p>
                    La tercera reunión de ACHEI se hace en la oficina virtual
                    de Virbela Open Campus. Participan Oscar Cartagena, Rodrigo
                    Mondaca, Fernando González, Antonio Da Rocha y Christian
                    Huanchicay. La pizarra de la sala fija la agenda: costo de
                    membresía, modelo de negocios, el evento de lanzamiento
                    virtual, speakers y temáticas, y la próxima reunión, con
                    metas y nuevos miembros.
                  </p>
                  <div className="entry-photos">
                    <figure>
                      <Image
                        src="/reunion-3/puntos.jpg"
                        alt="Avatares de la tercera reunión de ACHEI frente a la pizarra Puntos a tratar, en Virbela."
                        width={1198}
                        height={844}
                      />
                      <figcaption>
                        Pizarra de la tercera reunión, 21 de mayo de 2020.
                      </figcaption>
                    </figure>
                    <figure>
                      <Image
                        src="/reunion-3/oficina.jpg"
                        alt="Oficina virtual de ACHEI en Virbela, con el letrero Asociación Chilena de Experiencias Inmersivas."
                        width={1198}
                        height={844}
                      />
                      <figcaption>
                        La oficina ya mostraba el nombre del gremio.
                      </figcaption>
                    </figure>
                    <figure>
                      <Image
                        src="/reunion-3/grupo.jpg"
                        alt="Grupo de la tercera reunión de ACHEI en una sala privada de Virbela."
                        width={1198}
                        height={844}
                      />
                      <figcaption>
                        Oscar Cartagena, Rodrigo Mondaca, Fernando González,
                        Antonio Da Rocha y Christian Huanchicay.
                      </figcaption>
                    </figure>
                  </div>
                </article>
                <article className="entry right" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2020</span>
                    <span className="entry-tag">Operación</span>
                  </div>
                  <h3>Cinco reuniones y oficina en el metaverso</h3>
                  <p>
                    Además de la tercera reunión del 21 de mayo, se documentan
                    al menos cinco encuentros (2ª a 5ª reunión ACHEI). El
                    gremio opera sin personería jurídica, pero sostiene
                    continuidad gracias a la oficina virtual en Virbela, una
                    ventaja práctica durante la pandemia y una señal temprana
                    de su identidad: una asociación inmersiva que también se
                    reunía en un espacio inmersivo.
                  </p>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("gestacion")}`}>
              <div className="year-label">
                <strong>2021</strong>
                <span>Primer intento legal</span>
              </div>
              <div className="entries">
                <article className="entry right" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">30 ene 2021</span>
                    <span className="entry-tag">Asamblea</span>
                  </div>
                  <h3>Asamblea General 2021</h3>
                  <p>
                    Minuta enviada el 3 de febrero por Oscar. Asisten Oscar
                    Cartagena, Rodrigo Mondaca, Rodrigo González y Cristian
                    Aguirre, junto a representantes de otras empresas e
                    instituciones del ecosistema. Balance 2020: tres perks
                    cerrados para miembros (ARWAY, Metavrse y Cleanbox). Meta
                    2021: llegar al menos a diez beneficios. Se planifican
                    “Conexión Latina”, taller de ventas (18 feb, metodología
                    Sandler) y taller de finanzas (marzo). Se acuerda una
                    actividad mensual y una membresía a definir democráticamente
                    por encuesta.
                  </p>
                </article>
                <article className="entry left" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">
                      10 may 2021 · 8 sep 2021 · 25 oct 2021
                    </span>
                    <span className="entry-tag">Intento N° 1</span>
                  </div>
                  <h3>Primer proceso de constitución (2021)</h3>
                  <p>
                    El 10 de mayo Oscar anuncia por correo el primer intento de
                    constitución legal. El grupo fundador de ese momento reúne
                    a empresas como PleiQ, InvadeLab, Fleischmann Lab,
                    eDesignExperience, VICO Science y Augmented Experiences, con
                    Rodrigo González, Rodrigo Mondaca, Cristian Aguirre y Oscar
                    Cartagena entre sus representantes. Se recauda capital entre
                    los presentes y se paga el proceso.
                  </p>
                  <p>
                    La escritura se termina el 8 de septiembre y los documentos
                    ingresan a notaría el 25 de octubre. Por el conflicto de
                    alcance del nombre ACHEI, el proceso se archiva y se
                    reinicia como ACHEX; la constitución definitiva se firma el
                    22 de julio de 2022.
                  </p>
                  <div className="meta">
                    <span className="chip">
                      Costo <b>Dos procesos pagados</b>
                    </span>
                    <span className="chip">
                      Cambio <b>ACHEI → ACHEX</b>
                    </span>
                  </div>
                </article>
                <article className="entry right" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2021</span>
                    <span className="entry-tag">Presencia pública</span>
                  </div>
                  <h3>Stand en VR Day 2021</h3>
                  <p>
                    ACHEX participa con un stand del gremio en VR Day 2021. Es
                    la primera de tres ediciones (2021, 2022 y 2023). Todavía
                    sin constitución legal definitiva, la asociación ya actúa
                    públicamente como gremio.
                  </p>
                </article>
                <article className="entry left" data-phase="gestacion">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2021</span>
                    <span className="entry-tag">Stereopsia Latam</span>
                  </div>
                  <h3>Sede principal de Stereopsia Latam</h3>
                  <p>
                    ACHEX es la sede principal de Stereopsia Latam 2021. El
                    mismo año realiza la primera edición del XR Safety
                    Awareness Week.
                  </p>
                  <figure className="entry-photos">
                    <Image
                      src="/stereopsia-latam-2021.jpg"
                      alt="Equipo reunido frente al telón de Stereopsia Latam 2021, con los logos de Stereopsia, CORFO y CRT+IC."
                      width={720}
                      height={480}
                    />
                    <figcaption>
                      Stereopsia Latam 2021, con ACHEX como sede principal.
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("operativa")}`}>
              <div className="year-label">
                <strong>2022</strong>
                <span>Nace ACHEX A.G.</span>
              </div>
              <div className="entries">
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">22 jul 2022</span>
                    <span className="entry-tag">Constitución legal</span>
                  </div>
                  <h3>Constitución formal definitiva</h3>
                  <p>
                    Se firma el Acta de Constitución ante notaría en Santiago.
                    Repertorio N° 2101-2022. Nace oficialmente la{" "}
                    <strong>
                      Asociación Gremial Chilena de Experiencias Inmersivas
                      (ACHEX)
                    </strong>
                    . Es el paso de la idea informal a la institución con
                    personería jurídica.
                  </p>
                  <div className="meta">
                    <span className="chip">
                      Lugar <b>Santiago</b>
                    </span>
                    <span className="chip">
                      Repertorio <b>2101-2022</b>
                    </span>
                    <span className="chip">
                      RUT <b>65.230.673-K</b>
                    </span>
                  </div>
                </article>
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">Jul — Ago 2022</span>
                    <span className="entry-tag">Lanzamiento</span>
                  </div>
                  <h3>Lanzamiento oficial y fundadores formales</h3>
                  <p>
                    Cuatro miembros fundadores quedan registrados en el acta,
                    junto al primer directorio de la asociación.
                  </p>
                  <ul>
                    <li>
                      <strong>Oscar Cartagena</strong> (Presidente) — Augmented
                      Experiences, Catchar, Posterity.
                    </li>
                    <li>
                      <strong>Rodrigo Mondaca Luraschi</strong> (Gerente
                      Comercial) — Exxo SPA, eDesign Experience.
                    </li>
                    <li>
                      <strong>PleiQ Smart Toys</strong> (AGETECH) — a cargo del
                      área de educación.
                    </li>
                    <li>
                      <strong>InvadeLab</strong> — parte del grupo fundador
                      firmante.
                    </li>
                  </ul>
                </article>
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">Ago 2022</span>
                    <span className="entry-tag">Impacto</span>
                  </div>
                  <h3>Capacitación Spark AR: 972 chilenos formados en RA</h3>
                  <p>
                    En agosto de 2022 ACHEX realiza, junto a Chile Creativo y
                    CRT+IC, la capacitación en Spark AR, la plataforma de
                    realidad aumentada de Meta. El resultado es concreto y
                    medible:{" "}
                    <strong>
                      972 chilenos capacitados en tecnologías de realidad
                      aumentada
                    </strong>
                    . Es uno de los resultados medibles del gremio en su etapa
                    operativa.
                  </p>
                  <div className="meta">
                    <span className="chip">
                      Aliados <b>Chile Creativo · CRT+IC · Meta</b>
                    </span>
                    <span className="chip">
                      Resultado <b>972 chilenos</b>
                    </span>
                  </div>
                </article>
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">14 sep 2022</span>
                    <span className="entry-tag">Educators in VR</span>
                  </div>
                  <h3>Entrevista sobre el gremio</h3>
                  <p>
                    Oscar Cartagena conversa en el canal de Educators in VR,
                    durante Educators in VR Tech Experience. La entrevista
                    recorre el origen de ACHEX, el paso de ACHEI al nombre
                    definitivo, el trabajo con el Estado y la invitación a
                    sumarse a la asociación.
                  </p>
                  <div className="entry-embed">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/eEaeqXgTkF0"
                      title="Entrevista a Oscar Cartagena en Educators in VR, 14 de septiembre de 2022"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </article>
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2022</span>
                    <span className="entry-tag">Internacional</span>
                  </div>
                  <h3>VR Day y XR Safety Awareness Week</h3>
                  <p>
                    ACHEX participa de nuevo en el VR Day y realiza la segunda
                    edición del XR Safety Awareness Week, después de la de
                    2021.
                  </p>
                </article>
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">Nov 2022</span>
                    <span className="entry-tag">Incidencia</span>
                  </div>
                  <h3>Lobby formal ante Subsecretaría</h3>
                  <p>
                    ACHEX inicia lobby formal ante la Subsecretaría. El gremio
                    ya no solo convoca a la industria: entra al circuito de
                    incidencia pública y diálogo ministerial.
                  </p>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("operativa")}`}>
              <div className="year-label">
                <strong>2022 — 2024</strong>
                <span>Fase operativa</span>
              </div>
              <div className="entries">
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2022 — 2024</span>
                    <span className="entry-tag">Alcance</span>
                  </div>
                  <h3>32 empresas asociadas en 6 verticales de industria</h3>
                  <p>
                    En su fase operativa, ACHEX llega a agrupar{" "}
                    <strong>32 empresas asociadas</strong>, organizadas en seis
                    verticales de industria (conteo realizado desde el material
                    oficial para nuevos asociados, época Junta Directiva 2022 —
                    2024):
                  </p>
                  <ul>
                    <li>
                      <strong>Arquitectura, Construcción e Inmobiliario (4):</strong>{" "}
                      HOLO, eDesign Experience, 3Dmente, Plango Realidad Digital.
                    </li>
                    <li>
                      <strong>Ciencia, Salud y Educación (5):</strong> PleiQ,
                      Multiversica, Kaenz, Mágico VR, Logogram Hànzi.
                    </li>
                    <li>
                      <strong>Comercio, Marketing (7):</strong> InvadeLab,
                      Augmented Experiences, AppAR+, Modo Espacial, FiltroLab,
                      Abstract Digital y una empresa más registrada solo con su
                      logo.
                    </li>
                    <li>
                      <strong>Consultoría, I+D (6):</strong> VICO Science, Peuma
                      Lab, Sinestesia, Uthomata, Metaverso Legal y una empresa
                      más registrada solo con su logo.
                    </li>
                    <li>
                      <strong>
                        Entretenimiento, Narrativa y Artes Escénicas (6):
                      </strong>{" "}
                      Osoborroso Digital, Raki Films, Postón Digital Arts,
                      Posterity, Meraki Kolors, Oktopus.tv.
                    </li>
                    <li>
                      <strong>Industria y Seguridad (4):</strong> Minverso, GIMO,
                      Yoy, Kyon.
                    </li>
                  </ul>
                  <div className="meta">
                    <span className="chip">
                      Empresas <b>32</b>
                    </span>
                    <span className="chip">
                      Verticales <b>6</b>
                    </span>
                    <span className="chip">
                      Fuente <b>Material para nuevos asociados</b>
                    </span>
                  </div>
                </article>
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2022 — 2024</span>
                    <span className="entry-tag">Comunidad</span>
                  </div>
                  <h3>
                    Beneficios para asociados y Manifiesto por las Experiencias
                    Inmersivas Sostenibles
                  </h3>
                  <p>
                    Los asociados acceden a una infraestructura gremial activa:
                    Hub Inmersivo, bolsa de trabajo, perks y beneficios,
                    newsletter, revista gremial, consejo directivo, comités y
                    mesas temáticas.
                  </p>
                  <p>
                    En el mismo período, ACHEX impulsa el{" "}
                    <strong>
                      Manifiesto por el desarrollo de Experiencias Inmersivas
                      Sostenibles
                    </strong>
                    , con siete compromisos: cuidar al usuario; igualdad de
                    género y accesibilidad universal; innovación y desarrollo
                    resiliente; alfabetizar en inmersividad; condiciones
                    laborales apropiadas; comunidades edificantes, reales y
                    virtuales; y producción y consumo responsable.
                  </p>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("operativa")}`}>
              <div className="year-label">
                <strong>2023</strong>
                <span>Operación y alianzas</span>
              </div>
              <div className="entries">
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">16 — 17 mar 2023</span>
                    <span className="entry-tag">Congreso Nacional</span>
                  </div>
                  <h3>Oportunidades y desafíos del metaverso</h3>
                  <p>
                    ACHEX participa en el Congreso Nacional, sede Santiago, en
                    el seminario internacional «Oportunidades y Desafíos del
                    Metaverso». Lo organizan Congreso Futuro, la Comisión
                    Desafíos del Futuro del Senado, la Fundación Encuentros del
                    Futuro y LIANM. Oscar Cartagena expone sobre economía
                    intangible.
                  </p>
                  <div className="entry-embed">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/G3VdwVVkgzY"
                      title="Oscar Cartagena: Economía intangible, oportunidades hacia el metaverso. Seminario en el Congreso Nacional, marzo de 2023."
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </article>
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">15 jun 2023</span>
                    <span className="entry-tag">LIANM</span>
                  </div>
                  <h3>Subcomisión “Tecnologías Inmersivas y Futuro Metaverso”</h3>
                  <p>
                    Reunión de la Subcomisión LIANM, con participación de
                    instituciones del ecosistema y de Oscar Cartagena. Se
                    presenta ACHEX y se planifica el segundo semestre: VR Day
                    (19 nov 2023), Foro Latinoamericano de Tecnologías
                    Emergentes (septiembre, Buenos Aires) y Metaverse Safety
                    Week (diciembre, junto a XRSI). Cristian Aguirre,
                    vicepresidente de ACHEX y cofundador de VICO Science,
                    trabaja en paralelo en taxonomía y estándar XR.
                  </p>
                </article>
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">5 sep 2023</span>
                    <span className="entry-tag">Directorio</span>
                  </div>
                  <h3>Segunda Sesión Ordinaria de Directorio</h3>
                  <p>
                    Se otorgan amplios poderes generales y especiales al
                    Presidente, Oscar Cartagena, y al Vicepresidente, Cristian
                    Aguirre, para actuar indistintamente en representación de la
                    asociación. El directorio presente lo integran Oscar Andrés
                    Cartagena Lagos (Presidente), Cristian Andrés Aguirre Vargas
                    (Vicepresidente), Rodrigo Mondaca Luraschi (Secretario),
                    Carlos José Redondo Sánchez (Tesorero) y Rodrigo Ignacio
                    González Guerra (Director). Los poderes incluyen facultades
                    bancarias, contractuales y de representación ante el SII,
                    entre otras.
                  </p>
                </article>
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">18 nov 2023</span>
                    <span className="entry-tag">VR Day</span>
                  </div>
                  <h3>VR Day Chile 2023</h3>
                  <p>
                    ACHEX organiza el VR Day Chile en la Universidad del
                    Desarrollo, con su Facultad de Arquitectura y Arte.
                    Congreso Futuro apoya la difusión. La jornada es el sábado
                    18 de noviembre, desde las 10:00, en el Aula Magna del
                    Campus Rector Ernesto Silva Bafalluy, en Las Condes, junto
                    a RealiTec UDD.
                  </p>
                  <p>
                    El recuento del gremio reconoce la producción de Valentina
                    Galleguillos, María Carolina Flores y Dante Crovetto; las
                    charlas y el panel de María Isabel Cornejo, Isidora
                    Cabezón, Gloria Moya, Francisco Silva-Díaz y Francisco
                    Marshall; y el Showroom VR de InvadeLab, Kyon XR, Yoy
                    Simulators y Authomata.
                  </p>
                  <div className="entry-embed">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/aU6YRdzzqfw"
                      title="Resumen del VR Day Chile 2023"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="meta">
                    <a
                      className="chip"
                      href="https://www.youtube.com/playlist?list=PLJ2RwJXQPWfg1NJw61q2Vfjz5Qxyyjwqw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Charlas <b>Playlist</b>
                    </a>
                    <a
                      className="chip"
                      href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7134334803562094592/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fuente <b>Recuento ACHEX</b>
                    </a>
                  </div>
                </article>
                <article className="entry left" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2023</span>
                    <span className="entry-tag">Convenios y formación</span>
                  </div>
                  <h3>Inmersiva XR, VR Vienna y Curso Meta Spark AR</h3>
                  <p>
                    ACHEX se vincula con Inmersiva XR (España) y con VR Vienna
                    (Austria). El convenio de colaboración se firma formalmente
                    solo con España, y conecta al gremio con la red
                    iberoamericana. En paralelo, ACHEX organiza el Curso Meta
                    Spark AR: ocho clases de dos horas (16 horas totales),
                    orientado a certificación CRTIC y Meta Spark Creator.
                  </p>
                  <div className="meta">
                    <span className="chip">
                      Convenio <b>Solo España</b>
                    </span>
                    <span className="chip">
                      Vínculo <b>VR Vienna</b>
                    </span>
                    <span className="chip">
                      Formación <b>16 horas</b>
                    </span>
                  </div>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("operativa")}`}>
              <div className="year-label">
                <strong>2020 — 2025</strong>
                <span>Presencia continua</span>
              </div>
              <div className="entries">
                <article className="entry right" data-phase="operativa">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2020 — 2025</span>
                    <span className="entry-tag">Internacional</span>
                  </div>
                  <h3>El circuito global</h3>
                  <p>
                    La presencia internacional se sostiene de 2020 a 2025:
                    Stereopsia Virtual y Laval Virtual en 2020, la sede de
                    Stereopsia Latam en 2021, VR Day en 2021, 2022 y 2023, y el
                    XR Safety Awareness Week en 2021 y 2022, además de AWE.
                    También hay vínculo con Congreso Futuro, Fundación
                    Encuentros del Futuro, CRTIC, Chile Creativo, CORFO, LIANM,
                    XRSI e Inmersiva XR. ACHEX funciona como puerta de entrada
                    para marcas globales como Meta, HTC, Snap y Pico al
                    territorio chileno y sudamericano.
                  </p>
                </article>
              </div>
            </div>

            <div className={`year-group${hidden("cierre")}`}>
              <div className="year-label">
                <strong>2026</strong>
                <span>Cierre</span>
              </div>
              <div className="entries">
                <article className="entry left" data-phase="cierre">
                  <span className="entry-dot" aria-hidden="true" />
                  <div className="entry-top">
                    <span className="entry-date">2026</span>
                    <span className="entry-tag">Cierre formal</span>
                  </div>
                  <h3>Cierre de ACHEX A.G.</h3>
                  <p>
                    Decisión de cerrar el ciclo institucional tras ocho años de
                    trayectoria, período en el que ACHEX contribuyó a consolidar
                    el ecosistema XR en Chile. La asociación facilita el
                    traspaso de responsabilidades y recursos relevantes hacia la
                    comunidad, y el legado continúa a través de los proyectos,
                    alianzas y personas que formaron parte del recorrido. Al
                    cierre, la industria inmersiva chilena cuenta con
                    capacidades instaladas, redes internacionales activas y una
                    conversación pública consolidada.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="fundadores" className="section" aria-labelledby="fundadores-title">
          <div className="section-head">
            <div>
              <h2 id="fundadores-title">Fundadores formales (2022)</h2>
              <p>
                El acta de constitución de 2022 registró a sus fundadores
                formales. Detrás de ellos, la red de empresas e instituciones
                que impulsó la gestación del gremio entre 2018 y 2021.
              </p>
            </div>
          </div>
          <div className="grid cols-4">
            <article className="card">
              <div className="avatar" aria-hidden="true">
                OC
              </div>
              <div className="role">Presidente · Fundador</div>
              <h3>Oscar Cartagena</h3>
              <p>
                Augmented Experiences, Catchar, Posterity. Impulsa la idea
                desde 2018, compra el dominio en 2019, convoca las primeras
                reuniones y sostiene la operación gremial durante todo el
                ciclo.
              </p>
            </article>
            <article className="card">
              <div className="avatar" aria-hidden="true">
                RM
              </div>
              <div className="role">Gerente Comercial</div>
              <h3>Rodrigo Mondaca Luraschi</h3>
              <p>
                Exxo SPA, eDesign Experience. Parte del grupo fundador temprano
                (2021) y del directorio legal de 2022. Luego asume también como
                Secretario en la sesión de directorio de 2023.
              </p>
            </article>
            <article className="card">
              <div className="avatar" aria-hidden="true">
                PQ
              </div>
              <div className="role">Fundador · Educación</div>
              <h3>PleiQ Smart Toys</h3>
              <p>
                AGETECH. Presente desde los contactos de 2019 y en el primer
                intento de constitución de 2021. Su foco queda ligado a
                educación y formación.
              </p>
            </article>
            <article className="card">
              <div className="avatar" aria-hidden="true">
                IL
              </div>
              <div className="role">Fundador</div>
              <h3>InvadeLab</h3>
              <p>
                Parte de las primeras conversaciones de 2019 y firmante del acta
                de constitución de 2022.
              </p>
            </article>
          </div>

          <div className="grid cols-2 notes">
            <article className="note">
              <h3>Cómo operó el gremio</h3>
              <ul>
                <li>
                  <strong>Origen.</strong> La idea nace en 2018 desde Augmented
                  Experiences y toma forma con la red de contactos construida
                  entre 2019 y 2020.
                </li>
                <li>
                  <strong>Operación continua.</strong> Reuniones periódicas
                  desde abril de 2020, con oficina virtual en Virbela durante la
                  pandemia y actividad mensual planificada.
                </li>
                <li>
                  <strong>Gestión formal.</strong> Directorio con sesiones
                  ordinarias, poderes de representación y administración ante
                  notaría, bancos y el SII desde 2022.
                </li>
                <li>
                  <strong>Red de aliados.</strong> CRT+IC, Chile Creativo,
                  CORFO, LIANM, XRSI e Inmersiva XR, además de marcas globales
                  como Meta, HTC, Snap y Pico.
                </li>
              </ul>
            </article>
            <article className="note span-all">
              <h3>Directorio 2022 — 2024</h3>
              <p>
                La Junta Directiva que encabeza la fase operativa, con ciclo
                vigente hasta el 30 de abril de 2024:
              </p>
              <ul>
                <li>
                  <strong>Oscar Cartagena</strong> — Presidente.
                </li>
                <li>
                  <strong>Cristian Aguirre</strong> — Vicepresidente.
                </li>
                <li>
                  <strong>Rodrigo González</strong> — Director.
                </li>
                <li>
                  <strong>Rodrigo Mondaca</strong> — Secretario.
                </li>
                <li>
                  <strong>Carlos Redondo</strong> — Tesorero.
                </li>
              </ul>
              <p className="follow">
                Es el directorio que sesiona en 2023 y otorga los poderes de
                representación de la asociación.
              </p>
            </article>
            <article className="note">
              <h3>ACHEI → ACHEX: el cambio de nombre</h3>
              <p>
                ACHEI nace como juego fonético con la arenga chilena (C, H, I).
                Durante el proceso legal se constata que el nombre presenta un
                conflicto de alcance, por lo que se adopta <strong>ACHEX</strong>
                , que preserva la identidad visual y el logotipo ya
                desarrollados. El trámite se reinicia y se completan dos
                procesos de constitución; el segundo, firmado el 22 de julio de
                2022, es el definitivo.
              </p>
              <p className="follow">
                El nombre final mantiene la arquitectura del original: A·CH·EX
                queda contenido en Asociación Chilena de Experiencias
                Inmersivas.
              </p>
            </article>
          </div>
        </section>

        <section
          id="legado"
          className="section legacy-section"
          aria-labelledby="legado-title"
        >
          <div className="legacy">
            <h2 id="legado-title">
              Legado: lo que queda cuando la institución cierra
            </h2>
            <p>
              El cierre formal de 2026 no borra el ciclo 2018 — 2026. Chile
              queda con capacidades instaladas, redes internacionales y una
              conversación pública sobre tecnologías inmersivas que no existía
              cuando Oscar compra el dominio en 2019.
            </p>
            <div className="legacy-grid">
              <div className="legacy-item">
                <b>Gateway global</b>
                <span>
                  ACHEX sirvió como punto de entrada real para Meta, HTC, Snap
                  y Pico al territorio chileno y sudamericano, con vínculos
                  operativos en Latam, Iberoamérica y España.
                </span>
              </div>
              <div className="legacy-item">
                <b>Articulación pública</b>
                <span>
                  Diálogo de alto nivel con ministerios, Congreso Futuro,
                  Fundación Encuentros del Futuro, CRTIC, Chile Creativo, CORFO
                  y LIANM. El gremio ocupó un lugar que antes estaba vacío.
                </span>
              </div>
              <div className="legacy-item">
                <b>Madurez del mercado</b>
                <span>
                  972 chilenos capacitados en tecnologías de realidad aumentada,
                  cursos de certificación, estándares XR en discusión y una red
                  de personas que sigue operando más allá del acta de cierre.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section balance" aria-labelledby="lectura-title">
          <div className="section-head">
            <div>
              <h2 id="lectura-title">Balance del ciclo</h2>
              <p>Los resultados objetivos de ocho años de trabajo gremial, 2018 — 2026.</p>
            </div>
          </div>
          <div className="grid cols-2">
            <article className="card">
              <h3>Una voz gremial donde no la había</h3>
              <p>
                ACHEX le dio representación formal a la industria XR chilena:
                llegó a agrupar a 32 empresas asociadas en seis verticales de
                industria, sostuvo diálogo con ministerios y subsecretarías,
                presencia en Congreso Futuro y participación en las redes
                internacionales del sector, como XRSI, AWE, Laval Virtual y
                Stereopsia.
              </p>
            </article>
            <article className="card">
              <h3>Capacidades que permanecen</h3>
              <p>
                972 chilenos capacitados en tecnologías de realidad aumentada,
                convenios de colaboración, cursos de certificación y una red de
                profesionales y empresas que sigue operando tras el cierre de la
                asociación.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap foot">
          <small>ACHEX A.G. · 2018 — 2026 · Santiago, Chile</small>
        </div>
      </footer>
    </>
  );
}
