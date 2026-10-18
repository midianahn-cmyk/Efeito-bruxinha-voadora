
/* ==================================================
   BRUXINHA VOADORA — COM MÃOS DE SEDA
   Arquivo externo JavaScript
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda
================================================== */

(function () {
  'use strict';

  if (document.getElementById('bruxinha-blogger')) return;

  var iniciar = function () {
    if (document.getElementById('bruxinha-blogger')) return;

    var estilo = document.createElement('style');

    estilo.textContent = `
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

      #bruxinha-botao-caixa > #credito-bruxinha {
        position: static !important;
        display: block !important;
        width: 100% !important;
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

      @keyframes bruxinha-voo {
        0% {
          left: -300px;
          top: 18%;
          opacity: 0;
          transform: rotate(-8deg) scale(.8);
        }
        8% { opacity: 1; }
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
        92% { opacity: 1; }
        100% {
          left: calc(100vw + 300px);
          top: 18%;
          opacity: 0;
          transform: rotate(-5deg) scale(.8);
        }
      }

      @keyframes bruxinha-balanco {
        from { transform: translateY(-5px) rotate(-5deg); }
        to { transform: translateY(5px) rotate(5deg); }
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
        from { transform: rotate(-8deg) scale(1); }
        to { transform: rotate(5deg) scale(1.08); }
      }

      @media (max-width: 600px) {
        #bruxinha-personagem { top: 22%; }
        .imagem-bruxinha { width: 68px; }
        .imagem-fumaca { width: 35px; }
        .bruxinha-vassoura { width: 35px; }
        .bruxinha-risada {
          top: -28px;
          left: 28px;
          font-size: 12px;
          padding: 5px 7px;
        }
        .bruxinha-fumaca { top: 45px; }
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

    document.head.appendChild(estilo);

    var area = document.createElement('div');

    area.innerHTML = `
      <div aria-hidden="true" id="bruxinha-blogger">
        <div id="bruxinha-personagem">
          <span class="bruxinha-fumaca">
            <img alt="" class="imagem-fumaca"
              src="https://static.vecteezy.com/system/resources/thumbnails/046/472/948/small/smoke-on-transparent-background-png.png">
          </span>
          <span class="bruxinha-emoji">
            <img alt="Bruxinha voando" class="imagem-bruxinha"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVdZqXB4WQNxSMAUIy0_RA-eeAYkBlcg_f1fFkxoSOH6EmDDHu8xfmoD7UZQc71RhxLR-lkjNp85XHNOz4fpsk2TAAq5K3oB4VHaWSC1QmzLDJbhVh7R3fc96BeC84smcFl4d5B5bH4aq6YrQmBYJodF7HJ4C2M6vb034LzdFsBUe04p-ZskJdQwMaEjBJ/s497/Bruxinha%20pequena%20cabelo%20branco.gif">
          </span>
          <span class="bruxinha-vassoura">
            <img alt="" class="imagem-bruxinha"
              src="https://www.imagensanimadas.com/data/media/196/morcego-imagem-animada-0096.gif">
          </span>
          <span class="bruxinha-risada">HA HA HA HA!</span>
        </div>
      </div>

      <audio id="audio-risada-bruxa" preload="none">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_6f422dd969.mp3" type="audio/mpeg">
      </audio>

      <div id="bruxinha-controle">
        <div id="bruxinha-botao-caixa">
          <button aria-label="Ativar ou desativar a risada da bruxa"
            id="bruxinha-som" type="button">🔊 Ativar Risada!</button>
          <a href="https://wa.me/5521979356412?text=Midian%20que%20quero%20essa%20bruxinha%20para%20o%20meu%20blog!"
            id="credito-bruxinha" rel="noopener noreferrer" target="_blank"
            title="Efeito criado por Com Mãos de Seda">© Com Mãos de Seda</a>
        </div>
        <button aria-label="Suspender a bruxinha por 24 horas"
          id="bruxinha-fechar" title="Suspender por 24 horas" type="button">✕</button>
      </div>
    `;

    while (area.firstElementChild) {
      document.body.appendChild(area.firstElementChild);
    }

    var personagem = document.getElementById('bruxinha-personagem');
    var botao = document.getElementById('bruxinha-som');
    var audio = document.getElementById('audio-risada-bruxa');
    var controle = document.getElementById('bruxinha-controle');
    var fechar = document.getElementById('bruxinha-fechar');

    var chaveSuspensao = 'cms_bruxinha_suspensa_ate';
    var suspensaAte = 0;

    try {
      suspensaAte = Number(localStorage.getItem(chaveSuspensao)) || 0;
    } catch (e) {}

    if (suspensaAte > Date.now()) {
      controle.style.setProperty('display', 'none', 'important');
      return;
    }

    var somAtivado = false;
    var temporizador;
    var vooAtual;
    var voandoAgora = false;
    var suspensa = false;

    function pararBruxinha() {
      clearTimeout(temporizador);
      clearTimeout(vooAtual);
      personagem.classList.remove('voando');
      voandoAgora = false;
      audio.pause();
      audio.currentTime = 0;
    }

    function rir() {
      if (!somAtivado || suspensa) return;

      audio.currentTime = 0;
      var reproducao = audio.play();

      if (reproducao && reproducao.catch) {
        reproducao.catch(function () {});
      }
    }

    function agendarProximo() {
      clearTimeout(temporizador);
      if (suspensa) return;

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
      personagem.classList.remove('voando');
      void personagem.offsetWidth;
      personagem.classList.add('voando');

      rir();

      vooAtual = setTimeout(function () {
        personagem.classList.remove('voando');
        voandoAgora = false;
      }, 9200);

      agendarProximo();
    }

    botao.addEventListener('click', function () {
      if (suspensa) return;

      somAtivado = !somAtivado;

      if (somAtivado) {
        botao.textContent = '🔊 Risada ativada!';
        voar();
      } else {
        botao.textContent = '🔇 Ativar Risada!';
        audio.pause();
        audio.currentTime = 0;
      }
    });

    fechar.addEventListener('click', function () {
      suspensa = true;
      somAtivado = false;
      pararBruxinha();
      botao.textContent = '🔊 Ativar Risada!';

      try {
        localStorage.setItem(
          chaveSuspensao,
          String(Date.now() + 24 * 60 * 60 * 1000)
        );
      } catch (e) {}

      controle.style.setProperty('display', 'none', 'important');
    });

    setTimeout(function () {
      if (!suspensa) voar();
    }, 5000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
