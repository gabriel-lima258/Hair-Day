import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
  try {
    // faz requisição para buscar o schedule
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // converte para arquivo json
    const data = await response.json()

    // filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, 'day')
    )

    return dailySchedules

  } catch (error) {
c
  }
}