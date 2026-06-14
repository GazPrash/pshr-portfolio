<script lang="ts">
  import Minigame from "./Minigame.svelte";
</script>

<section class="hero-section">
  <Minigame />

  <div class="hero-content">
    <div class="hero-text glass">
      <h1 class="title">Prashant Shrivastava</h1>
      <p class="subtitle">Software Engineer & Game Developer</p>
      <div class="social-links">
        <a
          href="https://github.com/GazPrash"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          title="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path></svg
          >
        </a>
        <a
          href="https://www.linkedin.com/in/prashant-shrivastava-17ba2b200/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          title="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path><rect x="2" y="9" width="4" height="12"></rect><circle
              cx="4"
              cy="4"
              r="2"
            ></circle></svg
          >
        </a>
        <a
          href="https://drive.google.com/file/d/17_D2pSQF5poUq8Kk7uGaahgz0sxID5sW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          title="Resume"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            ></path><polyline points="14 2 14 8 20 8"></polyline><line
              x1="16"
              y1="13"
              x2="8"
              y2="13"
            ></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline
              points="10 9 9 9 8 9"
            ></polyline></svg
          >
        </a>
        <a
          href="https://pshr.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon"
          title="Itch.io"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><path
              d="M6 12h4"
            ></path><path d="M8 10v4"></path><circle cx="15" cy="12" r="1"
            ></circle><circle cx="18" cy="12" r="1"></circle></svg
          >
        </a>
        <a
          href="mailto:prashantshrivastava118@gmail.com"
          class="social-icon"
          title="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path><polyline points="22,6 12,13 2,6"></polyline></svg
          >
        </a>
      </div>
      <p class="description">
        I am a Software Engineer with 1 year of experience. I sometimes dabble
        with Low-Level Programming, Compilers and 3D Graphics. I also have some
        background in Research, specifically with LLMs and Natural Language
        Processing, and most recently I worked as Full Stack Enginner at
        Snaptrude with a focus on Algorithms, 3D Graphics & Computational
        Geometry.
      </p>
      <div class="actions">
        <a href="#experience" class="btn btn-primary">Professional Experience</a
        >
        <a href="#projects" class="btn btn-secondary">My Projects</a>
      </div>
    </div>
  </div>

  <!-- Decorative background elements -->
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
</section>

<style>
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: flex-start; /* change from center to flex-start to allow drag down */
    padding-top: 75vh; /* dragged down even lower */
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    width: 100%; /* span full width */
    position: relative;
    z-index: 10;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .hero-text {
    width: 100%;
    padding: 2rem 3rem; /* shrink top and bottom padding */
    border-radius: 0; /* remove border radius so it looks like a full bleed section */
    box-shadow: var(--shadow-lg);
    transform: translateY(0);
    /* animation: float 6s ease-in-out infinite; removed */
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background: #ffffff;
    color: #6b7280;
    padding: 2px 8px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    background: linear-gradient(
      to right,
      var(--color-primary-dark),
      var(--color-primary-light)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--color-surface);
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    transition: var(--transition-smooth);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .social-icon:hover {
    color: var(--color-primary);
    border-color: var(--color-primary-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  .description {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto 1.25rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn {
    padding: 2px 8px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    background: #ffffff;
    color: #6b7280;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .btn:hover {
    background: #f9fafb;
    border-color: #d1d5db;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .btn-primary {
    /* Optional: slightly darker text or different icon */
  }

  .btn-secondary {
    /* Kept same as base btn */
  }

  /* Background blobs */
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 1;
    opacity: 0.4;
  }

  .blob-1 {
    width: 400px;
    height: 400px;
    background: var(--color-primary-light);
    top: -100px;
    left: -100px;
  }

  .blob-2 {
    width: 500px;
    height: 500px;
    background: var(--color-primary);
    bottom: -200px;
    right: -100px;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 3rem;
    }
    .hero-text {
      padding: 2rem 1.5rem;
    }
    .actions {
      flex-direction: column;
    }
  }
</style>
