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
    <h2 class="section-title">Deployed Games</h2>
    <div class="games-grid">
      {#each games as game}
        <div class="game-card">
          <div class="game-image" style="background-image: url('{game.image}')">
            <div class="overlay">
              <a href={game.playLink} class="play-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="play-icon"
                  ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
                >
                Play Now
              </a>
            </div>
          </div>
          <div class="game-info glass">
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
    background-color: var(--color-surface);
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--color-primary-dark);
  }

  .games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }

  .game-card {
    border-radius: var(--radius-sm);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: var(--transition-smooth);
    position: relative;
    border: 1px solid var(--color-border);
  }

  .game-card:hover {
    transform: translateY(-10px);
    box-shadow:
      0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  .game-image {
    height: 250px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(249, 80, 22, 0.8);
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
    background: #fff;
    color: var(--color-primary-dark);
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    font-weight: bold;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .game-card:hover .play-btn {
    transform: translateY(0);
  }

  .game-info {
    padding: 1rem;
    background: var(--color-surface);
  }

  .title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }

  .description {
    color: var(--color-text-muted);
    line-height: 1.6;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    .games-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
