import { useEffect } from 'react'
import './App.css'
import pilatesOverview from './assets/projects/pilates-overview.png'
import pilatesRecovery from './assets/projects/pilates-recovery.png'
import pilatesCalendar from './assets/projects/pilates-calendar.png'
import workshopDashboard from './assets/projects/taller-dashboard.png'
import workshopFolders from './assets/projects/taller-carpeta.png'
import notesHero from './assets/projects/notes-hero.png'
import notesBoard from './assets/projects/notes-board.png'
import playgroundHero from './assets/projects/playground-hero.png'
import playgroundCollections from './assets/projects/playground-collections.png'
import rescueRobotTrajectory from './assets/projects/rescue-robot-trajectory.png'
import busquedaDialogue from './assets/games/busqueda-dialogue.png'
import busquedaWorld from './assets/games/busqueda-world.png'
import lunaForest from './assets/games/luna-forest.png'
import lunaMountains from './assets/games/luna-mountains.png'
import lunaLevel from './assets/games/luna-level.png'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 6l6 6-6 6" /></svg>
)

const Spark = () => <span className="spark" aria-hidden="true">✦</span>

const marqueePhrases = [
  'UX / UI DESIGN',
  'SOFTWARE WITH SOUL',
  'RESEARCH · PLAY · BUILD',
]

const MarqueeGroup = () => (
  <div className="marquee-group">
    {Array.from({ length: 8 }, (_, cycle) => marqueePhrases.map((phrase) => (
      <span className="marquee-item" key={`${cycle}-${phrase}`}>
        <span>{phrase}</span>
        <span className="marquee-stars">✦ ✦ ✦</span>
      </span>
    )))}
  </div>
)

const ProjectPreview = ({ variant, images }) => (
  <span className={`project-preview ${variant}`} aria-hidden="true">
    <img className="preview-main" src={images[0]} alt="" />
    {images.slice(1).map((image, index) => <img className={`preview-detail detail-${index + 1}`} src={image} alt="" key={image} />)}
    <span className="preview-count">{String(images.length).padStart(2, '0')} vistas</span>
  </span>
)

const GamePreview = ({ variant, images, alt }) => (
  <div className={`game-preview ${variant}`}>
    <img className="game-preview-main" src={images[0]} alt={alt} />
    {images.slice(1).map((image, index) => <img className={`game-preview-detail detail-${index + 1}`} src={image} alt="" key={image} />)}
    <span>{String(images.length).padStart(2, '0')} capturas</span>
  </div>
)

function App() {
  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', height > 0 ? window.scrollY / height : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const moveCursor = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', moveCursor, { passive: true })
    return () => window.removeEventListener('pointermove', moveCursor)
  }, [])

  return (
    <div className="site-shell">
      <div className="scroll-meter" aria-hidden="true" />
      <div className="cursor-orbit" aria-hidden="true"><span>✦</span></div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Inicio">julia</a>
        <nav aria-label="Navegación principal">
          <a href="#work">proyectos</a>
          <a href="#extras">extras</a>
          <a href="#about">sobre mí</a>
          <a href="#contact">contacto</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-label">UX/UI · software · exploración visual</p>
            <h1 id="hero-title">Diseño<br />interfaces <em>con personalidad.</em></h1>
            <a className="scroll-note" href="#work">scroll to explore <span>↓</span></a>
          </div>

          <div className="hero-object" aria-hidden="true">
            <div className="orbital-ring" />
            <div className="gel-orb"><i /></div>
            <Spark />
          </div>

          <div className="hero-stamps" aria-hidden="true">
            <span>01<br />UX / UI</span>
            <span>built with<br />curiosity</span>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>

        <section id="work" className="work" aria-labelledby="work-title">
          <div className="section-topline reveal">
            <p className="eyebrow">selected work</p>
            <h2 id="work-title">Proyectos que resuelven<br />problemas <em>reales.</em></h2>
          </div>

          <div className="project-list">
            <a className="project-row reveal" href="https://pilateseunoia.com" target="_blank" rel="noreferrer">
              <span className="project-number">01</span>
              <strong>Pilates Eunoia</strong>
              <ProjectPreview variant="pilates" images={[pilatesOverview, pilatesRecovery, pilatesCalendar]} />
              <p className="project-summary">Reservas, cupos y recuperaciones para un estudio de Pilates.</p>
              <span className="project-type">web app · en uso real</span>
              <Arrow />
            </a>
            <a className="project-row reveal" href="https://notes-lovat-gamma.vercel.app/" target="_blank" rel="noreferrer">
              <span className="project-number">02</span>
              <strong>Notas</strong>
              <ProjectPreview variant="notes" images={[notesHero, notesBoard]} />
              <p className="project-summary">Un lugar para capturar ideas y organizarlas con intención.</p>
              <span className="project-type">product concept</span>
              <Arrow />
            </a>
            <a className="project-row reveal" href="https://juli-playground.vercel.app/" target="_blank" rel="noreferrer">
              <span className="project-number">03</span>
              <strong>Juli Playground</strong>
              <ProjectPreview variant="drawing" images={[playgroundHero, playgroundCollections]} />
              <p className="project-summary">Un pequeño mundo digital para ilustrar, coleccionar y jugar.</p>
              <span className="project-type">illustration · visual play</span>
              <Spark />
              <Arrow />
            </a>
            <article className="project-row project-row-static reveal">
              <span className="project-number">04</span>
              <strong>Taller Mecánico</strong>
              <ProjectPreview variant="workshop" images={[workshopDashboard, workshopFolders]} />
              <p className="project-summary">Casos, presupuestos y seguimiento operativo en un solo sistema.</p>
              <span className="project-type">sistema de gestión</span>
              <Arrow />
            </article>
          </div>

          <div className="work-note reveal">
            <p>Desde la definición de flujos hasta la implementación: diseño productos que hacen más claro el trabajo de las personas.</p>
            <div><span>Django · Python · MySQL</span><span>Java · Spring Boot · JavaScript</span></div>
          </div>
        </section>

        <section id="extras" className="extras" aria-labelledby="extras-title">
          <div className="section-topline extras-topline reveal">
            <p className="eyebrow">also in my orbit</p>
            <h2 id="extras-title">Investigación, juegos<br /><em>y curiosidad técnica.</em></h2>
          </div>

          <div className="extras-layout">
            <a className="research-card reveal" href="/docs/publications/rescue-robots-genetic-algorithms.pdf" target="_blank" rel="noreferrer">
              <div className="research-image-wrap">
                <img src={rescueRobotTrajectory} alt="Trayectoria calculada por algoritmo genético con elitismo en una simulación de rescate" />
                <span>ver investigación <Arrow /></span>
              </div>
              <div className="research-copy">
                <p className="eyebrow">investigación académica · IA & optimización</p>
                <h3>Trayectorias para robots móviles de rescate.</h3>
                <p>Planificación en entornos colapsados mediante algoritmos genéticos, con comparación frente a A* en una simulación 2D de 10 × 10.</p>
                <ul><li>200 individuos</li><li>5 % de mutación</li><li>400 generaciones</li></ul>
                <small>CoNaIISI · UTN Facultad Regional Rosario<br />con Isabella Andriollo y Valentín Feldkircher</small>
              </div>
            </a>

            <div className="side-extras reveal">
              <section className="credentials" aria-labelledby="credentials-title">
                <p className="eyebrow">credenciales</p>
                <h3 id="credentials-title">Aprender también es parte del proceso.</h3>
                <a href="https://portfolio-julia-aguaya.vercel.app/docs/certificates/cybersecurity-educacionit-julia-aguaya.pdf" target="_blank" rel="noreferrer"><span className="credential-number">01</span><span className="credential-name">Introducción a la Ciberseguridad</span><i>EducaciónIT · 2025</i><Arrow /></a>
                <a href="https://portfolio-julia-aguaya.vercel.app/docs/certificates/conaiisi-2025-julia-aguaya.pdf" target="_blank" rel="noreferrer"><span className="credential-number">02</span><span className="credential-name">CoNaIISI 2025</span><i>UTN · Córdoba</i><Arrow /></a>
              </section>

              <section className="toolbox" aria-labelledby="toolbox-title">
                <p className="eyebrow">toolbox</p>
                <h3 id="toolbox-title">Hago lugar para lo técnico y lo visual.</h3>
                <div><span>React</span><span>Java</span><span>Spring Boot</span><span>Python</span><span>Django</span><span>MySQL</span><span>PostgreSQL</span><span>Figma</span><span>Docker</span><span>n8n</span></div>
              </section>
            </div>
          </div>

          <section className="games reveal" aria-labelledby="games-title">
            <div className="games-heading"><p className="eyebrow">side quests</p><h3 id="games-title">También hago videojuegos.</h3></div>
            <div className="game-list">
              <a className="game-card game-happiness" href="https://walterm122.itch.io/busqueda-de-la-felicidad" target="_blank" rel="noreferrer">
                <GamePreview variant="happiness" images={[busquedaWorld, busquedaDialogue]} alt="Captura del michi explorando el mundo de Búsqueda de la Felicidad" />
                <div className="game-copy">
                  <p className="eyebrow">Programadora principal · Godot · Game Jam 2024</p>
                  <strong>Búsqueda de la Felicidad</strong>
                  <p>Un pequeño michi explora, resuelve puzles y recupera recuerdos importantes para ayudar a una bruja.</p>
                  <div className="game-tags"><span>Godot</span><span>GDScript</span><span>Adventure</span><span>Puzzles</span></div>
                </div>
                <Arrow />
              </a>
              <a className="game-card game-moon" href="https://lalilosa.itch.io/de-la-luna-a-la-tierra" target="_blank" rel="noreferrer">
                <GamePreview variant="moon" images={[lunaMountains, lunaForest, lunaLevel]} alt="Captura de plataformas de De la Luna a la Tierra" />
                <div className="game-copy">
                  <p className="eyebrow">Diseñadora de niveles · Construct · Women Game Jam 2021</p>
                  <strong>De la Luna a la Tierra</strong>
                  <p>Una aventura de plataformas sobre crecer, atravesar desafíos y aprender a dominar las propias emociones.</p>
                  <div className="game-tags"><span>Level design</span><span>Platformer</span><span>2D Adventure</span></div>
                </div>
                <Arrow />
              </a>
            </div>
          </section>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="about-orb reveal" aria-hidden="true"><span>human<br />taste</span><Spark /></div>
          <div className="about-copy reveal">
            <p className="eyebrow">about / julia aguaya</p>
            <h2 id="about-title">Diseño, desarrollo<br />y ordeno <em>lo complejo.</em></h2>
            <p>Soy desarrolladora de software y estudiante de Ingeniería en Sistemas de Información. Combino UX/UI, desarrollo y análisis de procesos para transformar necesidades reales en productos claros, útiles y sostenibles.</p>
          </div>
          <ol className="process-list reveal">
            <li><span>01</span><div><strong>Entiendo el contexto</strong><p>Escucho, ordeno y traduzco necesidades en flujos claros.</p></div></li>
            <li><span>02</span><div><strong>Diseño y construyo</strong><p>Investigo, prototipo e implemento experiencias que funcionen de principio a fin.</p></div></li>
            <li><span>03</span><div><strong>Optimizo el proceso</strong><p>Uso OpenCode, Codex y Claude para analizar, depurar, probar y automatizar con más criterio y velocidad.</p></div></li>
          </ol>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="contact-copy reveal">
            <p className="eyebrow">contacto / próximas ideas</p>
            <h2 id="contact-title">¿Tenés una idea?<br /><em>Hagámosla clara.</em></h2>
            <p>Estoy disponible para colaborar en productos digitales, interfaces y sistemas que hagan más simple el trabajo de las personas.</p>
            <a className="contact-email" href="mailto:juliaguaya02@gmail.com">
              <span>escribime a</span>
              juliaguaya02@gmail.com <Arrow />
            </a>
          </div>

          <div className="contact-resources reveal" aria-label="Recursos profesionales">
            <a className="contact-resource" href="/cv-julia-aguaya.pdf" download>
              <span className="resource-index">01</span>
              <span><strong>Descargar CV</strong><small>PDF · Español</small></span>
              <Arrow />
            </a>
            <div className="contact-resource contact-resource-pending" aria-label="Portfolio en inglés: próximamente">
              <span className="resource-index">02</span>
              <span><strong>Portfolio en inglés</strong><small>coming soon</small></span>
              <span className="pending-mark">EN</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top">julia</a>
        <p>Diseñado y desarrollado por Julia Aguaya ✦</p>
        <p>Rosario, Argentina · 2026</p>
      </footer>
    </div>
  )
}

export default App
