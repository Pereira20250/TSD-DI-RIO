
// 📖 VERSÍCULO DO DIA
const versos = [
  ["Entrega o teu caminho ao Senhor", "Salmos 37:5"],
  ["Buscai primeiro o Reino de Deus", "Mateus 6:33"],
  ["O Senhor é meu pastor; nada me faltará", "Salmos 23:1"],
  ["Clama a mim e responder-te-ei", "Jeremias 33:3"],
  ["Aquietai-vos e sabei que eu sou Deus", "Salmos 46:10"],
  ["Confia no Senhor de todo o teu coração", "Provérbios 3:5"],
  ["Lâmpada para os meus pés é a tua palavra", "Salmos 119:105"],
  ["O choro pode durar uma noite, mas a alegria vem pela manhã", "Salmos 30:5"],
  ["Tudo posso naquele que me fortalece", "Filipenses 4:13"],
  ["O Senhor é bom, uma fortaleza no dia da angústia", "Naum 1:7"],
  ["Perto está o Senhor dos que têm o coração quebrantado", "Salmos 34:18"],
  ["O Senhor te abençoe e te guarde", "Números 6:24"],
  ["Não temas, porque eu sou contigo", "Isaías 41:10"],
  ["Bem-aventurados os que têm fome e sede de justiça", "Mateus 5:6"],
  ["Vinde a mim todos os que estais cansados", "Mateus 11:28"],
  ["O Senhor pelejará por vós; ficai tranquilos", "Êxodo 14:14"],
  ["Ensina-me o teu caminho, Senhor", "Salmos 27:11"],
  ["O coração do homem planeja o seu caminho", "Provérbios 16:9"],
  ["Se Deus é por nós, quem será contra nós?", "Romanos 8:31"],
  ["A paz de Deus excede todo entendimento", "Filipenses 4:7"],
  ["O Senhor é a minha luz e a minha salvação", "Salmos 27:1"],
  ["Cria em mim um coração puro, ó Deus", "Salmos 51:10"],
  ["Esperei com paciência no Senhor", "Salmos 40:1"],
  ["O Senhor firma os passos do homem bom", "Salmos 37:23"],
  ["Bem-aventurado o homem que confia no Senhor", "Jeremias 17:7"],
  ["Deleita-te também no Senhor", "Salmos 37:4"],
  ["O amor tudo sofre, tudo crê, tudo espera", "1 Coríntios 13:7"],
  ["Aquele que habita no esconderijo do Altíssimo", "Salmos 91:1"],
  ["O Senhor é misericordioso e compassivo", "Salmos 103:8"],
  ["Santifica-os na verdade; a tua palavra é a verdade", "João 17:17"],
  ["Conhecereis a verdade, e a verdade vos libertará", "João 8:32"],
  ["Eu sou o caminho, a verdade e a vida", "João 14:6"],
  ["O Senhor é fiel em todas as suas palavras", "Salmos 145:13"],
  ["Tudo tem o seu tempo determinado", "Eclesiastes 3:1"],
  ["Não andeis ansiosos por coisa alguma", "Filipenses 4:6"],
  ["O Senhor renova as forças dos que esperam nele", "Isaías 40:31"],
  ["O Senhor é refúgio e fortaleza", "Salmos 91:2"],
  ["Guia-me na tua verdade e ensina-me", "Salmos 25:5"],
  ["Fiel é Deus, que não permitirá que sejais tentados", "1 Coríntios 10:13"],
  ["O Senhor cumpre todos os seus propósitos", "Provérbios 19:21"],
  ["Deus é o nosso refúgio e fortaleza", "Salmos 46:1"],
  ["O Senhor faz tudo cooperar para o bem", "Romanos 8:28"],
  ["A minha graça te basta", "2 Coríntios 12:9"],
  ["Bem-aventurados os puros de coração", "Mateus 5:8"],
  ["O Senhor está perto de todos os que o invocam", "Salmos 145:18"],
  ["Sede fortes e corajosos", "Josué 1:9"]
];
const v = versos[Math.floor(Math.random() * versos.length)];
versiculo.innerText = v[0];
referencia.innerText = v[1];

// 🌙 TEMA
function toggleTheme(){
  document.body.classList.toggle("light");
}

// 💾 SALVAR TSD
function saveTSD(){
  const data = {
    date: new Date().toLocaleDateString(),
    oracao: oracao.value,
    louvor: louvor.value,
    palavra: palavra.value,
    agradecimento: agradecimento.value,
    voz: voz.value,
    fala: fala.value
  };

  const list = JSON.parse(localStorage.tsd || "[]");
  list.unshift(data);
  localStorage.tsd = JSON.stringify(list);

  loadHistory();
}

// 📜 HISTÓRICO
function loadHistory(){
  history.innerHTML = "";
  (JSON.parse(localStorage.tsd || "[]")).forEach(i => {
    history.innerHTML += `
      <div class="entry">
        <b>${i.date}</b><br>
        🛐 ${i.oracao}<br>
        🎵 ${i.louvor}<br>
        📖 ${i.palavra}<br>
        🙏 ${i.agradecimento}<br>
        👂 ${i.voz}<br>
        🕊️ ${i.fala}
      </div>`;
  });
}
loadHistory();

// 📤 PDF
function exportPDF(){
  window.print();
}

// 🔔 LEMBRETE
function saveReminder(){
  alert("⏰ Lembrete salvo (visual)");
}