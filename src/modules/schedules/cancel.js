import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule.cancel.js"

// elementos de horas agendadas
const periods = document.querySelectorAll('.period')

// gera evento de click na lista manha, tarde e noite
periods.forEach((period) => {
  // captura o evento
  period.addEventListener('click', async (event) => {
    if (event.target.classList.contains('cancel-icon')) {
      // obtém item pai
      const item = event.target.closest('li')
      const { id } = item.dataset

      // confirma se deseja remover
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")

        if (isConfirm) {
          // faz a requisição na API para cancelar
          await scheduleCancel({ id })
          // faz o reload da page com os novos dados
          schedulesDay()
        }
      }
    }
  })
})