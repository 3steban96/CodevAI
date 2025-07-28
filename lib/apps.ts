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
    id: "fitness-tracker",
    name: "FitTrack Pro",
    description: "Complete fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
    category: "Health & Fitness",
    icon: "/placeholder.svg?height=80&width=80&text=FT",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.codevai.fittrack",
    features: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Social Features"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=FitTrack+Screen+1",
      "/placeholder.svg?height=600&width=300&text=FitTrack+Screen+2",
      "/placeholder.svg?height=600&width=300&text=FitTrack+Screen+3",
    ],
  },
  {
    id: "task-manager",
    name: "TaskFlow",
    description: "Intuitive task management app with team collaboration, project tracking, and deadline reminders.",
    category: "Productivity",
    icon: "/placeholder.svg?height=80&width=80&text=TF",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.codevai.taskflow",
    features: ["Team Collaboration", "Project Tracking", "Deadline Reminders", "Time Tracking"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=TaskFlow+Screen+1",
      "/placeholder.svg?height=600&width=300&text=TaskFlow+Screen+2",
      "/placeholder.svg?height=600&width=300&text=TaskFlow+Screen+3",
    ],
  },
  {
    id: "recipe-finder",
    name: "ChefMate",
    description:
      "Discover recipes based on ingredients you have, with step-by-step cooking instructions and meal planning.",
    category: "Food & Drink",
    icon: "/placeholder.svg?height=80&width=80&text=CM",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.codevai.chefmate",
    features: ["Recipe Discovery", "Ingredient Scanner", "Meal Planning", "Shopping Lists"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=ChefMate+Screen+1",
      "/placeholder.svg?height=600&width=300&text=ChefMate+Screen+2",
      "/placeholder.svg?height=600&width=300&text=ChefMate+Screen+3",
    ],
  },
  {
    id: "meditation-app",
    name: "MindfulSpace",
    description: "Meditation and mindfulness app with guided sessions, breathing exercises, and sleep stories.",
    category: "Health & Wellness",
    icon: "/placeholder.svg?height=80&width=80&text=MS",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.codevai.mindfulspace",
    features: ["Guided Meditations", "Breathing Exercises", "Sleep Stories", "Progress Tracking"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=MindfulSpace+Screen+1",
      "/placeholder.svg?height=600&width=300&text=MindfulSpace+Screen+2",
      "/placeholder.svg?height=600&width=300&text=MindfulSpace+Screen+3",
    ],
  },
  {
    id: "expense-tracker",
    name: "MoneyWise",
    description: "Smart expense tracking with budget management, bill reminders, and financial insights.",
    category: "Finance",
    icon: "/placeholder.svg?height=80&width=80&text=MW",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.codevai.moneywise",
    features: ["Expense Tracking", "Budget Management", "Bill Reminders", "Financial Reports"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=MoneyWise+Screen+1",
      "/placeholder.svg?height=600&width=300&text=MoneyWise+Screen+2",
      "/placeholder.svg?height=600&width=300&text=MoneyWise+Screen+3",
    ],
  },
  {
    id: "language-learning",
    name: "LinguaLearn",
    description:
      "Interactive language learning with AI-powered conversations, vocabulary games, and progress tracking.",
    category: "Education",
    icon: "/placeholder.svg?height=80&width=80&text=LL",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.codevai.linguallearn",
    features: ["AI Conversations", "Vocabulary Games", "Progress Tracking", "Offline Mode"],
    screenshots: [
      "/placeholder.svg?height=600&width=300&text=LinguaLearn+Screen+1",
      "/placeholder.svg?height=600&width=300&text=LinguaLearn+Screen+2",
      "/placeholder.svg?height=600&width=300&text=LinguaLearn+Screen+3",
    ],
  },
]

export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id)
}
