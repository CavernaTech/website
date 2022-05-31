<script>
  
  let showTerms = '';
  
  export let agreed;
  export let whenAgreed;
  export let onAgreement;
  export let banner = false;

  if (banner && !agreed) {
    showTerms = 'modal-open';
  }

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
    <div class="modal-box max-h-screen max-w-4xl overflow-y-auto">
      <h1>Termos de Cookies da CavernaTech</h1>

      <p>Este é um termo de Cookies usado pela CavernaTech, acessível por https://cavernatech.dev</p>

      <p><strong>O Que São Cookies</strong></p>

      <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos que são baixados em seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>

      <p><strong>Como Usamos Cookies</strong></p>

      <p>Usamos cookies por vários motivos detalhados abaixo. Infelizmente, na maioria dos casos, não há opções padrão do setor para desabilitar cookies sem desabilitar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe em todos os cookies se não tiver certeza se precisa deles ou não, caso sejam usados para fornecer um serviço que você usa.</p>

      <p><strong>Desativando Cookies</strong></p>

      <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do seu navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de certas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies. Esta Política de Cookies foi criada com a ajuda do <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator from CookiePolicyGenerator.com</a>.</p>
      <p><strong>Os Cookies que Definimos</strong></p>

      <ul>
  
        <li>
            <p>Cookies relacionados a boletins de e-mail</p>
            <p>Este site oferece serviços de assinatura de newsletter ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar certas notificações que podem ser válidas apenas para usuários inscritos/não inscritos.</p>
        </li>

      </ul>

      <p><strong>Cookies de Terceiros</strong></p>

      <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar por meio deste site.</p>

      <ul>

        <li>
            <p>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis na web para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear coisas como quanto tempo você passa no site e as páginas que você visita para que possamos continuar a produzir conteúdo atraente.</p>
            <p>Para obter mais informações sobre os cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>
        </li>

        <li>
            <p>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes na web e limitar o número de vezes que um determinado anúncio é exibido para você.</p>
            <p>Para obter mais informações sobre o Google AdSense, consulte as Perguntas frequentes sobre privacidade oficial do Google AdSense.</p>
        </li>
  
      </ul>

      <p><strong>Mais Informações</strong></p>

      <p>Espero que tenha esclarecido as coisas para você e, como foi mencionado anteriormente, se houver algo que você não tenha certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados caso ele interaja com um dos recursos que você usa em nosso site.</p>

      <p>Para mais informações gerais sobre cookies, leia <a href="https://www.generateprivacypolicy.com/#cookies">"Cookies" artigo do gerador de política de privacidade</a>.</p>

      <p>No entanto, se ainda estiver à procura de mais informações, pode contactar-nos através de um dos nossos métodos de contacto preferidos:</p>

      <ul>
      <li>Email: contato@cavernatech.dev</li>

      </ul>
      <div class="modal-action">
        <button on:click={handleClose} class="btn btn-link btn-secondary">Fechar</button>
        <button on:click={handleAgreement} class="btn btn-primary">Aceitar</button> 
      </div>
    </div>
  </div>
  {#if !banner}
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
