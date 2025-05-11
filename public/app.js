

const destinos = [
    {
      titulo: "Copacabana",
      descricaoCurta: "Descubra a famosa praia de Copacabana com opções de lazer, cultura e gastronomia.",
      descricaoLonga: `Copacabana é uma das praias mais icônicas do mundo, conhecida por seu calçadão em ondulações de pedra portuguesa, quiosques e vida noturna vibrante.`,
      imagens: [
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/100/80?random=11",
        "https://picsum.photos/100/80?random=12",
        "https://picsum.photos/100/80?random=13",
        "https://picsum.photos/100/80?random=14",
        "https://picsum.photos/100/80?random=15",
        "https://picsum.photos/100/80?random=16"
      ]
    },
    {
      titulo: "Cristo Redentor",
      descricaoCurta: "Visite o Cristo Redentor, uma das sete maravilhas do mundo moderno.",
      descricaoLonga: `O Cristo Redentor é a estátua monumental de Jesus Cristo no topo do Corcovado, com vista panorâmica incrível do Rio de Janeiro.`,
      imagens: [
        "https://picsum.photos/600/400?random=2",
        "https://picsum.photos/100/80?random=21",
        "https://picsum.photos/100/80?random=22",
        "https://picsum.photos/100/80?random=23",
        "https://picsum.photos/100/80?random=24",
        "https://picsum.photos/100/80?random=25",
        "https://picsum.photos/100/80?random=26"
      ]
    },
    {
      titulo: "Pão de Açúcar",
      descricaoCurta: "Aprecie uma das vistas mais impressionantes do Rio de Janeiro.",
      descricaoLonga: `O bondinho do Pão de Açúcar liga a Praia Vermelha ao Morro da Urca e ao Pão de Açúcar, oferecendo vistas espetaculares da Baía de Guanabara.`,
      imagens: [
        "https://picsum.photos/600/400?random=3",
        "https://picsum.photos/100/80?random=31",
        "https://picsum.photos/100/80?random=32",
        "https://picsum.photos/100/80?random=33",
        "https://picsum.photos/100/80?random=34",
        "https://picsum.photos/100/80?random=35",
        "https://picsum.photos/100/80?random=36"
      ]
    },
    {
      titulo: "Floresta da Tijuca",
      descricaoCurta: "Explore a maior floresta urbana do mundo com trilhas incríveis e cachoeiras.",
      descricaoLonga: `A Floresta da Tijuca abriga diversas trilhas, mirantes e quedas d’água, sendo refúgio para quem busca natureza e ar puro.`,
      imagens: [
        "https://picsum.photos/600/400?random=4",
        "https://picsum.photos/100/80?random=41",
        "https://picsum.photos/100/80?random=42",
        "https://picsum.photos/100/80?random=43",
        "https://picsum.photos/100/80?random=44",
        "https://picsum.photos/100/80?random=45",
        "https://picsum.photos/100/80?random=46"
      ]
    },
    {
      titulo: "Praia de Ipanema",
      descricaoCurta: "Aproveite o pôr do sol mais famoso do Brasil em Ipanema.",
      descricaoLonga: `Ipanema ficou conhecida pela bossa nova e pelo pôr do sol na Pedra do Arpoador, com quiosques e mar cristalino.`,
      imagens: [
        "https://picsum.photos/600/400?random=5",
        "https://picsum.photos/100/80?random=51",
        "https://picsum.photos/100/80?random=52",
        "https://picsum.photos/100/80?random=53",
        "https://picsum.photos/100/80?random=54",
        "https://picsum.photos/100/80?random=55",
        "https://picsum.photos/100/80?random=56"
      ]
    },
    {
      titulo: "Escadaria Selarón",
      descricaoCurta: "Conheça a icônica escadaria artística no coração do Rio.",
      descricaoLonga: `A Escadaria Selarón, obra de Jorge Selarón, é revestida com azulejos coloridos vindos de todo o mundo.`,
      imagens: [
        "https://picsum.photos/600/400?random=6",
        "https://picsum.photos/100/80?random=61",
        "https://picsum.photos/100/80?random=62",
        "https://picsum.photos/100/80?random=63",
        "https://picsum.photos/100/80?random=64",
        "https://picsum.photos/100/80?random=65",
        "https://picsum.photos/100/80?random=66"
      ]
    }
  ];
  
  function montarCards() {
    const container = document.getElementById("cards-container");
    destinos.forEach((destino, idx) => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="card card-custom d-flex flex-column p-3 h-100">
          <img src="${destino.imagens[0]}" class="img-fluid rounded" alt="${destino.titulo}">
          <h3 class="mt-3">${destino.titulo}</h3>
          <p class="flex-grow-1 text-start">${destino.descricaoCurta}</p>
          <a href="detalhes.html?id=${idx}" class="btn btn-light mt-auto">Ver mais</a>
        </div>
      `;
      container.appendChild(col);
    });
  }
  
  function carregarDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id === null || !destinos[id]) return;
  
    const destino = destinos[id];
    document.getElementById("titulo").textContent = destino.titulo;
    document.getElementById("descricao").textContent = destino.descricaoLonga;
  
    const imgGrande = document.querySelector(".alinhamento");
    imgGrande.src = destino.imagens[0];
    imgGrande.alt = destino.titulo;
  
    const thumbs = document.getElementById("thumbs-container");
    thumbs.innerHTML = "";
    destino.imagens.slice(1).forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "thumb-small";
      img.addEventListener("click", () => imgGrande.src = src);
      thumbs.appendChild(img);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("cards-container")) montarCards();
    if (document.getElementById("titulo")) carregarDetalhes();
  });
  