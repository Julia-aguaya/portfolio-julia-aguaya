import { useEffect, useState } from 'react'
import './App.css'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
)

const Spark = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 42 42" aria-hidden="true" focusable="false">
    <path d="M21 0c.7 14 6.8 20.3 21 21-14.2.7-20.3 6.8-21 21-.7-14.2-6.8-20.3-21-21C14.2 20.3 20.3 14 21 0Z" />
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const updateScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', pageHeight > 0 ? window.scrollY / pageHeight : 0)
    }
    const updatePointer = (event) => setPointer({ x: event.clientX, y: event.clientY })

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('pointermove', updatePointer)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="scroll-meter" aria-hidden="true" />
      <div
        className="cursor-orbit"
        aria-hidden="true"
        style={{ transform: `translate3d(${pointer.x - 18}px, ${pointer.y - 18}px, 0)` }}
      />

      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Julia — inicio">
          <span>ju</span><i>•</i><span>lia</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
          <b aria-hidden="true">{menuOpen ? '×' : '+'}</b>
        </button>

        <nav id="site-navigation" className={menuOpen ? 'open' : ''} aria-label="Navegación principal">
          <a href="#work" onClick={closeMenu}>Proyectos</a>
          <a href="#about" onClick={closeMenu}>Proceso</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-meta reveal">
            <p><span className="status-dot" />Disponible para proyectos selectos</p>
            <p>Trabajando online <span aria-hidden="true">↗</span> remoto</p>
          </div>

          <div className="hero-title-wrap">
            <p className="eyebrow reveal">UX/UI designer · artista digital · curiosa profesional</p>
            <h1 id="hero-title">
              <span className="line reveal">Diseño interfaces</span>
              <span className="line accent-line reveal">con personalidad.</span>
            </h1>
          </div>

          <div className="hero-bottom reveal">
            <p className="intro-copy">Convierto ideas, sistemas y pequeñas obsesiones en experiencias digitales que se sienten claras, útiles y muy vivas.</p>
            <a className="round-link" href="#work" aria-label="Ver proyectos seleccionados">
              <span>↓</span>
              <small>scroll<br />to play</small>
            </a>
          </div>

          <div className="hero-playground" aria-hidden="true">
            <div className="sun" />
            <div className="scribble scribble-one">:) </div>
            <div className="scribble scribble-two">✦</div>
            <div className="orb orb-lilac" />
            <div className="orb orb-orange" />
            <div className="ribbon">JULIA'S INTERNET CORNER&nbsp; — &nbsp;JULIA'S INTERNET CORNER&nbsp; — &nbsp;</div>
            <div className="mini-window">
              <span /><span /><span />
              <p>make it<br /><em>feel</em> good</p>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Áreas de práctica">
          <div>
            <span>UX / UI</span><b>✳</b><span>PRODUCT THINKING</span><b>✳</b><span>ILLUSTRATION</span><b>✳</b><span>AI-ASSISTED MAKING</span><b>✳</b>
            <span>UX / UI</span><b>✳</b><span>PRODUCT THINKING</span><b>✳</b><span>ILLUSTRATION</span><b>✳</b><span>AI-ASSISTED MAKING</span><b>✳</b>
          </div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <p className="eyebrow">(01) experiencias seleccionadas</p>
            <h2 id="work-title">Cosas que hice<br /><em>&amp; cosas por venir.</em></h2>
            <p className="section-copy">Proyectos personales donde pruebo cómo el buen diseño puede ser útil, cálido y un poquito inesperado.</p>
          </div>

          <div className="project-grid">
            <a className="project-card pilates-card reveal" href="https://pilateseunoia.com" target="_blank" rel="noreferrer">
              <div className="project-index">01 / WEB APP · EN USO REAL</div>
              <div className="pilates-preview" aria-hidden="true">
                <div className="pilates-sun" />
                <div className="pilates-phone">
                  <div className="phone-bar"><span>eunoia</span><i>☰</i></div>
                  <p>hola, juli</p>
                  <strong>tus clases<br /><em>esta semana</em></strong>
                  <div className="class-row"><b>lun</b><span>18:00 · pilates reformer</span></div>
                  <div className="class-row active"><b>mié</b><span>10:00 · pilates reformer</span></div>
                  <div className="class-row"><b>vie</b><span>19:00 · pilates reformer</span></div>
                </div>
                <span className="pilates-word">mover<br /><em>mejor</em></span>
              </div>
              <div className="project-info">
                <div><p className="project-kicker">Pilates Eunoia</p><h3>Reservas que mantienen el estudio en movimiento.</h3></div>
                <div><p className="project-description">Aplicación web activa para gestionar alumnas, clases, cupos, reservas, cancelaciones y recuperaciones.</p><p className="project-tech">Django · Python · MySQL · Mobile-first</p></div>
                <span className="visit-link">Visitar sitio <ArrowUpRight /></span>
              </div>
            </a>

            <a className="project-card notes-card card-wide reveal" href="https://notes-lovat-gamma.vercel.app/" target="_blank" rel="noreferrer">
              <div className="project-index">02 / PRODUCT CONCEPT</div>
              <div className="notes-preview" aria-hidden="true">
                <div className="tape tape-one" />
                <div className="paper-window">
                  <div className="window-chrome"><i /><i /><i /><span>my notes</span></div>
                  <div className="paper-content">
                    <p>little things<br />worth keeping</p>
                    <div className="note-line long" /><div className="note-line" /><div className="note-line short" />
                    <span className="doodle">♡</span>
                  </div>
                </div>
                <span className="post-it">idea<br />dump</span>
                <div className="star-squiggle">✺</div>
              </div>
              <div className="project-info">
                <div><p className="project-kicker">Notas</p><h3>Un refugio lindo para pensar en voz baja.</h3></div>
                <p className="project-description">Una pequeña experiencia para capturar ideas, ordenar pensamientos y volver a ellos sin que parezca una tarea.</p>
                <span className="visit-link">Visitar proyecto <ArrowUpRight /></span>
              </div>
            </a>

            <a className="project-card drawing-card reveal" href="https://juli-playground.vercel.app/" target="_blank" rel="noreferrer">
              <div className="project-index">03 / VISUAL PLAYGROUND</div>
              <div className="drawing-preview" aria-hidden="true">
                <div className="checker" />
                <div className="flower"><i /><i /><i /><i /><i /><b /></div>
                <span className="drawing-word">draw<br /><em>more</em></span>
                <span className="handwriting">made by juli :)</span>
                <div className="orange-pencil" />
              </div>
              <div className="project-info">
                <div><p className="project-kicker">Juli Playground</p><h3>Ilustración, color y todas mis ideas sueltas.</h3></div>
                <p className="project-description">Mi archivo de dibujo: un espacio para explorar personajes, texturas y una voz visual propia.</p>
                <span className="visit-link">Explorar dibujos <ArrowUpRight /></span>
              </div>
            </a>

            <div className="project-card workshop-card reveal">
              <div className="project-index">04 / GESTIÓN OPERATIVA</div>
              <div className="workshop-preview" aria-hidden="true">
                <div className="workshop-grid" />
                <p className="workshop-label">taller_<br />control</p>
                <div className="workshop-panel">
                  <div><span>CASO #024</span><b>EN REPARACIÓN</b></div>
                  <p>Cliente / Vehículo<br /><strong>Presupuesto aprobado</strong></p>
                  <i /><i /><i />
                </div>
                <div className="car-mark"><span /><b /></div>
              </div>
              <div className="project-info">
                <div><p className="project-kicker">Sistema para taller mecánico</p><h3>Seguimiento claro, desde el vehículo hasta el pago.</h3></div>
                <div><p className="project-description">Sistema para organizar clientes, vehículos, casos, presupuestos, pagos y documentación durante todo el proceso de reparación.</p><p className="project-tech">Java · Spring Boot · JavaScript · MySQL</p></div>
                <a className="visit-link" href="#contact">Ver más cuando esté listo <ArrowUpRight /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-sticker reveal"><span>human<br />taste</span><Spark /></div>
          <div className="about-copy reveal">
            <p className="eyebrow">(02) mi forma de hacer</p>
            <h2 id="about-title">La IA no reemplaza<br />mi criterio. <em>Lo expande.</em></h2>
            <p>La uso como compañera de exploración: para desbloquear caminos, prototipar más rápido y hacer mejores preguntas. Defino requerimientos y reglas de negocio, valido comportamientos y tomo las decisiones técnicas. OpenCode y Codex acompañan mi análisis, depuración, implementación, pruebas y documentación; la dirección final siempre es humana.</p>
          </div>
          <div className="process-list reveal">
            <article><span>01</span><div><h3>Encuentro el porqué</h3><p>Escucho, ordeno el problema y busco esa pequeña idea que hace que todo tenga sentido.</p></div></article>
            <article><span>02</span><div><h3>Exploro en voz alta</h3><p>Uso prototipos, referencias y herramientas de IA para abrir posibilidades sin casarme con la primera.</p></div></article>
            <article><span>03</span><div><h3>Le doy forma y ritmo</h3><p>Diseño sistemas claros, microinteracciones y detalles que hacen que usar algo se sienta natural.</p></div></article>
          </div>
          <div className="tool-cloud reveal" aria-label="Herramientas que uso">
            <span>Figma</span><span>Claude</span><span>OpenCode</span><span>Codex</span><span>Cursor</span><span>Vercel</span><span>Prototyping</span><span>HTML/CSS</span><span>Curiosity</span>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-top">
            <p className="eyebrow">(03) próxima pantalla</p>
            <span className="contact-spark">✦</span>
          </div>
          <h2 id="contact-title">¿Armamos algo<br /><em>que dé ganas de usar?</em></h2>
          <a className="contact-button" href="https://juli-playground.vercel.app/" target="_blank" rel="noreferrer">
            <span>Conocé más de mi mundo</span><ArrowUpRight />
          </a>
          <p className="contact-note">Disponibilidad para colaboraciones, productos con alma y experimentos con futuro.</p>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top" aria-label="Volver al inicio"><span>ju</span><i>•</i><span>lia</span></a>
        <p>Diseñado y construido con intención · 2026</p>
        <a href="#top">volver arriba ↑</a>
      </footer>
    </div>
  )
}

export default App
