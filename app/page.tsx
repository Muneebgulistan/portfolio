"use client";

import { useState } from "react";
import Image from "next/image";

const socials = [
  { name: "Instagram · Flex", handle: "@muneeb.flex", detail: "Gym, cars & original content", href: "https://www.instagram.com/muneeb.flex/", icon: "◎" },
  { name: "Instagram · Personal", handle: "@muneebgulistan", detail: "My photos, videos & everyday moments", href: "https://www.instagram.com/muneebgulistan/", icon: "◎" },
  { name: "Instagram · Tech", handle: "@ai.muneeb", detail: "Tech, AI & my game-dev journey", href: "https://www.instagram.com/ai.muneeb/", icon: "◎" },
  { name: "LinkedIn", handle: "Muneeb Gulistan", detail: "AI news, insights & professional updates", href: "https://www.linkedin.com/in/muneeb-gulistan/", icon: "in" },
  { name: "X", handle: "@muneebgulistan", detail: "AI, technology & ideas", href: "https://x.com/muneebgulistan", icon: "𝕏" },
  { name: "GitHub", handle: "Muneebgulistan", detail: "Code, experiments & open projects", href: "https://github.com/Muneebgulistan", icon: "⌘" }
];

const skills = [
  { group: "Development", items: [["HTML / CSS / Tailwind", 95], ["React / Next.js", 85], ["Python", 80], ["C++", 70]] },
  { group: "AI & Tools", items: [["Claude / Gemini / ChatGPT", 95], ["Google AI Studio", 85], ["Prompt Engineering", 90], ["AI Integrations", 75]] },
  { group: "Productivity & Media", items: [["CapCut & InShot", 90], ["Canva Design", 85], ["MS Office Suite", 95], ["Content Creation", 85]] }
];

const projects = [
  { number: "01", type: "WEB APPLICATION", name: "Medic Vault", description: "A healthcare-focused website project. Explore the live experience and its product direction.", stack: ["Web", "Healthcare", "Product"], href: "https://mediic.vercel.app/", label: "Visit live website", art: "medical" },
  { number: "02", type: "3D GAME DEVELOPMENT", name: "Cricket 3D Game", description: "A 3D cricket game project exploring gameplay, interactive environments and game development.", stack: ["3D", "Gameplay", "Game Dev"], href: "https://github.com/Muneebgulistan", label: "Explore GitHub", art: "cricket" },
  { number: "03", type: "2D GAME DEVELOPMENT", name: "Snake 2D Game", description: "A classic snake game project focused on 2D mechanics, movement and game logic.", stack: ["2D", "Game Logic", "JavaScript"], href: "https://github.com/Muneebgulistan", label: "Explore GitHub", art: "snake" },
  { number: "04", type: "OPEN SOURCE", name: "More experiments", description: "A growing collection of experiments, learning projects and software builds on GitHub.", stack: ["Python", "C++", "Web"], href: "https://github.com/Muneebgulistan", label: "View repositories", art: "code" }
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">M</span><span>MUNEEB<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[["About", "#about"], ["Projects", "#work"], ["Skills", "#skills"], ["Social", "#social"], ["Journey", "#journey"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <Arrow /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AI STUDENT <span className="eyebrow-divider">/</span> DEVELOPER <span className="eyebrow-divider">/</span> CREATOR</div>
          <h1>Building ideas<br />into <span className="gradient-text">digital reality.</span></h1>
          <p className="hero-intro">I’m <strong>Muneeb Gulistan</strong> — an AI student, developer and content creator exploring the space where technology, creativity and games meet.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
            <a className="button button-ghost" href="mailto:muneegulistan@gmail.com">Get in touch</a>
          </div>
          <div className="hero-meta">
            <span><i className="meta-icon">⌖</i> Abbottabad, Pakistan</span>
            <span><i className="meta-icon">✳</i> BS Artificial Intelligence</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
          <div className="visual-core">
            <Image
              src="/muneeb-profile.jpg"
              alt="Muneeb Gulistan"
              fill
              priority
              sizes="(max-width: 600px) 190px, 245px"
              className="profile-photo"
            />
          </div>
          <div className="float-card float-top"><span className="float-icon">✦</span><div><b>AI + Creativity</b><small>Always experimenting</small></div></div>
          <div className="float-card float-bottom"><span className="float-icon blue-icon">⌘</span><div><b>Build in public</b><small>Learning by creating</small></div></div>
          <div className="visual-index">001 <span>—</span> PORTFOLIO</div>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner"><span>CURIOUS BY NATURE.</span><p>Learning, building, sharing — one project at a time.</p><span>BASED IN PAKISTAN <b>✳</b></span></div>
      </section>

      <section className="section-wrap section-block" id="about">
        <div className="section-kicker">01 / ABOUT ME</div>
        <div className="about-grid">
          <div><h2>Not just learning<br />technology. <span className="muted-heading">Making things with it.</span></h2></div>
          <div className="about-copy">
            <p>I’m Muneeb Gulistan, currently pursuing a <strong>BS in Artificial Intelligence</strong>. I enjoy turning ideas into useful digital experiences — from web applications and AI experiments to games.</p>
            <p>Outside development, I create content across Instagram, LinkedIn and X. I’m also a founding member of ARMAAS Solutions and Feedify Organization, and I’m documenting my game development journey from the beginning.</p>
            <div className="about-facts">
              <div><small>HOME REGION</small><b>Abbottabad, Pakistan</b></div>
              <div><small>ROOTS</small><b>Nagri Balla, Galyat</b></div>
              <div><small>CURRENT FOCUS</small><b>AI · Web · Game Dev</b></div>
              <div><small>EMAIL</small><b>muneegulistan@gmail.com</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="work">
        <div className="section-heading"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Things I’ve <span className="gradient-text">built.</span></h2></div><p>Projects, experiments and ideas<br />made real through code.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <div className={`project-art art-${project.art}`}>
              <div className="art-topline"><span>{project.type}</span><span>{project.number}</span></div>
              {project.art === "medical" && <div className="medical-ui"><div className="medical-cross">＋</div><div className="medical-lines"><i /><i /><i /></div><div className="medical-pill">MEDIC VAULT</div></div>}
              {project.art === "cricket" && <div className="cricket-scene"><div className="stadium-lights" /><div className="pitch" /><div className="wicket" /><div className="ball" /></div>}
              {project.art === "snake" && <div className="snake-scene"><div className="snake-grid">{Array.from({length: 36}, (_, i) => <i key={i} />)}</div><div className="snake-body">● ● ● ●</div></div>}
              {project.art === "code" && <div className="code-scene"><span>01</span><b>const idea =</b><strong>build( );</strong><em>// keep creating</em></div>}
            </div>
            <div className="project-info"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <Arrow /></a></div>
          </article>)}
        </div>
        <div className="work-footnote">More builds and source code <a href="https://github.com/Muneebgulistan" target="_blank" rel="noreferrer">on GitHub <Arrow /></a></div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap section-block">
          <div className="section-kicker">03 / TOOLKIT</div>
          <div className="section-heading"><div><h2>My creative <span className="gradient-text">stack.</span></h2></div><p>A growing toolkit for turning<br />curiosity into working projects.</p></div>
          <div className="skills-grid">
            {skills.map((group, idx) => <div className="skill-card" key={group.group}><div className="skill-number">0{idx + 1}</div><h3>{group.group}</h3>{group.items.map(([name, value]) => <div className="skill-item" key={name as string}><div className="skill-label"><span>{name}</span><b>{value}%</b></div><div className="skill-track"><span style={{ width: `${value}%` }} /></div></div>)}</div>)}
          </div>
          <p className="skills-note">Skill levels are self-assessments and represent my current confidence and experience.</p>
        </div>
      </section>

      <section className="section-wrap section-block" id="social">
        <div className="section-heading"><div><div className="section-kicker">04 / FIND ME ONLINE</div><h2>Different platforms.<br /><span className="gradient-text">One curious mind.</span></h2></div><p>I share different sides of my work<br />depending on the platform.</p></div>
        <div className="social-grid">{socials.map((social, i) => <a className="social-card" href={social.href} target="_blank" rel="noreferrer" key={social.name}><span className="social-icon">{social.icon}</span><span className="social-content"><b>{social.name}</b><small>{social.handle}</small><em>{social.detail}</em></span><span className="social-arrow"><Arrow /></span></a>)}</div>
      </section>

      <section className="journey-section" id="journey">
        <div className="section-wrap section-block">
          <div className="section-kicker">05 / THE JOURNEY</div>
          <div className="journey-grid">
            <div><h2>Progress over<br /><span className="gradient-text">perfection.</span></h2><p className="journey-lead">I believe the best way to learn is to build, share the process and keep improving.</p><a className="button button-ghost" href="https://www.instagram.com/ai.muneeb/" target="_blank" rel="noreferrer">Follow the game-dev series <Arrow /></a></div>
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-dot" /><small>NOW</small><h3>BS Artificial Intelligence</h3><p>Building foundations in AI while developing practical projects and exploring modern tools.</p></div>
              <div className="timeline-item"><span className="timeline-dot" /><small>BUILDING</small><h3>Game development journey</h3><p>Learning from the beginning and sharing the process through my tech Instagram page.</p></div>
              <div className="timeline-item"><span className="timeline-dot" /><small>COMMUNITY</small><h3>ARMAAS Solutions & Feedify</h3><p>Contributing as a founding member to technology initiatives and community-driven projects.</p></div>
              <div className="timeline-item"><span className="timeline-dot" /><small>ALWAYS</small><h3>Create. Learn. Repeat.</h3><p>Sharing AI news, developer experiences, personal content and creative experiments online.</p></div>
            </div>
          </div>
          <div className="roles-grid">
            <div><span>✳</span><small>FOUNDING MEMBER</small><b>ARMAAS Solutions</b><p>Strategic tech solutions and software development projects.</p></div>
            <div><span>◈</span><small>FOUNDING MEMBER</small><b>Feedify Organization</b><p>Organizational initiatives and community-driven tech projects.</p></div>
            <div><span>◎</span><small>CONTENT CREATOR</small><b>Instagram & social platforms</b><p>Sharing technology, AI, lifestyle and creative work.</p></div>
            <div><span>⌁</span><small>COMMUNITY</small><b>Competitive gaming</b><p>A passion for strategy and team-based competitive games.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="section-kicker">06 / CONTACT</div>
          <h2>Have an idea?<br /><span className="gradient-text">Let’s make it happen.</span></h2>
          <p>Open to meaningful collaborations, interesting projects and conversations about AI, development and creative technology.</p>
          <a className="button button-primary contact-button" href="mailto:muneegulistan@gmail.com">muneegulistan@gmail.com <Arrow /></a>
          <div className="contact-bottom"><span>ABBOTTABAD, PAKISTAN</span><div><a href="https://www.linkedin.com/in/muneeb-gulistan/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://x.com/muneebgulistan" target="_blank" rel="noreferrer">X</a><a href="https://github.com/Muneebgulistan" target="_blank" rel="noreferrer">GITHUB</a></div></div>
        </div>
      </section>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">M</span><span>MUNEEB<span className="brand-dot">.</span></span></a><span>© {new Date().getFullYear()} Muneeb Gulistan. Built with curiosity.</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
