import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // converte o json para string
      body: JSON.stringify({ id, name, when }),
    })

    alert('Agendamento feito com sucesso!')
  } catch (error) {
    console.error(error)
    alert("Nao foi possível fazer agendamento. Tente novamente!")
  }
}