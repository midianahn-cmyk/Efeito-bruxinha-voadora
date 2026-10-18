
/*
==================================================
BRUXINHA VOADORA — EFEITO EXTERNO PARA SITES E BLOGS

Criadora: Com Mãos de Seda
Site oficial: https://www.commaosdesedaoficial.com

© 2026 Com Mãos de Seda.
Todos os direitos reservados.
==================================================
*/

(function () {
  'use strict';

  var ID_RAIZ = 'bruxinha-blogger';
  var ID_ESTILO = 'bruxinha-estilo-externo';
  var CHAVE_SUSPENSAO = 'cms_bruxinha_voadora_suspensa_ate';
  var DURACAO_SUSPENSAO = 24 * 60 * 60 * 1000;

  /* EVITA DUPLICAR O EFEITO */
  if (document.getElementById(ID_RAIZ)) return;

  function iniciarBruxinha() {
    if (!document.body) {
      document.addEventListener(
        'DOMContentLoaded',
        iniciarBruxinha,
        { once: true }
      );
      return;
    }

    if (document.getElementById(ID_RAIZ)) return;

    /* =========================================
       ESTILOS DO EFEITO
    ========================================= */

    var css = `
      #bruxinha-blogger {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 999990;
      }

      #bruxinha-personagem {
        position: absolute;
        left: -300px;
        top: 18%;
        display: flex;
        align-items: center;
        white-space: nowrap;
        opacity: 0;
        font-family: Arial, sans-serif;
        will-change: left, top, transform;
      }

      #bruxinha-personagem.voando {
        animation: bruxinha-voo 9s linear forwards;
      }

      .bruxinha-emoji {
        display: inline-block;
        line-height: 1;
        filter: drop-shadow(2px 5px 3px #555);
        animation: bruxinha-balanco .3s ease-in-out infinite alternate;
      }

      .imagem-bruxinha {
        display: block;
        width: 250px;
        height: auto;
        object-fit: contain;
      }

      .imagem-fumaca {
        display: block;
        width: 200px;
        height: auto;
      }

      .bruxinha-fumaca {
        position: absolute;
        left: -45px;
        top: 65px;
        animation: bruxinha-magica .7s ease-in-out infinite alternate;
      }

      .bruxinha-vassoura {
        font-size: 48px;
        margin-left: -50px;
        transform: rotate(-15deg);
        width: 50px;
      }

      .bruxinha-risada {
        position: absolute;
        top: -35px;
        left: 45px;
        padding: 7px 10px;
        border-radius: 12px;
        color: #fff;
        background: #6b2a91;
        border: 2px solid #d8a5ff;
        font-size: 18px;
        font-family: Cookie, cursive;
        font-weight: bold;
        transform: rotate(-8deg);
        animation: bruxinha-riso .35s ease-in-out infinite alternate;
      }

      /* CONTROLE FIXO */

      #bruxinha-controle {
        position: fixed !important;
        right: 12px !important;
        bottom: 110px !important;
        top: auto !important;
        left: auto !important;
        z-index: 2147483647 !important;
        isolation: isolate !important;
        display: block !important;
        width: max-content !important;
        max-width: calc(100vw - 24px) !important;
        height: auto !important;
        overflow: visible !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
        visibility: visible !important;
      }

      /* CAIXA ROXA */

      #bruxinha-botao-caixa {
        position: relative !important;
        display: block !important;
        width: max-content !important;
        max-width: calc(100vw - 24px) !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 0 5px !important;
        background: #39204f !important;
        border: 1px solid #8e59a9 !important;
        border-radius: 15px !important;
        box-shadow: 0 2px 10px #0003 !important;
        overflow: visible !important;
      }

      /* BOTÃO DE ATIVAÇÃO */

      #bruxinha-botao-caixa > #bruxinha-som {
        position: relative !important;
        z-index: 1 !important;
        display: block !important;
        width: 100% !important;
        height: auto !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 5px 8px !important;
        border: 0 !important;
        border-radius: 13px 13px 0 0 !important;
        background: transparent !important;
        color: #fff !important;
        font: bold 13px Arial, sans-serif !important;
        text-align: center !important;
        white-space: nowrap !important;
        cursor: pointer !important;
        box-shadow: none !important;
        transform: none !important;
        opacity: 1 !important;
        visibility: visible !important;
      }

      #bruxinha-botao-caixa > #bruxinha-som:hover {
        background: #4a2b62 !important;
      }

      /* CRÉDITO */

      #bruxinha-botao-caixa > #credito-bruxinha {
        position: static !important;
        z-index: auto !important;
        display: block !important;
        width: 100% !important;
        height: auto !important;
        min-height: 13px !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 5px !important;
        background: transparent !important;
        color: #d8a5ff !important;
        font: 10px/1.4 Arial, sans-serif !important;
        text-align: center !important;
        text-decoration: none !important;
        opacity: .95 !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }

      #bruxinha-botao-caixa > #credito-bruxinha:hover {
        color: #fff !important;
        text-decoration: underline !important;
        opacity: 1 !important;
      }

      /* BOTÃO X */

      #bruxinha-controle > #bruxinha-fechar {
        position: absolute !important;
        top: -10px !important;
        right: -10px !important;
        z-index: 2147483647 !important;
        isolation: isolate !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 25px !important;
        height: 25px !important;
        box-sizing: border-box !important;
        margin: 0 !important;
        padding: 0 !important;
        border: 1px solid #fff !important;
        border-radius: 50% !important;
        background: #9b3d3d !important;
        color: #fff !important;
        font: bold 13px Arial, sans-serif !important;
        line-height: 1 !important;
        cursor: pointer !important;
        box-shadow: 0 2px 5px #0003 !important;
        opacity: 1 !important;
        visibility: visible !important;
      }

      #bruxinha-controle > #bruxinha-fechar:hover {
        background: #762b2b !important;
      }

      #bruxinha-som:focus-visible,
      #bruxinha-fechar:focus-visible {
        outline: 3px solid #d8a5ff !important;
        outline-offset: 3px !important;
      }

      /* TRAJETO DO VOO */

      @keyframes bruxinha-voo {
        0% {
          left: -300px;
          top: 18%;
          opacity: 0;
          transform: rotate(-8deg) scale(.8);
        }

        8% {
          opacity: 1;
        }

        25% {
          top: 27%;
          transform: rotate(5deg) scale(.95);
        }

        50% {
          top: 15%;
          transform: rotate(-4deg) scale(1);
        }

        75% {
          top: 29%;
          transform: rotate(5deg) scale(.95);
        }

        92% {
          opacity: 1;
        }

        100% {
          left: calc(100vw + 300px);
          top: 18%;
          opacity: 0;
          transform: rotate(-5deg) scale(.8);
        }
      }

      @keyframes bruxinha-balanco {
        from {
          transform: translateY(-5px) rotate(-5deg);
        }
        to {
          transform: translateY(5px) rotate(5deg);
        }
      }

      @keyframes bruxinha-magica {
        from {
          opacity: .45;
          transform: scale(.8) rotate(-10deg);
        }
        to {
          opacity: 1;
          transform: scale(1.2) rotate(10deg);
        }
      }

      @keyframes bruxinha-riso {
        from {
          transform: rotate(-8deg) scale(1);
        }
        to {
          transform: rotate(5deg) scale(1.08);
        }
      }

      /* CELULAR */

      @media (max-width: 600px) {
        #bruxinha-personagem {
          top: 22%;
        }

        .imagem-bruxinha {
          width: 68px;
        }

        .imagem-fumaca {
          width: 35px;
        }

        .bruxinha-vassoura {
          font-size: 34px;
        }

        .bruxinha-risada {
          top: -28px;
          left: 28px;
          font-size: 12px;
          padding: 5px 7px;
        }

        .bruxinha-fumaca {
          top: 45px;
        }

        #bruxinha-controle {
          right: 8px !important;
          bottom: 150px !important;
          max-width: calc(100vw - 16px) !important;
        }

        #bruxinha-botao-caixa {
          max-width: calc(100vw - 16px) !important;
        }

        #bruxinha-botao-caixa > #bruxinha-som {
          font-size: 12px !important;
          padding: 9px 11px !important;
        }

        #bruxinha-botao-caixa > #credito-bruxinha {
          font-size: 10px !important;
        }
      }

      /* ACESSIBILIDADE */

      @media (prefers-reduced-motion: reduce) {
        #bruxinha-personagem.voando {
          animation-duration: 1ms;
        }

        .bruxinha-emoji,
        .bruxinha-fumaca,
        .bruxinha-risada {
          animation: none;
        }
      }
    `;

    var estilo = document.createElement('style');
    estilo.id = ID_ESTILO;
    estilo.textContent = css;
    document.head.appendChild(estilo);

    /* =========================================
       CRIA O HTML AUTOMATICAMENTE
    ========================================= */

    var raiz = document.createElement('div');
    raiz.id = ID_RAIZ;
    raiz.setAttribute('aria-hidden', 'true');

    raiz.innerHTML = `
      <div id="bruxinha-personagem">

        <span class="bruxinha-fumaca">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/046/472/948/small/smoke-on-transparent-background-png.png"
            alt=""
            class="imagem-fumaca">
        </span>

        <span class="bruxinha-emoji">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDB6Oz_trJ96Oj7faqZd7hyphenhyphen_46pgFFOAOnuZTu01pCOyw2QRCKc4b4DmNvqzwsLEP7l6mr6Kanc4G76DYyr_fGljAsRucrAlizrBQPXeaXvKPooi-E2attdwD_8duEeZ4F7mXhTBbQ00vXz3zmvsWf8ksSxmGiMO2oLAmQuV7g8yDcNa3vnZIwBd41cFSG/s640/Bruxinha%20pequena.gif"
            alt="Bruxinha voando"
            class="imagem-bruxinha">
        </span>

        <span class="bruxinha-vassoura">
          <img
            src="https://www.imagensanimadas.com/data/media/196/morcego-imagem-animada-0096.gif"
            alt=""
            class="imagem-bruxinha">
        </span>

        <span class="bruxinha-risada">HA HA HA HA!</span>
      </div>
    `;

    document.body.appendChild(raiz);

    var audio = document.createElement('audio');
    audio.id = 'audio-risada-bruxa';
    audio.preload = 'none';

    var fonteAudio = document.createElement('source');
    fonteAudio.src =
      'https://cdn.pixabay.com/download/audio/2022/03/10/audio_6f422dd969.mp3';
    fonteAudio.type = 'audio/mpeg';
    audio.appendChild(fonteAudio);
    document.body.appendChild(audio);

    var controle = document.createElement('div');
    controle.id = 'bruxinha-controle';

    controle.innerHTML = `
      <div id="bruxinha-botao-caixa">
        <button
          id="bruxinha-som"
          type="button"
          aria-label="Ativar ou desativar a risada da bruxa">
          🔊 Ativar Risada!
        </button>

        <a
          id="credito-bruxinha"
          href="https://wa.me/5521979356412?text=Midian%20que%20quero%20essa%20bruxinha%20para%20o%20meu%20blog!"
          target="_blank"
          rel="noopener noreferrer"
          title="Efeito criado por Com Mãos de Seda">
          © Com Mãos de Seda
        </a>
      </div>

      <button
        id="bruxinha-fechar"
        type="button"
        aria-label="Suspender a bruxinha por 24 horas"
        title="Suspender por 24 horas">
        ✕
      </button>
    `;

    document.body.appendChild(controle);

    /* =========================================
       CONFIGURAÇÃO DO EFEITO
    ========================================= */

    var personagem = document.getElementById('bruxinha-personagem');
    var botao = document.getElementById('bruxinha-som');
    var fechar = document.getElementById('bruxinha-fechar');

    var somAtivado = false;
    var suspensa = false;
    var voandoAgora = false;

    var temporizador = null;
    var vooAtual = null;
    var vooInicial = null;
    var temporizadorSuspensao = null;

    function limparTemporizadores() {
      clearTimeout(temporizador);
      clearTimeout(vooAtual);
      clearTimeout(vooInicial);
      clearTimeout(temporizadorSuspensao);
    }

    function pararBruxinha() {
      clearTimeout(vooAtual);
      personagem.classList.remove('voando');
      voandoAgora = false;

      audio.pause();

      try {
        audio.currentTime = 0;
      } catch (e) {
        /* Ignora erros de áudio durante o carregamento. */
      }
    }

    function rir() {
      if (!somAtivado || suspensa) return;

      try {
        audio.currentTime = 0;
      } catch (e) {
        /* O áudio pode ainda estar carregando. */
      }

      var reproducao = audio.play();

      if (reproducao && typeof reproducao.catch === 'function') {
        reproducao.catch(function () {
          /* O navegador pode bloquear a reprodução do áudio. */
        });
      }
    }

    function agendarProximo() {
      clearTimeout(temporizador);

      if (suspensa) return;

      /* Próximo voo entre 35 e 55 segundos. */
      temporizador = setTimeout(function () {
        voar();
      }, 35000 + Math.random() * 20000);
    }

    function voar() {
      if (suspensa || voandoAgora) return;

      if (document.hidden) {
        agendarProximo();
        return;
      }

      voandoAgora = true;

      clearTimeout(vooAtual);

      personagem.classList.remove('voando');

      /* Reinicia a animação CSS. */
      void personagem.offsetWidth;

      personagem.classList.add('voando');

      rir();

      vooAtual = setTimeout(function () {
        personagem.classList.remove('voando');
        voandoAgora = false;
      }, 9200);

      agendarProximo();
    }

    /* =========================================
       BOTÃO DE ÁUDIO
    ========================================= */

    botao.addEventListener('click', function () {
      if (suspensa) return;

      somAtivado = !somAtivado;

      if (somAtivado) {
        botao.textContent = '🔊 Risada ativada';
        voar();
      } else {
        botao.textContent = '🔇 Ativar Risada!';
        audio.pause();

        try {
          audio.currentTime = 0;
        } catch (e) {
          /* Ignora erros de áudio. */
        }
      }
    });

    /* =========================================
       SUSPENSÃO POR 24 HORAS
       A SUSPENSÃO CONTINUA APÓS RECARREGAR A PÁGINA
    ========================================= */

    function esconderControle() {
      controle.style.setProperty('display', 'none', 'important');
    }

    function mostrarControle() {
      controle.style.removeProperty('display');
    }

    function suspenderPor24Horas() {
      suspensa = true;
      somAtivado = false;

      limparTemporizadores();
      pararBruxinha();

      botao.textContent = '🔊 Ativar Risada!';

      var expiraEm = Date.now() + DURACAO_SUSPENSAO;

      try {
        localStorage.setItem(CHAVE_SUSPENSAO, String(expiraEm));
      } catch (e) {
        /* A suspensão ainda funciona nesta página. */
      }

      esconderControle();
    }

    function verificarSuspensao() {
      var expiraEm = 0;

      try {
        expiraEm = Number(localStorage.getItem(CHAVE_SUSPENSAO)) || 0;
      } catch (e) {
        expiraEm = 0;
      }

      var restante = expiraEm - Date.now();

      if (restante > 0) {
        suspensa = true;
        esconderControle();

        temporizadorSuspensao = setTimeout(function () {
          encerrarSuspensao();
        }, restante);

        return true;
      }

      try {
        localStorage.removeItem(CHAVE_SUSPENSAO);
      } catch (e) {
        /* O efeito continua funcionando sem armazenamento local. */
      }

      return false;
    }

    function encerrarSuspensao() {
      clearTimeout(temporizadorSuspensao);

      suspensa = false;
      mostrarControle();

      try {
        localStorage.removeItem(CHAVE_SUSPENSAO);
      } catch (e) {
        /* Ignora falhas de armazenamento local. */
      }

      agendarProximo();
    }

    fechar.addEventListener('click', suspenderPor24Horas);

    /* INICIA A ANIMAÇÃO AUTOMÁTICA APÓS 5 SEGUNDOS */
    if (!verificarSuspensao()) {
      vooInicial = setTimeout(function () {
        voar();
      }, 5000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarBruxinha, {
      once: true
    });
  } else {
    iniciarBruxinha();
  }
})();

