import { hoursLoad } from '../form/hours-load.js';

// seleciona o input de data
const selectedDate = document.getElementById('date')

export function schedulesDay() {
  // obtém a data do input
  const date = selectedDate.value

  // busca na API os agendamentos 
  hoursLoad({ date })

}