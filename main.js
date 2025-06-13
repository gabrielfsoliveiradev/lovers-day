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
  const randomNumbers = gerarNumerosAleatoriosUnicos(1, 55)
  let index = 0
  const $PHOTOBOXES = document.querySelectorAll(".photo-box")
  $PHOTOBOXES.forEach((photoBox) => {
    if (photoBox.hasChildNodes())
      photoBox.removeChild(photoBox.querySelector("img"))
    let img = document.createElement("img")
    img.src = `img/image-${randomNumbers[index]}.jpg`
    photoBox.appendChild(img)
    index++
  })
}

const button = document.querySelector('#button')
button.addEventListener("click", generateOtherPhotos)

generateOtherPhotos()
