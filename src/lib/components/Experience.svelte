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
    <h2 class="section-title"><span class="highlight">My Experience</span></h2>
    <div class="timeline">
      {#each experiences as exp, index}
        <div class="timeline-item" class:right={index % 2 !== 0}>
          <div class="timeline-dot" style="background-color: var(--color-highlight-{index % 4 + 1});"></div>
          <div class="timeline-content brutal-panel brutal-panel-hover">
            <h3 class="role">{exp.title}</h3>
            <div class="meta">
              <span class="company brutal-badge" style="background-color: var(--color-highlight-{index % 4 + 2 > 4 ? 1 : index % 4 + 2});">{exp.company}</span>
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
    background-color: var(--color-highlight-1);
    padding: 0 1rem;
    border: 3px solid var(--color-border);
    box-shadow: var(--shadow-brutal-sm);
    display: inline-block;
    transform: rotate(-2deg);
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
    width: 6px;
    background-color: var(--color-border);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  .timeline-item {
    padding: 20px 40px;
    position: relative;
    width: 50%;
    box-sizing: border-box;
    z-index: 2;
  }

  .timeline-item:nth-child(odd) {
    left: 0;
  }

  .timeline-item.right {
    left: 50%;
  }

  .timeline-dot {
    position: absolute;
    width: 24px;
    height: 24px;
    right: -12px;
    background-color: var(--color-highlight-1);
    border: 3px solid var(--color-border);
    top: 40px;
    border-radius: 0; /* Neo-brutalism usually uses square or barely rounded */
    z-index: 10;
    transform: rotate(45deg);
  }

  .timeline-item.right .timeline-dot {
    left: -12px;
  }

  .timeline-content {
    position: relative;
    background: var(--color-surface);
  }

  .role {
    font-size: 2rem;
    color: var(--color-text);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .company {
    font-size: 1.2rem;
  }

  .period {
    font-weight: 700;
    color: var(--color-text);
    background: #ffffff;
    padding: 4px 12px;
    border: 2px solid var(--color-border);
    box-shadow: 2px 2px 0 var(--color-border);
    font-size: 0.9rem;
  }

  .periods-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
  }

  .desc-list {
    color: var(--color-text);
    line-height: 1.6;
    font-size: 1rem;
    padding-left: 1.25rem;
    margin: 0;
    font-weight: 500;
  }

  .desc-item {
    margin-bottom: 0.75rem;
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
    color: var(--color-text);
    background: var(--color-highlight-3);
    padding: 0.5rem 1rem;
    border: 2px solid var(--color-border);
    box-shadow: 2px 2px 0 var(--color-border);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition: var(--transition-smooth);
    font-family: var(--font-heading);
    letter-spacing: 1px;
  }

  .cert-link:hover {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0 var(--color-border);
  }

  @media (max-width: 768px) {
    .timeline::after {
      left: 12px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 44px;
      padding-right: 0;
    }

    .timeline-item.right {
      left: 0%;
    }

    .timeline-item:nth-child(odd) .timeline-dot,
    .timeline-item.right .timeline-dot {
      left: 0px;
    }

    .meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .periods-container {
      align-items: flex-start;
    }
  }
</style>
