function gerarNumerosAleatoriosUnicos(inicio, fim) {
  const numeros = []

  for (let i = 0; numeros.length < 4; i++) {
    const numero = Math.floor(Math.random() * (fim - inicio + 1)) + inicio

    if (!numeros.includes(numero)) {
      numeros.push(numero)
    }
  }

  return numeros
}

function generateOtherPhotos() {
  const randomNumbers = gerarNumerosAleatoriosUnicos(1, 4)
  let index = 0
  const $PHOTOBOXES = document.querySelectorAll(".photo-box")
  $PHOTOBOXES.forEach((photoBox) => {
    let img = document.createElement("img")
    img.src = `image-${randomNumbers[index]}.png`
    photoBox.appendChild(img)
    index++
  })
}

generateOtherPhotos()
