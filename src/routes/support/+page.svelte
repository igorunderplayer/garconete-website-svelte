<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center gap-16 p-16">
  <h1 class="font-extrabold text-4xl text-rose-300">Suporte</h1>

  <p class="first-letter:text-rose-300">
    > Está com duvidas? Precisa de ajuda? Achou um problema? Ou apenas quer achar pessoas para
    conversar?
  </p>

  <p class="first-letter:text-rose-300">
    > Entre no meu servidor, lá você pode tirar suas duvidas, relatar problemas ou até encontrar
    alguém (você pode encontrar seu futuro melhor amigo lá... ou algo mais 👀)
  </p>

  <div class="flex flex-col p-4 rounded bg-zinc-800 gap-4 shadow-rose-900 shadow">
    <span class="font-semibold text-sm text-rose-100">Você foi convidado para um servidor</span>
    <div class="flex flex-row gap-4">
      <img
        class="rounded-2xl w-16 h-16"
        src="https://cdn.discordapp.com/icons/934492123280072744/17a3f5b1555550f0e46654a6773aeb7a.gif?size=2048"
        alt="Logo do servidor"
      />

      <div class="flex flex-col">
        <span class="font-bold">Igor's Server</span>
        <span class="text-rose-200 text-sm line-clamp-2 max-w-xs"
          >Servidor de jogos, desenvolvimento e outras coisas do Igor</span
        >
      </div>
      <a
        href="https://discord.gg/tCEVuPT29W"
        target="_blank"
        rel="noreferrer"
        class="flex w-32 m-2 items-center justify-center text-center rounded bg-green-600 font-bold p-2"
        >Juntar-se</a
      >
    </div>
  </div>
</main>
