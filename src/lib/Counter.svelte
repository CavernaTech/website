<script>
  export let val = 1;
  export let callback;
  let count = val;
  const increment = () => {
    count += 1;
    callback(count);
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
