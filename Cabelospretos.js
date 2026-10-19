
/*
==================================================
BRUXINHA VOADORA — JAVASCRIPT EXTERNO PARA SITES E BLOGS

Criadora: Com Mãos de Seda
Site oficial: https://www.commaosdesedaoficial.com

© 2026 Com Mãos de Seda. Todos os direitos reservados.

Este arquivo cria sozinho o HTML, CSS e controles do efeito.
==================================================
*/
(function () {
  'use strict';

  var ID_RAIZ = 'bruxinha-voadora-externa';

  var URL_FUMACA = 'https://static.vecteezy.com/system/resources/thumbnails/046/472/948/small/smoke-on-transparent-background-png.png';

  var URL_BRUXINHA = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDB6Oz_trJ96Oj7faqZd7hyphenhyphen_46pgFFOAOnuZTu01pCOyw2QRCKc4b4DmNvqzwsLEP7l6mr6Kanc4G76DYyr_fGljAsRucrAlizrBQPXeaXvKPooi-E2attdwD_8duEeZ4F7mXhTBbQ00vXz3zmvsWf8ksSxmGiMO2oLAmQuV7g8yDcNa3vnZIwBd41cFSG/s640/Bruxinha%20pequena.gif';

  var URL_MORCEGO = 'https://www.imagensanimadas.com/data/media/196/morcego-imagem-animada-0096.gif';

  var URL_AUDIO = 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_6f422dd969.mp3';

  var URL_CREDITO = 'https://wa.me/5521979356412?text=Midian%20que%20quero%20essa%20bruxinha%20para%20o%20meu%20blog!';

  var SUSPENSAO_MS = 24 * 60 * 60 * 1000;

  function criarElemento(tag, attrs, texto) {
    var el = document.createElement(tag);

    Object.keys(attrs || {}).forEach(function (chave) {
      if (chave === 'className') {
        el.className = attrs[chave];
      } else if (chave === 'textContent') {
        el.textContent = attrs[chave];
      } else {
        el.setAttribute(chave, attrs[chave]);
      }
    });

    if (texto != null) {
      el.textContent = texto;
    }

    return el;
  }

  function inserirEstilos() {
    if (document.getElementById('bruxinha-voadora-estilos')) {
      return;
    }

    var css = `
#${ID_RAIZ} {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 999990;
}

#${ID_RAIZ} .bruxinha-personagem {
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

#${ID_RAIZ} .bruxinha-personagem.voando {
  animation: bruxinha-voo-externo 9s linear forwards;
}

#${ID_RAIZ} .bruxinha-emoji {
  display: inline-block;
  line-height: 1;
  filter: drop-shadow(2px 5px 3px #555);
  animation: bruxinha-balanco-externo .3s ease-in-out infinite alternate;
}

#${ID_RAIZ} .imagem-bruxinha {
  display: block;
  width: 250px;
  height: auto;
  object-fit: contain;
}

#${ID_RAIZ} .imagem-fumaca {
  display: block;
  width: 200px;
  height: auto;
}

#${ID_RAIZ} .bruxinha-fumaca {
  position: absolute;
  left: -45px;
  top: 65px;
  animation: bruxinha-magica-externa .7s ease-in-out infinite alternate;
}

#${ID_RAIZ} .bruxinha-vassoura {
  display: inline-block;
  font-size: 48px;
  margin-left: -50px;
  transform: rotate(-15deg);
  width: 50px;
}

#${ID_RAIZ} .bruxinha-vassoura img {
  width: 50px;
  height: auto;
  display: block;
}

#${ID_RAIZ} .bruxinha-risada {
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
  animation: bruxinha-riso-externo .35s ease-in-out infinite alternate;
}

/* CONTROLE FIXO */

#bruxinha-controle-externo {
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

#bruxinha-botao-caixa-externa {
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

#bruxinha-som-externo {
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

#bruxinha-som-externo:hover {
  background: #4a2b62 !important;
}

/* CRÉDITO DENTRO DA CAIXA ROXA */

#credito-bruxinha-externo {
  position: static !important;
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

#credito-bruxinha-externo:hover {
  color: #fff !important;
  text-decoration: underline !important;
  opacity: 1 !important;
}

/* BOTÃO X */

#bruxinha-fechar-externo {
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

#bruxinha-fechar-externo:hover {
  background: #762b2b !important;
}

#bruxinha-som-externo:focus-visible,
#bruxinha-fechar-externo:focus-visible {
  outline: 3px solid #d8a5ff !important;
  outline-offset: 3px !important;
}

/* TRAJETO DO VOO */

@keyframes bruxinha-voo-externo {
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

/* BALANÇO */

@keyframes bruxinha-balanco-externo {
  from {
    transform: translateY(-5px) rotate(-5deg);
  }

  to {
    transform: translateY(5px) rotate(5deg);
  }
}

/* FUMAÇA MÁGICA */

@keyframes bruxinha-magica-externa {
  from {
    opacity: .45;
    transform: scale(.8) rotate(-10deg);
  }

  to {
    opacity: 1;
    transform: scale(1.2) rotate(10deg);
  }
}

/* GARGALHADA */

@keyframes bruxinha-riso-externo {
  from {
    transform: rotate(-8deg) scale(1);
  }

  to {
    transform: rotate(5deg) scale(1.08);
  }
}

/* CELULAR */

@media (max-width: 600px) {
  #${ID_RAIZ} .bruxinha-personagem {
    top: 22%;
  }

  #${ID_RAIZ} .imagem-bruxinha {
    width: 68px;
  }

  #${ID_RAIZ} .imagem-fumaca {
    width: 35px;
  }

  #${ID_RAIZ} .bruxinha-vassoura {
    font-size: 34px;
  }

  #${ID_RAIZ} .bruxinha-vassoura img {
    width: 34px;
  }

  #${ID_RAIZ} .bruxinha-risada {
    top: -28px;
    left: 28px;
    font-size: 12px;
    padding: 5px 7px;
  }

  #${ID_RAIZ} .bruxinha-fumaca {
    top: 45px;
  }

  #bruxinha-controle-externo {
    right: 8px !important;
    bottom: 150px !important;
    max-width: calc(100vw - 16px) !important;
  }

  #bruxinha-botao-caixa-externa {
    max-width: calc(100vw - 16px) !important;
  }

  #bruxinha-som-externo {
    font-size: 12px !important;
    padding: 9px 11px !important;
  }

  #credito-bruxinha-externo {
    font-size: 10px !important;
  }
}

/* ACESSIBILIDADE */

@media (prefers-reduced-motion: reduce) {
  #${ID_RAIZ} .bruxinha-personagem.voando {
    animation-duration: 1ms;
  }

  #${ID_RAIZ} .bruxinha-emoji,
  #${ID_RAIZ} .bruxinha-fumaca,
  #${ID_RAIZ} .bruxinha-risada {
    animation: none;
  }
}`;

    var style = document.createElement('style');
    style.id = 'bruxinha-voadora-estilos';
    style.textContent = css;

    (document.head || document.documentElement)
      .appendChild(style);
  }

  function iniciarBruxinha() {
    if (!document.body ||
        document.getElementById(ID_RAIZ)) {
      return;
    }

    inserirEstilos();

    /* ÁREA DA ANIMAÇÃO */

    var raiz = criarElemento('div', {
      id: ID_RAIZ,
      'aria-hidden': 'true'
    });

    var personagem = criarElemento('div', {
      className: 'bruxinha-personagem'
    });

    var fumaca = criarElemento('span', {
      className: 'bruxinha-fumaca'
    });

    fumaca.appendChild(criarElemento('img', {
      src: URL_FUMACA,
      alt: '',
      className: 'imagem-fumaca'
    }));

    var bruxinha = criarElemento('span', {
      className: 'bruxinha-emoji'
    });

    bruxinha.appendChild(criarElemento('img', {
      src: URL_BRUXINHA,
      alt: 'Bruxinha voando',
      className: 'imagem-bruxinha'
    }));

    var morcego = criarElemento('span', {
      className: 'bruxinha-vassoura'
    });

    morcego.appendChild(criarElemento('img', {
      src: URL_MORCEGO,
      alt: '',
      className: 'imagem-bruxinha'
    }));

    var risada = criarElemento(
      'span',
      { className: 'bruxinha-risada' },
      'HA HA HA HA!'
    );

    personagem.appendChild(fumaca);
    personagem.appendChild(bruxinha);
    personagem.appendChild(morcego);
    personagem.appendChild(risada);

    raiz.appendChild(personagem);
    document.body.appendChild(raiz);

    /* ÁUDIO */

    var audio = criarElemento('audio', {
      id: 'audio-risada-bruxa-externa',
      preload: 'none'
    });

    audio.appendChild(criarElemento('source', {
      src: URL_AUDIO,
      type: 'audio/mpeg'
    }));

    document.body.appendChild(audio);

    /* CONTROLES */

    var controle = criarElemento('div', {
      id: 'bruxinha-controle-externo'
    });

    var caixa = criarElemento('div', {
      id: 'bruxinha-botao-caixa-externa'
    });

    var botao = criarElemento('button', {
      id: 'bruxinha-som-externo',
      type: 'button',
      'aria-label': 'Ativar ou desativar a risada da bruxa',
      'aria-pressed': 'false'
    }, '🔊 Ativar Risada!');

    var credito = criarElemento('a', {
      id: 'credito-bruxinha-externo',
      href: URL_CREDITO,
      target: '_blank',
      rel: 'noopener noreferrer',
      title: 'Efeito criado por Com Mãos de Seda'
    }, '© Com Mãos de Seda');

    var fechar = criarElemento('button', {
      id: 'bruxinha-fechar-externo',
      type: 'button',
      'aria-label': 'Suspender a bruxinha por 24 horas',
      title: 'Suspender por 24 horas'
    }, '✕');

    caixa.appendChild(botao);
    caixa.appendChild(credito);
    controle.appendChild(caixa);
    controle.appendChild(fechar);
    document.body.appendChild(controle);

    /* VARIÁVEIS */

    var somAtivado = false;
    var temporizador = null;
    var vooAtual = null;
    var vooInicial = null;
    var temporizadorSuspensao = null;
    var voandoAgora = false;
    var suspensa = false;

    /* PARA O VOO E O ÁUDIO */

    function pararBruxinha() {
      clearTimeout(temporizador);
      clearTimeout(vooAtual);
      clearTimeout(vooInicial);

      personagem.classList.remove('voando');
      voandoAgora = false;

      audio.pause();

      try {
        audio.currentTime = 0;
      } catch (e) {}
    }

    /* GARGALHADA */

    function rir() {
      if (!somAtivado || suspensa) return;

      try {
        audio.currentTime = 0;
      } catch (e) {}

      var reproducao = audio.play();

      if (reproducao &&
          typeof reproducao.catch === 'function') {
        reproducao.catch(function () {
          /* O navegador pode bloquear o áudio. */
        });
      }
    }

    /* PRÓXIMO VOO */

    function agendarProximo() {
      clearTimeout(temporizador);

      if (suspensa) return;

      temporizador = setTimeout(
        voar,
        35000 + Math.random() * 20000
      );
    }

    /* FAZ A BRUXINHA VOAR */

    function voar() {
      if (suspensa) return;

      if (document.hidden) {
        agendarProximo();
        return;
      }

      if (voandoAgora) return;

      voandoAgora = true;

      clearTimeout(vooAtual);

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

    /* ATIVA E DESATIVA A RISADA */

    botao.addEventListener('click', function () {
      if (suspensa) return;

      somAtivado = !somAtivado;

      botao.setAttribute(
        'aria-pressed',
        somAtivado ? 'true' : 'false'
      );

      if (somAtivado) {
        botao.textContent = '🔊 Risada ativada';
        voar();
      } else {
        botao.textContent = '🔇 Ativar Risada!';

        audio.pause();

        try {
          audio.currentTime = 0;
        } catch (e) {}
      }
    });

    /* SUSPENDE POR 24 HORAS */

    fechar.addEventListener('click', function () {
      suspensa = true;
      somAtivado = false;

      botao.setAttribute('aria-pressed', 'false');

      pararBruxinha();

      botao.textContent = '🔊 Ativar Risada!';

      controle.style.setProperty(
        'display',
        'none',
        'important'
      );

      clearTimeout(temporizadorSuspensao);

      temporizadorSuspensao = setTimeout(function () {
        suspensa = false;

        controle.style.setProperty(
          'display',
          'block',
          'important'
        );

        agendarProximo();
      }, SUSPENSAO_MS);
    });

    /* PRIMEIRA APARIÇÃO AUTOMÁTICA */

    vooInicial = setTimeout(voar, 5000);
  }

  /* INICIALIZAÇÃO */

  function iniciarQuandoPronto() {
    if (document.readyState === 'loading') {
      document.addEventListener(
        'DOMContentLoaded',
        iniciarBruxinha,
        { once: true }
      );
    } else {
      iniciarBruxinha();
    }
  }

  iniciarQuandoPronto();

})();
