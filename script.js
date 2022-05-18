
const inputs = document.querySelectorAll("input")

  const checkValidity = (input) => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault()
      if (!e.target.validity.valid) {
        e.target.parentElement.classList.add('error')
      }
    })

    input.addEventListener('input', (e) => {
      if (e.target.validity.valid) {
        e.target.parentElement.classList.remove('error')
      }
    })
  }

  Array.from(inputs).forEach(checkValidity);


