import dayjs from "dayjs";

// seleciona as sessões manha, tarde e noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function scheduleShow({ dailySchedules }) {
  try {
    // limpa as listas antes de criar
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // renderiza os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // adiciona o id do agendamento
      item.setAttribute("data-id", schedule.id)

      // adiciona o nome e hora do agendamento
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent= schedule.name

      // cria icon de cancelar agendamento
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttribute('src', './src/assets/cancel.svg')
      cancelIcon.setAttribute('alt', 'Cancelar')


      // adiciona tempo, nome e icon no item
      item.append(time, name, cancelIcon)

      // pega somente a hora 
      const hour = dayjs(schedule.when).hour()

      // renderiza o agendamento organizado de manha, tarde e noite
      if (hour <= 12) {
        periodMorning.appendChild(item)
      }
      else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      }
      else {
        periodNight.appendChild(item)
      }

    })
  } catch (error) {
    console.error(error)
    alert("Nao foi possível fazer agendamento. Tente novamente!")
  }
}