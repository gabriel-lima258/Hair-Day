import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector('form');
const clientName= document.getElementById('client');
const selectedDate= document.getElementById('date');

// Data atual para input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // recuperando o nome do cliente
    const name = clientName.value.trim()

    if(!name) {
      return alert("Informe o nome do cliente!")
    }

    // recupera o horário selecionado
    const hourSelected = document.querySelector('.hour-selected')

    if (!hourSelected) {
      return alert("Selecione a hora");
    }

    // recupera somente a hora, cortando o :00  
    const [hour] = hourSelected.innerText.split(":")
    
    // insere a hora com a data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // gera um id
    const id = new Date().getTime()

    // chamando a API e passando os argumentos para o objeto
    await scheduleNew({
      id,
      name,
      when,
    })

    // recarrega os agendamentos caso reload a page
    await schedulesDay()

    // limpa o nome do cliente depois de marcar agendamento
    clientName.value = ""

  } catch (error) {
    alert("Nao foi possível realizar agendamento.")
    console.log(error)
  }
}