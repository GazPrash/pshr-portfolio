<script lang="ts">
  type Experience = {
    title: string;
    company: string;
    periods: string[];
    description: string[];
    certificate?: string;
  };

  const experiences: Experience[] = [
    {
      title: "Software Engineer I",
      company: "Snaptrude",
      periods: ["Jan 2025 - May 2025 (Intern)", "June 2025 - Present"],
      description: [
        "Worked as part of the Graphics team on 3D and 2D geometry, algorithms and graphics pipeline, in a fast-paced startup environment, contributing to a production-level CAD/BIM product used by architects and designers.",
        "Built browser-based 3D graphics features using Babylon.js and maintained frontend architecture using React.js and Redux, as well as backend microservices.",
        "Resolved critical production issues and multiple customer reported issues under tight timelines",
        "Worked as a Full stack developer along with a focus on Algorithms, 3D computational geometry, shader programming, etc",
      ],
    },
    {
      title: "Research Intern",
      company: "University of Lorraine, Inria & Loria",
      periods: ["May 2023 - July 2023"],
      description: [
        "Worked with Dr. Abdessamad Imine in Team PESTO on a research paper to develop an unsupervised statistical model for NLP tasks.",
        "In comparison to the BERT Language Model, it improves the computation time by approximately 78–85% while achieving around a 6x speed improvement overall, while requiring no GPU overhead and pre-training data",
      ],
    },
  ];
</script>

<section id="experience" class="experience-section">
  <div class="container">
    <h2 class="section-title">My Experience</h2>
    <div class="timeline">
      {#each experiences as exp, index}
        <div class="timeline-item" class:right={index % 2 !== 0}>
          <div class="timeline-dot"></div>
          <div class="timeline-content glass">
            <h3 class="role">{exp.title}</h3>
            <div class="meta">
              <span class="company">{exp.company}</span>
              <div class="periods-container">
                {#each exp.periods as p}
                  <span class="period">{p}</span>
                {/each}
              </div>
            </div>
            <ul class="desc-list">
              {#each exp.description as point}
                <li class="desc-item">{point}</li>
              {/each}
            </ul>
            {#if exp.certificate}
              <div class="cert-container">
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cert-link"
                  title="View Certificate"
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
                    ><circle cx="12" cy="8" r="7"></circle><polyline
                      points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                    ></polyline></svg
                  >
                  View Certificate
                </a>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .experience-section {
    background-color: var(--color-surface);
    position: relative;
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2.5rem;
    color: var(--color-primary-dark);
  }

  .timeline {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* Timeline central line */
  .timeline::after {
    content: "";
    position: absolute;
    width: 4px;
    background-color: var(--color-primary-light);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
  }

  .timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    box-sizing: border-box;
  }

  .timeline-item:nth-child(odd) {
    left: 0;
  }

  .timeline-item.right {
    left: 50%;
  }

  .timeline-dot {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: var(--color-surface);
    border: 4px solid var(--color-primary);
    top: 30px;
    border-radius: 50%;
    z-index: 1;
    transition: var(--transition-smooth);
  }

  .timeline-item.right .timeline-dot {
    left: -10px;
  }

  .timeline-content {
    padding: 1rem;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-smooth);
    position: relative;
  }

  .timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary-light);
  }

  .role {
    font-size: 1.1rem;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    color: var(--color-primary-dark);
    font-weight: 600;
  }

  .period {
    font-weight: 500;
    color: #6b7280;
    background: #ffffff;
    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .periods-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
  }

  .desc-list {
    color: var(--color-text-muted);
    line-height: 1.6;
    font-size: 0.85rem;
    padding-left: 1.25rem;
    margin: 0;
  }

  .desc-item {
    margin-bottom: 0.5rem;
  }

  .desc-item:last-child {
    margin-bottom: 0;
  }

  .cert-container {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .cert-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--color-primary);
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .cert-link:hover {
    color: var(--color-primary-dark);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .timeline::after {
      left: 31px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    .timeline-item.right {
      left: 0%;
    }

    .timeline-item:nth-child(odd) .timeline-dot,
    .timeline-item.right .timeline-dot {
      left: 21px;
    }

    .meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .periods-container {
      align-items: flex-start;
    }
  }
</style>
