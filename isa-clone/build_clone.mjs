import fs from "fs";

const pathIn = "c:/Users/PC/Documents/novodoly/fetched-mobile.html";
const pathOut = "c:/Users/PC/Documents/novodoly/isa-clone/index.html";

let s = fs.readFileSync(pathIn, "utf8");

s = s.replace(
  /<script>\s*\(function\(\)\{[^<]*window\.location\.href[^<]*\}\)\(\);\s*<\/script>\s*/s,
  ""
);

s = s.replace(
  /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Montserrat[^;]+;\s*@font-face[\s\S]*?:root/,
  "@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');\n:root"
);

s = s.replace(/<!-- Meta Pixel Code -->[\s\S]*?<!-- End Meta Pixel Code -->\s*/g, "");
s = s.replace(/<!-- Utmify \(se existir\) -->[\s\S]*?<!-- Analy Easy Code/g, "<!-- Analy Easy Code");

s = s.replace(
  'content="💔 Isa perdeu os movimentos depois de um acidente causado por um motorista alcoolizado e precisa de uma cadeira motorizada para voltar a viver" \n    <meta property="og:description"',
  'content="💔 Isa perdeu os movimentos depois de um acidente causado por um motorista alcoolizado e precisa de uma cadeira motorizada para voltar a viver" />\n    <meta property="og:description"'
);

const h1Fix = `<h1>💔 Isa perdeu os movimentos depois de um acidente causado por um motorista alcoolizado e precisa de uma cadeira motorizada para voltar a viver</h1>
                <span class="d-block text-center mt-1" style="font-size:14px;color:#404040;">ID: ywj6xhxyu2</span>
            </div>`;

s = s.replace(
  `<h1> 💔 Isa perdeu os movimentos depois de um acidente causado por um motorista alcoolizado e precisa de uma cadeira motorizada para voltar a viver
                <!-- ID (se desejar exibir $page->id, aqui é apenas exemplo) -->
                <span>ID: ywj6xhxyu2</span>
            </div>`,
  h1Fix
);

const STORY = `<div class="show-sobre">
                        <span class="inicio"><strong>Vaquinha criada em:</strong> 20/11/2025</span>
                        <div class="historia-isa" style="font-family: Arial, sans-serif; color: #222; line-height: 1.7; max-width: 800px; margin: auto; padding: 20px 0; background-color: #fff;">
  <h2 style="color:#c62828; font-size: 22px; font-weight: bold; text-align:center; margin-top:0;">Ajude a Isa</h2>

  <h2 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">💔 ENTENDA A HISTÓRIA DA ISA</h2>
  <p><strong>Isa era uma criança saudável que andava, brincava e vivia normalmente.</strong></p>
  <p>Mas tudo mudou depois de um acidente causado por um motorista alcoolizado.</p>
  <p>Desde então, Isa não consegue mais se movimentar sozinha.</p>
  <p>Hoje ela depende de ajuda para quase tudo.</p>
  <p><strong>E o que mais dói é ouvir a própria filha perguntar:</strong></p>
  <p>“Mãe… quando eu vou voltar a andar?”</p>
  <p>E infelizmente a mãe ainda não tem essa resposta.</p>

  <h2 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">💔 UM SONHO SIMPLES: VOLTAR A TER AUTONOMIA</h2>
  <p>Isa sente falta de brincar.</p>
  <p>Sente falta de ir para a escola.</p>
  <p>Sente falta de fazer coisas simples sozinha.</p>
  <p>Mas existe uma esperança real:</p>
  <p><strong>uma cadeira de rodas motorizada especial pode devolver parte da independência dela.</strong></p>
  <p>Com essa cadeira, Isa poderá voltar a estudar, brincar e se movimentar novamente.</p>

  <h2 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">⚠️ MAS O VALOR É MUITO ALTO</h2>
  <p>A cadeira indicada para o caso da Isa é especial e adaptada para sua condição.</p>
  <p>Ela custa aproximadamente:</p>
  <p><strong>💰 R$ 500.000</strong></p>
  <p>Um valor impossível para a família conseguir sozinha.</p>
  <p>Mesmo assim, a mãe não desistiu.</p>
  <p>Ela continua lutando todos os dias para devolver dignidade à filha.</p>

  <h2 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">🙏 AGORA A ISA PRECISA DA NOSSA AJUDA</h2>
  <p>Essa cadeira não é luxo.</p>
  <p>É a chance da Isa voltar a ter autonomia.</p>
  <p>É a chance dela voltar a estudar.</p>
  <p>É a chance dela voltar a brincar.</p>
  <p><strong>É a chance dela voltar a viver como criança novamente.</strong></p>
  <p>Por isso estamos fazendo esse pedido com o coração:</p>
  <p>🙏 Se você puder ajudar, qualquer valor faz diferença.</p>
  <p>Compartilhar também ajuda muito.</p>

  <h2 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">📊 COMO ESSA META PODE SER ALCANÇADA</h2>
  <p>Quando muitas pessoas ajudam um pouco, algo impossível começa a acontecer:</p>
  <ul>
    <li>5.000 pessoas doando <strong>R$100</strong></li>
    <li>8.000 pessoas doando <strong>R$50</strong></li>
    <li>15.000 pessoas doando <strong>R$25</strong></li>
  </ul>
  <p>Assim conseguimos aproximar Isa da cadeira que pode transformar sua vida.</p>

  <h2 style="font-size: 1.1rem; font-weight: 700; margin: 1.25rem 0 0.75rem;">❤️ UM PEDIDO DE MÃE</h2>
  <p>Isa só quer voltar a ter autonomia para viver como criança novamente.</p>
  <p>E isso pode acontecer com a ajuda de pessoas como você.</p>
  <p><strong>Ajude Isa a recuperar parte da independência que ela perdeu.</strong></p>
  <p>🙏 Obrigado por fazer parte dessa corrente de esperança.</p>
</div>

<br>

                       <button
  type="button"
  class="btn btn-success"
  style="background-color: #24CA68 !important; width: 100% !important; display: block;"
  onclick="openDonateModal()"
>
  <b>Quero Ajudar</b>
</button>

                    </div>`;

s = s.replace(/<div class="show-sobre">[\s\S]*?<b>Quero Ajudar<\/b>\s*<\/button>\s*\n\s*<\/div>/, STORY);

// Remove duplicate modal block (second id=donateModal)
s = s.replace(
  /\s*<!-- MODAL PARA DOAR -->\s*<div class="modal modal-doar" id="donateModal" style="display:none[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/,
  "\n"
);

s = s.replace(
  '<p style="margin-bottom:1rem; font-size:0.9rem; color:#555;">&lt;p&gt;&lt;br&gt;&lt;/p&gt;</p>',
  '<p style="margin-bottom:1rem; font-size:0.9rem; color:#555;"></p>'
);

fs.writeFileSync(pathOut, s, "utf8");
console.log("OK", s.length);
