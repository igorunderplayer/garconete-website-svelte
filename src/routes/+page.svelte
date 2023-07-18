<script lang="ts">
  const inviteUrl =
    'https://discord.com/oauth2/authorize?client_id=743261970379309108&scope=bot+applications.commands&permissions=380172093505';
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-16 p-24">
  <img
    class="rounded-full w-64"
    src="https://cdn.discordapp.com/avatars/743261970379309108/95dcbce8b0dec8c8c6d3545af084e60b.png?size=512"
    alt="Foto de perfil do bot Garçonete"
  />

  <a
    class="bg-rose-900 rounded p-2 text-xl font-bold text-rose-200 transition-shadow hover:shadow-rose-600 shadow-md"
    href={inviteUrl}
    target="_blank"
    rel="noreferrer">Me adicione!</a
  >
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.zinc.900);
  }
</style>
