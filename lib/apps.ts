export interface App {
  id: string
  name: string
  description: string
  category: string
  icon: string
  downloadUrl: string
  features: string[]
  screenshots: string[]
}

export const apps: App[] = [
  {
    id: "agendVital",
    name: "AgendVital",
    description: "Una aplicación para gestionar tu agenda de salud y bienestar apoyada con IA.",
    category: "Health & Fitness",
    icon: "/icon.png",
    downloadUrl: "Proximamente disponible",
    features: ["Salud", "Agendamiento de citas", "Alerta de medicamentos"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=FitTrack+Screen+1",
      "/placeholder.svg?height=600&width=300&text=FitTrack+Screen+2",
      "/placeholder.svg?height=600&width=300&text=FitTrack+Screen+3",
    ],
  }
]

export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id)
}
