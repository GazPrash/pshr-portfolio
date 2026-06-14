<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Games from '$lib/components/Games.svelte';
</script>

<Hero />
<Experience />
<Projects />
<Games />

<footer class="footer">
	<p>&copy; {new Date().getFullYear()} Prash. All rights reserved.</p>
</footer>

<style>
	.footer {
		text-align: center;
		padding: 3rem 0;
		background-color: var(--color-bg);
		color: var(--color-text-muted);
		border-top: 1px solid var(--color-border);
	}
</style>
