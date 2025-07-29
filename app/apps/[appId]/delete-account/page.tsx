import Link from "next/link"
import { ArrowLeft, Code, Trash2, Mail, MessageCircle, Clock, AlertTriangle, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getAppById } from "@/lib/apps"
import { notFound } from "next/navigation"
import Image from "next/image"

interface PageProps {
  params: {
    appId: string
  }
}

export default function AppDeleteAccountPage({ params }: PageProps) {
  const app = getAppById(params.appId)

  if (!app) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <Code className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            CodevAI
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Inicio
          </Link>
          <Link href="/#apps" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Nuestras Apps
          </Link>
          <Link
            href={`/apps/${app.id}/privacy`}
            className="text-sm font-medium hover:text-primary-600 transition-colors"
          >
            Política de Privacidad
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>

            {/* App Header */}
            <div className="flex items-center gap-4 mb-6 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
              <Image
                src={app.icon || "/placeholder.svg"}
                alt={`${app.name} icon`}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">Eliminar tu Cuenta de {app.name}</h1>
                <p className="text-gray-600 mt-2">Guía paso a paso para eliminar permanentemente tu cuenta y datos</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Aviso Importante</AlertTitle>
            <AlertDescription className="text-red-700">
              Eliminar tu cuenta de {app.name} es permanente e irreversible. Todos tus datos, configuraciones y
              contenido serán eliminados permanentemente de nuestros servidores y no podrán ser recuperados.
            </AlertDescription>
          </Alert>

          {/* Methods Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Cómo Eliminar tu Cuenta</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* In-App Method */}
              <Card className="border-primary-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary-600" />
                    <CardTitle>Desde la App {app.name}</CardTitle>
                  </div>
                  <CardDescription>El método más rápido y directo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Abrir {app.name}</p>
                        <p className="text-sm text-gray-600">Asegúrate de haber iniciado sesión en tu cuenta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Ir a Ajustes</p>
                        <p className="text-sm text-gray-600">Busca el icono de engranaje o el menú "Ajustes"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Seleccionar "Cuenta y Privacidad"</p>
                        <p className="text-sm text-gray-600">Encuentra la sección de gestión de cuenta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Tocar "Eliminar Cuenta completa"</p>
                        <p className="text-sm text-gray-600">Normalmente ubicado en la parte inferior de la página</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Confirmar la eliminación</p>
                        <p className="text-sm text-gray-600">Lee las advertencias y confirma tu decisión</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Method */}
              <Card className="border-secondary-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Mail className="h-6 w-6 text-secondary-600" />
                    <CardTitle>Mediante Solicitud por Email</CardTitle>
                  </div>
                  <CardDescription>Si no puedes acceder a la app</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Enviar un email</p>
                        <p className="text-sm text-gray-600">A: {app.id}@codevai.cloud</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Asunto</p>
                        <p className="text-sm text-gray-600">"Solicitud de Eliminación de Cuenta de {app.name}"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Incluir información</p>
                        <p className="text-sm text-gray-600">
                          Email registrado, nombre de usuario, motivo de la eliminación
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Verificación de identidad</p>
                        <p className="text-sm text-gray-600">Responder a nuestras preguntas de seguridad</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Confirmación final</p>
                        <p className="text-sm text-gray-600">Confirmar tu solicitud por email</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Qué Datos se Eliminarán</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trash2 className="h-6 w-6 text-red-600" />
                  <CardTitle>Datos eliminados permanentemente de {app.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Información Personal</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Nombre e información de perfil</li>
                      <li>• Dirección de correo electrónico y detalles de contacto</li>
                      <li>• Historial de medicamentos y citas</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Datos Específicos de la App</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {app.category === "Health & Fitness" && (
                        <>
                          <li>• Métricas y mediciones de salud</li>
                        </>
                      )}
                      {app.category === "Productivity" && (
                        <>
                          <li>• Tareas y datos del proyecto</li>
                          <li>• Colaboraciones en equipo</li>
                          <li>• Registros de seguimiento del tiempo</li>
                          <li>• Archivos adjuntos de documentos</li>
                        </>
                      )}
                      {app.category === "Food & Drink" && (
                        <>
                          <li>• Recetas guardadas y favoritas</li>
                          <li>• Planes de comidas y listas de compras</li>
                          <li>• Preferencias dietéticas</li>
                          <li>• Calificaciones y reseñas de recetas</li>
                        </>
                      )}
                      {app.category === "Health & Wellness" && (
                        <>
                          <li>• Historial de sesiones de meditación</li>
                          <li>• Seguimiento del progreso de la atención plena</li>
                          <li>• Preferencias de meditación personalizadas</li>
                          <li>• Datos de sueño y relajación</li>
                        </>
                      )}
                      {app.category === "Finance" && (
                        <>
                          <li>• Historial de transacciones</li>
                          <li>• Datos de presupuesto y gastos</li>
                          <li>• Metas y objetivos financieros</li>
                          <li>• Recordatorios y alertas de facturas</li>
                        </>
                      )}
                      {app.category === "Education" && (
                        <>
                          <li>• Progreso y logros de aprendizaje</li>
                          <li>• Finalización de cursos y certificados</li>
                          <li>• Materiales y notas de estudio</li>
                          <li>• Datos de dominio del idioma</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Datos de Uso</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Estadísticas de uso de la aplicación</li>
                      <li>• Historial de interacción de funciones</li>
                      <li>• Datos del dispositivo y la ubicación</li>
                      <li>• Informes de fallos y registros de errores</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Características Sociales</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Perfiles creados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Cronograma de Eliminación</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <CardTitle>Proceso de eliminación de cuenta para {app.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                      0h
                    </div>
                    <div>
                      <h4 className="font-medium">Solicitud recibida</h4>
                      <p className="text-sm text-gray-600">
                        Tu cuenta se desactiva inmediatamente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-semibold">
                      5M
                    </div>
                    <div>
                      <h4 className="font-medium">Eliminacion de cuenta</h4>
                      <p className="text-sm text-gray-600">
                        Todo lo relacionado con tu cuenta se elimina de nuestros servidores.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* Support Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">¿Necesitas Ayuda?</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                  <CardTitle>Contacta con el Soporte de {app.name}</CardTitle>
                </div>
                <CardDescription>
                  Si tienes problemas con el proceso de eliminación o preguntas sobre tus datos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Información de contacto</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Email:</strong> {app.id}@codevai.cloud
                      </p>
                      <p>
                        <strong>Soporte General:</strong> support@codevai.cloud
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Información a incluir</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Email registrado con {app.name}</li>
                      <li>• Nombre de usuario</li>
                      <li>• Descripción del problema</li>
                      <li>• Capturas de pantalla (si corresponde)</li>
                      <li>• Versión del dispositivo y de la aplicación</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2024 CodevAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href={`/apps/${app.id}/privacy`} className="text-xs hover:text-primary-600 transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/privacy-policy" className="text-xs hover:text-primary-600 transition-colors">
            Privacidad General
          </Link>
          <Link href="/#contact" className="text-xs hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
