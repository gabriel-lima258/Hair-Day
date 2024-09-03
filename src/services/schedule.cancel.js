import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento excluído com sucesso!")
  } catch (error) {
    console.error(error)
    alert("Nao foi possível cancelar!")
  }
}