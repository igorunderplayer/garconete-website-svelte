<script>
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import '../app.css';
  import { page } from '$app/stores';
  import { signInWithCode } from '$lib/auth';

  onMount(() => {
    const code = $page.url.searchParams.get('code');

    if (code && typeof code === 'string') {
      signInWithCode(code);
    }
  });
</script>

<Header />
<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.zinc.900);
    color: theme(colors.rose.50);
  }
</style>
