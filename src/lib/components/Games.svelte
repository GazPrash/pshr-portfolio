<script lang="ts">
  const games = [
    {
      title: "Stay On!",
      description:
        "Discover a collection of minimalistic hyper casual games involving platforming physics and lots of fun. Stay On brings to you 4 different easy to pick up challenging games while allowing you to drive into the beautiful aesthetics of isometric design and low poly landscapes. ",
      image: "/stay-on.png",
      playLink: "https://pshr.itch.io/stay-on",
    },
    {
      title: "Death Statues",
      description:
        "Death Statues is a game where you are your own enemy or in other words your own obstacle. The game is all about collecting as many runes while you get bombarded by a rain of fireballs that convert the player to statues. Avoid the statues to keep the run alive!",
      image: "/death-statues.png",
      playLink: "https://pshr.itch.io/death-statues",
    },
  ];
</script>

<section id="games" class="games-section">
  <div class="container">
    <h2 class="section-title"><span class="highlight">Published Games</span></h2>
    <div class="games-grid">
      {#each games as game, index}
        <div class="game-card brutal-panel brutal-panel-hover" style="border-top-width: 8px; border-top-color: var(--color-highlight-{index % 4 + 1});">
          <div class="game-image" style="background-image: url('{game.image}')">
            <div class="overlay">
              <a href={game.playLink} class="play-btn" style="background-color: var(--color-highlight-{index % 4 + 1});">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="play-icon"
                  ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
                >
                Play Now
              </a>
            </div>
          </div>
          <div class="game-info">
            <h3 class="title">{game.title}</h3>
            <p class="description">{game.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .games-section {
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
    background-color: var(--color-highlight-3);
    padding: 0 1rem;
    border: 3px solid var(--color-border);
    box-shadow: var(--shadow-brutal-sm);
    display: inline-block;
    transform: rotate(-1deg);
  }

  .games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }

  .game-card {
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .game-image {
    height: 250px;
    background-size: cover;
    background-position: center;
    position: relative;
    border-bottom: 3px solid var(--color-border);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition-smooth);
  }

  .game-card:hover .overlay {
    opacity: 1;
  }

  .play-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text);
    padding: 0.75rem 1.5rem;
    font-weight: 700;
    font-family: var(--font-heading);
    font-size: 1.5rem;
    border: 3px solid var(--color-border);
    box-shadow: var(--shadow-brutal-sm);
    transform: translateY(20px);
    transition: var(--transition-smooth);
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .game-card:hover .play-btn {
    transform: translateY(0);
  }

  .play-btn:hover {
    transform: translate(2px, 2px) !important;
    box-shadow: 1px 1px 0 var(--color-border);
  }

  .game-info {
    padding: 1.5rem;
    background: var(--color-surface);
  }

  .title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    text-transform: uppercase;
  }

  .description {
    color: var(--color-text);
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .games-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
