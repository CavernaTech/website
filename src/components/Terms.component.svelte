<script>
  
  let showTerms = '';
  
  export let agreed;
  export let whenAgreed;
  export let onAgreement;

  const handleAgreement = (e) => {
    e.preventDefault();
    onAgreement();
    showTerms = '';
  };

  const handleShow = (e) => {
    e.preventDefault();
    showTerms = 'modal-open';
    console.log(showTerms);
  }

  const handleClose = (e) => {
    e.preventDefault();
    showTerms = '';
  }

</script>

<main>
  <div id="terms-modal" class="modal {showTerms}">
    <div class="modal-box">
      TODO
      <div class="modal-action">
        <button on:click={handleAgreement} class="btn btn-primary">Aceitar</button> 
        <button on:click={handleClose} class="btn">Fechar</button>
      </div>
    </div>
  </div>
  <div class="field" />
  {#if !agreed}
    <input
      class="check"
      id="terms"
      type="checkbox"
      on:change={handleAgreement}
      bind:checked={agreed}
    />
    <span class="text">
      Eu concordo com os <span class="terms" on:click={handleShow}>Termos de Uso</span>
    </span>
  {:else}
    <span class="text">
      Você concordou com nossos <span class="terms"  on:click={handleShow}>Termos de Uso</span>
      em {whenAgreed.toLocaleString()}
    </span>
  {/if}
</main>

<style lang="postcss" type="text/postcss">
  .field {
    @apply flex flex-row;
  }
  .terms {
    cursor: pointer;
    @apply link link-primary text-gray-200;
  }
  .check {
    @apply checkbox checkbox-primary;
  }
  .text {
    @apply label-text text-gray-100 text-lg;
  }
</style>
