<script lang="ts">
  import { user } from '$lib/auth';
  import { onMount } from 'svelte';

  let authUri: string;

  onMount(() => {
    authUri = `https://discord.com/api/oauth2/authorize?client_id=743261970379309108&redirect_uri=${window.location.origin}&response_type=code&scope=identify%20guilds`;
  });
</script>

<header
  class="flex bg-zinc-950 p-2 h-14 w-full items-center justify-between flex-row shadow-sm shadow-rose-900"
>
  <div class="flex flex-row items-center gap-10">
    <a href="/" class="flex flex-row items-center gap-4">
      <img
        class="rounded-full w-10"
        src="https://cdn.discordapp.com/avatars/743261970379309108/95dcbce8b0dec8c8c6d3545af084e60b.png?size=512"
        alt="Foto de perfil do bot Garçonete"
      />

      <span class="font-extrabold text-lg">Garçonete</span>
    </a>

    <nav class="flex flex-row items-center gap-4 font-bold h-auto">
      <a href="/support">Suporte</a>
      <a href="/commands">Comandos</a>
    </nav>
  </div>

  <div class="flex flex-row items-center justify-center gap-4">
    {#if $user}
      <span class="font-bold">{$user.username}</span>
      <img
        class="rounded-full w-10"
        src="https://cdn.discordapp.com/avatars/{$user.id}/{$user.avatar}.png?size=512"
        alt="Foto de perfil do usuario"
      />
    {:else}
      <a href={authUri}>Login</a>
    {/if}
  </div>
</header>
