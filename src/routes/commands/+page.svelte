<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center gap-16 p-16">
  <h1>Comandos</h1>

  <ul>
    {#each data.commands as command}
      <li>
        <p>{command.name} - {command.description}</p>
      </li>
    {/each}
  </ul>
</main>
