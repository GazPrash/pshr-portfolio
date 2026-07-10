<script lang="ts">
  import { onMount } from "svelte";
  import { MinigameLogic, type MinigameState } from "./minigame";

  let canvas: HTMLCanvasElement;
  let gameLogic: MinigameLogic | undefined;

  let state = $state<MinigameState>({
    clicks: [],
    cps: 0,
    anxious: false,
    gameState: "COUNTDOWN",
    countdownText: "3",
    playerRank: 0,
  });

  onMount(() => {
    gameLogic = new MinigameLogic(canvas, state);

    return () => {
      gameLogic?.dispose();
    };
  });
</script>

<div class="minigame-container">
  <div class="top-tooltip">"Cheer" Mr. Cube to help him win the race!! :3</div>
  <canvas bind:this={canvas}></canvas>

  {#if state.gameState === "COUNTDOWN"}
    <div class="overlay-text">
      {state.countdownText}
    </div>
  {/if}

  {#if state.gameState === "FINISHED"}
    <div class="overlay-text finished">
      RACE OVER!<br />
      <span class="rank-text"
        >You finished {state.playerRank}{state.playerRank === 1
          ? "st"
          : state.playerRank === 2
            ? "nd"
            : state.playerRank === 3
              ? "rd"
              : "th"}!</span
      >
    </div>
  {/if}

  <div class="ui">
    <button
      class="cheer-btn {state.anxious ? 'anxious' : ''} {state.gameState === 'FINISHED' ? 'play-again' : ''}"
      onclick={() => state.gameState === "FINISHED" ? gameLogic?.resetRace() : gameLogic?.cheer()}
      disabled={(state.gameState !== "RACING" && state.gameState !== "FINISHED") || state.anxious}
    >
      {state.gameState === "RACING" ? (state.anxious ? "TOO MUCH!!" : "CHEER!") : state.gameState === "FINISHED" ? "PLAY AGAIN?" : "WAIT..."}
    </button>
    <div class="stats">
      {#if state.gameState === "RACING"}
        {state.cps < 1
          ? "No motivation :("
          : state.cps > 1
            ? "Too much pressure :("
            : "Good support!! ^_^"}<br />
      {:else}
        Get Ready!
      {/if}
    </div>
  </div>
</div>

<style>
  .minigame-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    z-index: 1;
    pointer-events: none;
  }

  .top-tooltip {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Press Start 2P", monospace;
    font-size: 0.6rem;
    background: rgba(255, 255, 255, 0.8);
    color: #ef4444;
    padding: 0.4rem 1rem;
    border-radius: 6px;
    z-index: 10;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    white-space: nowrap;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  }

  .overlay-text {
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    text-align: center;
    font-family: "Press Start 2P", monospace;
    font-size: 5rem;
    color: #ef4444;
    text-shadow: 4px 4px 0 #000;
    pointer-events: none;
    z-index: 10;
    animation: pulse 0.5s infinite alternate;
  }

  .overlay-text.finished {
    font-size: 3rem;
    color: #eab308;
    line-height: 1.5;
  }

  .rank-text {
    font-size: 1.5rem;
    color: #ffffff;
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .ui {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(0.5rem + 2.5px);
  }

  .cheer-btn {
    font-family: "Press Start 2P", monospace;
    background: #ef4444;
    color: white;
    border: 4px solid #7f1d1d;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 8px 0 #7f1d1d;
    border-radius: 8px;
    transition:
      transform 0.1s,
      box-shadow 0.1s,
      background-color 0.3s;
    text-transform: uppercase;
  }

  .cheer-btn:disabled, .cheer-btn.play-again {
    background: #6b7280;
    border-color: #374151;
    box-shadow: 0 8px 0 #374151;
  }

  .cheer-btn:disabled {
    cursor: not-allowed;
  }

  .cheer-btn:not(:disabled):active {
    transform: translateY(4px);
    box-shadow: 0 4px 0 #7f1d1d;
  }

  .cheer-btn.play-again:not(:disabled):active {
    box-shadow: 0 4px 0 #374151;
  }

  .cheer-btn.anxious {
    background: #f59e0b;
    border-color: #b45309;
    box-shadow: 0 8px 0 #b45309;
    animation: shake 0.2s infinite;
  }

  .cheer-btn.anxious:not(:disabled):active {
    transform: translateY(4px);
    box-shadow: 0 4px 0 #b45309;
  }

  .stats {
    font-family: "Press Start 2P", monospace;
    font-size: 0.6rem;
    color: var(--color-text);
    background: rgba(255, 255, 255, 0.866);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    line-height: 1.5;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-aspect-ratio: 1/1) {
    .top-tooltip {
      font-size: 0.45rem;
      white-space: normal;
      width: 85%;
      text-align: center;
      top: 10px;
      line-height: 1.5;
    }
  }
</style>
