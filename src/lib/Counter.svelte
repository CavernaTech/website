<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="counter-btn" on:click={increment}>
  Clicks: {count}
</button>

<style>
  .counter-btn {
    @apply btn;
    @apply bg-yellow-700;
    @apply border-yellow-800;
  }
</style>
