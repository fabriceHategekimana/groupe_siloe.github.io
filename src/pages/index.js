import React, {useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function GoldenParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height * 0.3 + Math.random() * canvas.height * 0.4;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.growing = Math.random() > 0.5;
        this.hue = Math.random() * 30 + 30; // 30-60 range for gold tones
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.growing) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.7) this.growing = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) this.reset();
        }

        if (this.x < 0 || this.x > canvas.width) this.reset();
        if (this.y < 0 || this.y > canvas.height) this.reset();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${this.hue}, 70%, 60%)`;
        ctx.shadowColor = `hsl(${this.hue}, 80%, 50%)`;
        ctx.shadowBlur = this.size * 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create flowing wave paths
    function drawWave(time) {
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#d4a547';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#d4a547';
      ctx.shadowBlur = 20;

      for (let wave = 0; wave < 3; wave++) {
        ctx.beginPath();
        const yOffset = canvas.height * (0.35 + wave * 0.1);
        for (let x = 0; x < canvas.width; x += 2) {
          const y = yOffset +
            Math.sin((x * 0.003) + time * 0.001 + wave) * 60 +
            Math.sin((x * 0.007) + time * 0.0015 + wave * 2) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(canvas.width * 0.06));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let time = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time++;
      drawWave(time);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particleCanvas} />;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const {latestProgrammeSlug} = usePluginData('latest-programme');
  return (
    <header className={styles.heroBanner}>
      <GoldenParticles />
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>Choeur d'Adoration</p>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.heroButton}
            to={latestProgrammeSlug}>
            Programme
          </Link>
          <Link
            className={styles.heroButtonOutline}
            to="/docs/chants/repertoire">
            Chants
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Chants & Paroles',
      description: 'Retrouvez toutes les paroles de nos chants de louange et d\'adoration, organisées et facilement accessibles.',
      link: '/docs/chants/repertoire',
      icon: '♪',
    },
    {
      title: 'Programmes',
      description: 'Consultez les programmes de chaque culte et événement avec la liste des chants prévus.',
      link: '/docs/programmes/liste-programmes',
      icon: '♫',
    },
    {
      title: 'Journal',
      description: 'Suivez nos répétitions, événements et découvrez des vidéos de louange inspirantes.',
      link: '/blog',
      icon: '✦',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <Link key={idx} to={feature.link} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Accueil"
      description="Siloé - Choeur d'Adoration. L'identité des adorateurs.">
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
