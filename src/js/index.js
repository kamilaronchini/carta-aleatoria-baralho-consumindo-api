const botao = document.getElementById('button')
const cartaMostrada = document.getElementById('deck-card')
const nomeCartaMostrada = document.getElementById('number')
const naipeCartaMostrada = document.getElementById('card-suit')


botao.addEventListener('click', () => {
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById("deck-card").src = imagemCarta

    const numeroCarta = `Esta carta é ${carta.cards[0].value}`
    nomeCartaMostrada.innerHTML = numeroCarta

    const naipeCarta = `de ${carta.cards[0].suit}`
    naipeCartaMostrada.innerHTML = naipeCarta
}

tirarUmaCartaAleatoriaDoBaralho()
