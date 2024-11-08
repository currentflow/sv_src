<script>
  import { fade } from "svelte/transition";
  import "./app.css";
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  let title = $state("App"),
      { data, children } = $props();
</script>

<header class="">
  <div class="flex">
    <div class="title">
      <a href="/">
        <h1 style:margin=0>{title}</h1>
      </a>
    </div>
    <nav>
      {#each routes as route}
      <div class="route">
        <a href={route.path}>{route.name}</a>
      </div>
      {/each}
    </nav>
  </div>
</header>

<main>
  {#key data?.url.pathname}
  <div class="router" transition:fade={{duration:200}}>
    <div class="page">
    {@render children()}  
    </div>
  </div>
  {/key}
</main>

<style>
 
</style>