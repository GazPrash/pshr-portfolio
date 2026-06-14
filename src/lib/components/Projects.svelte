<script lang="ts">
  type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string;
    stars?: number;
    forks?: number;
    referenceLink?: { text: string; url: string };
  };

  const projects: Project[] = [
    {
      title: "TinyAPI - REST Framework",
      description:
        "An Open Source REST Framework for C++. Designed to be a bare-bones framework and easily hackable for quickly setting up HTTP Servers for simple websites. It is built with basic C sockets and doesnt not depend on any third-party dependencies.",
      tags: ["C++", "TCP/IP", "Socket Programming"],
      link: "https://github.com/GazPrash/TinyAPI",
      stars: 14,
      forks: 2,
    },
    {
      title: "Terminal Emulator",
      description:
        "Developed a terminal application from scratch, written in C and made as a research project to learn about the Operating System and System Calls. Written in C using the X-Window system, built on top of the Linux kernel's pty/tty protocol. Made with minimal dependency, making the terminal versatile and usable on almost every possible Linux distribution.",
      tags: ["C", "X11-Framework"],
      link: "https://github.com/GazPrash/terminal-emulator-x11",
      stars: 2,
      forks: 0,
    },
    {
      title: "ContentFinder - Transformer Based Search System",
      description:
        "This project was designed to develop an extensive transformer-based search algorithm for information retrieval. The process is similar to how ChatGPT can respond to conversational queries without needing precisely worded questions. This project was developed during a time where Large context and cheap computer librarian LLM search models were not a thing and hence it was aimed tto use existing State of the Art Language Models like BERT and Sentence-BERT and use them for information retrieval.",
      tags: ["Python", "PyTorch", "SK-Learn", "BERT Language Model"],
      link: "https://github.com/GazPrash/content-finder-bert",
    },
    {
      title: "AI Support Chat Plugin",
      description:
        "A Chat Support Agent that could be integrated into to any website for providing ai-assisted customer support. Integrated with OpenAI for LLM assisted features, with a fallback passive mode to deal with API failures.",
      tags: [
        "React.js",
        "Express.js",
        "Vite.js",
        "OpenAI API",
        "Prisma ORM for PostgreSQL",
      ],
      link: "https://github.com/GazPrash/ai-support-agent",
      referenceLink: {
        text: "Live Demo",
        url: "https://ai-support-agent-zeta.vercel.app/",
      },
    },
    {
      title: "3D To ASCII Art Generator",
      description:
        "A recreational tool that can take any 3D .blend or .obj file and render it as an ASCII aniamtion on your terminal.",
      tags: ["C++"],
      link: "https://github.com/GazPrash/3dToASCII",
    },
    {
      title: "SHA-256 Algorithm Implementation",
      description:
        "A personal implementation of the popular State of the Art hashing algorithm; SHA-256. The implementation was done based on the mathematical paper covered here:",
      tags: ["C++"],
      link: "https://github.com/GazPrash/SHA-256",
      referenceLink: {
        text: "SHA-256.pdf",
        url: "https://helix.stormhub.org/papers/SHA-256.pdf",
      },
    },
  ];
</script>

<section id="projects" class="projects-section">
  <div class="container">
    <h2 class="section-title">GitHub Projects</h2>
    <div class="grid">
      {#each projects as project}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="project-card glass"
        >
          <div class="card-content">
            <div class="header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="folder-icon"
                ><path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                ></path></svg
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
                class="external-link-icon"
                ><path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path><polyline points="15 3 21 3 21 9"></polyline><line
                  x1="10"
                  y1="14"
                  x2="21"
                  y2="3"
                ></line></svg
              >
            </div>
            <h3 class="title">{project.title}</h3>
            {#if project.stars !== undefined || project.forks !== undefined}
              <div class="stats">
                {#if project.stars !== undefined}
                  <span class="stat-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stat-icon"
                      ><polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon></svg
                    >
                    {project.stars}
                  </span>
                {/if}
                {#if project.stars !== undefined && project.forks !== undefined}
                  <span class="stat-separator">•</span>
                {/if}
                {#if project.forks !== undefined}
                  <span class="stat-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="stat-icon"
                      ><circle cx="12" cy="18" r="3"></circle><circle
                        cx="6"
                        cy="6"
                        r="3"
                      ></circle><circle cx="18" cy="6" r="3"></circle><path
                        d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"
                      ></path><path d="M12 12v3"></path></svg
                    >
                    {project.forks}
                  </span>
                {/if}
              </div>
            {/if}
            <p class="description">
              {project.description}
              {#if project.referenceLink}
                <span style="display: block; margin-top: 0.75rem;">
                  <span
                    class="reference-span"
                    role="button"
                    tabindex="0"
                    onclick={(e) => {
                      e.preventDefault();
                      window.open(project.referenceLink?.url, "_blank");
                    }}
                    onkeydown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        window.open(project.referenceLink?.url, "_blank");
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      ><path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path><polyline points="15 3 21 3 21 9"></polyline><line
                        x1="10"
                        y1="14"
                        x2="21"
                        y2="3"
                      ></line></svg
                    >
                    {project.referenceLink.text}
                  </span>
                </span>
              {/if}
            </p>
          </div>
          <div class="tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-section {
    background-color: var(--color-bg);
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--color-primary-dark);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: var(--radius-sm);
    background-color: var(--color-surface);
    transition: var(--transition-smooth);
    height: 100%;
    border: 1px solid var(--color-border);
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary-light);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .folder-icon {
    color: var(--color-primary);
    width: 40px;
    height: 40px;
  }

  .external-link-icon {
    color: var(--color-text-muted);
    transition: var(--transition-smooth);
  }

  .project-card:hover .external-link-icon {
    color: var(--color-primary);
  }

  .title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    transition: var(--transition-smooth);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    color: var(--color-text-muted);
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .stat-separator {
    color: var(--color-text-muted);
    opacity: 0.5;
  }

  .project-card:hover .title {
    color: var(--color-primary-dark);
  }

  .description {
    color: var(--color-text-muted);
    font-size: 0.85rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .reference-span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.75rem;
    font-family: inherit;
    font-weight: 500;
    color: #6b7280;
    background: #ffffff;
    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    cursor: pointer;
    vertical-align: middle;
  }

  .reference-span:hover {
    background: #f9fafb;
    border-color: #d1d5db;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tag {
    font-size: 0.75rem;
    font-family: inherit;
    font-weight: 500;
    color: #6b7280;
    background: #ffffff;
    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
</style>
