import dayjs from 'dayjs'
import {openingHours} from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

const hours = document.getElementById('hours')

export function hoursLoad({ date, dailySchedules }) {
  // limpa a lista de horários 
  hours.innerHTML = ""

  // recupera a lista de horários ja ocupados
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm")
  )
  
  const opening = openingHours.map((hour) => {
    // recupera somente a hora com desestruturação
    const [scheduleHour, _] = hour.split(':')
  
    // adiciona a hora na date e verifica se existe horário disponível
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

    // verifica se ja existe este horário marcado ou se ja passou este horário
    const available = !unavailableHours.includes(hour) && !isHourPast

    // define se o horário esta disponível
    return {
      hour,
      available,
    }
  })

  // renderiza os horários criando a lista html de horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement('li')

    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')

    li.textContent = hour 

    // verificando o período do horário
    if (hour === '9:00') {
      hourHeaderAdd("Manhã")
    }
    else if (hour === '13:00') {
      hourHeaderAdd("Tarde")
    }
    else if (hour === '18:00') {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  // adiciona o evento de click
  hoursClick()
}

// função para carregar o período e criar html
function hourHeaderAdd(title) {
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}

