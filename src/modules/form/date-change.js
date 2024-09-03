import { schedulesDay } from "../schedules/load"

// input de data
const selectedDate = document.getElementById('date')

// recarrega a lista de hora quando o input de data mudar
selectedDate.onchange = () => schedulesDay()