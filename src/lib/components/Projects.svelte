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
      title: "2D to 3D Voxelizer",
      description:
        "A cross-platform application that converts 2D pixel art into 3D low-poly or voxel models. Developed in Go, it uses mathematical algorithms to reconstruct 3D geometry from 2D sprites without using any Generative AI. Available on Windows and macOS.",
      tags: ["Go", "3D Graphics", "Wails"],
      link: "https://github.com/GazPrash/2d-to-3d-voxelizer",
      stars: 9,
      forks: 0,
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
    <h2 class="section-title"><span class="highlight">GitHub Projects</span></h2>
    <div class="grid">
      {#each projects as project, index}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="project-card brutal-panel brutal-panel-hover"
        >
          <div class="card-content">
            <div class="header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="var(--color-highlight-{index % 4 + 1})"
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
                width="24"
                height="24"
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
                      width="16"
                      height="16"
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
                      width="16"
                      height="16"
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
                <span style="display: block; margin-top: 1rem;">
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
                      width="14"
                      height="14"
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
    position: relative;
    padding-top: 2rem;
  }

  .section-title {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
    color: var(--color-text);
  }

  .highlight {
    background-color: var(--color-highlight-2);
    padding: 0 1rem;
    border: 3px solid var(--color-border);
    box-shadow: var(--shadow-brutal-sm);
    display: inline-block;
    transform: rotate(1deg);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    color: var(--color-text);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .folder-icon {
    color: var(--color-text);
  }

  .external-link-icon {
    color: var(--color-text);
    transition: var(--transition-smooth);
  }

  .project-card:hover .external-link-icon {
    transform: scale(1.1);
  }

  .title {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  .stats {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .stat-separator {
    opacity: 0.5;
  }

  .description {
    color: var(--color-text);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .reference-span, .tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.85rem;
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-text);
    background: var(--color-highlight-3);
    padding: 4px 12px;
    border: 2px solid var(--color-border);
    box-shadow: 2px 2px 0 var(--color-border);
    letter-spacing: 0.5px;
    transition: var(--transition-smooth);
  }
  
  .reference-span {
    background: var(--color-highlight-4);
    cursor: pointer;
  }

  .reference-span:hover {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0 var(--color-border);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
</style>
