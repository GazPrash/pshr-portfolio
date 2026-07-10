<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Games from "$lib/components/Games.svelte";
</script>

<Hero />
<Experience />
<Projects />
<Games />

<footer class="footer">
  <p>
    &copy; {new Date().getFullYear()} Prashant Shrivastava. All rights reserved.
  </p>
</footer>

<style>
  .footer {
    text-align: center;
    padding: 3rem 0;
    background-color: var(--color-surface);
    color: var(--color-text);
    border-top: 4px solid var(--color-border);
    font-weight: 700;
    font-size: 1.1rem;
  }
</style>
