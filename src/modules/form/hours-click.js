export function hoursClick() {
  const hours = document.querySelectorAll('.hour-available')

  hours.forEach((available) => {
    available.addEventListener('click', (selected) => {
      // removendo a classe selected de todas li selecionadas
      hours.forEach((hour) => {
        hour.classList.remove('hour-selected');
      })

      // selecionando a li escolhida
      selected.target.classList.add('hour-selected');
    })
  })
}