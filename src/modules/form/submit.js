import dayjs from "dayjs";

const form = document.querySelector('form');
const clientName= document.getElementById('client');
const selectedDate= document.getElementById('date');

// Data atual para input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

// Carrega a data atual e a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
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

    // recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")
    
    // insere a hora com a data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // gera um id
    const id = new Date().getTime()

    console.log({
      id,
      name,
      when,
    })
  } catch (error) {
    alert("Nao foi possível realizar agendamento.")
    console.log(error)
  }
}