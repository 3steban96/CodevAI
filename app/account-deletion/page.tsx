import Link from "next/link"
import { ArrowLeft, Smartphone, Trash2, Mail, MessageCircle, Clock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AccountDeletionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Smartphone className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">AppCraft Studio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cómo Eliminar Tu Cuenta</h1>
            <p className="mt-4 text-muted-foreground">
              Guía paso a paso para eliminar permanentemente tu cuenta y datos de nuestras aplicaciones móviles
            </p>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              La eliminación de tu cuenta es permanente e irreversible. Todos tus datos, configuraciones y contenido
              serán eliminados de nuestros servidores y no podrán ser recuperados.
            </AlertDescription>
          </Alert>

          {/* Methods Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Métodos de Eliminación</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* In-App Method */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <CardTitle>Desde la Aplicación</CardTitle>
                  </div>
                  <CardDescription>El método más rápido y directo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Abre la aplicación</p>
                        <p className="text-sm text-muted-foreground">Inicia sesión en tu cuenta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Ve a Configuración</p>
                        <p className="text-sm text-muted-foreground">Busca el ícono de engranaje o "Settings"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Selecciona "Cuenta"</p>
                        <p className="text-sm text-muted-foreground">Encuentra la sección de gestión de cuenta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Toca "Eliminar Cuenta"</p>
                        <p className="text-sm text-muted-foreground">Generalmente está al final de la página</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Confirma la eliminación</p>
                        <p className="text-sm text-muted-foreground">Lee las advertencias y confirma tu decisión</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Method */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Mail className="h-6 w-6 text-primary" />
                    <CardTitle>Por Correo Electrónico</CardTitle>
                  </div>
                  <CardDescription>Si no puedes acceder a la aplicación</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Envía un correo</p>
                        <p className="text-sm text-muted-foreground">A: support@appcraftstudio.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Asunto del correo</p>
                        <p className="text-sm text-muted-foreground">"Solicitud de eliminación de cuenta"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Incluye información</p>
                        <p className="text-sm text-muted-foreground">Email registrado, nombre de usuario, motivo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Verificación de identidad</p>
                        <p className="text-sm text-muted-foreground">Responde a nuestras preguntas de seguridad</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-semibold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Confirmación final</p>
                        <p className="text-sm text-muted-foreground">Confirma tu solicitud por email</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">¿Qué se elimina?</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trash2 className="h-6 w-6 text-destructive" />
                  <CardTitle>Datos que se eliminan permanentemente</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Información personal</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Nombre y apellidos</li>
                      <li>• Dirección de correo electrónico</li>
                      <li>• Número de teléfono</li>
                      <li>• Foto de perfil</li>
                      <li>• Fecha de nacimiento</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Contenido y actividad</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Publicaciones y comentarios</li>
                      <li>• Fotos y videos subidos</li>
                      <li>• Mensajes privados</li>
                      <li>• Configuraciones personalizadas</li>
                      <li>• Historial de actividad</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Datos de uso</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Estadísticas de uso</li>
                      <li>• Preferencias de la app</li>
                      <li>• Datos de ubicación</li>
                      <li>• Información del dispositivo</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Conexiones sociales</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Lista de contactos</li>
                      <li>• Conexiones con redes sociales</li>
                      <li>• Grupos y comunidades</li>
                      <li>• Suscripciones y seguimientos</li>
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
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle>Proceso de eliminación</CardTitle>
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
                      <p className="text-sm text-muted-foreground">
                        Tu cuenta se desactiva inmediatamente y ya no es visible para otros usuarios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                      24h
                    </div>
                    <div>
                      <h4 className="font-medium">Período de gracia</h4>
                      <p className="text-sm text-muted-foreground">
                        Tienes 24 horas para cancelar la eliminación si cambias de opinión
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-semibold">
                      7d
                    </div>
                    <div>
                      <h4 className="font-medium">Eliminación de datos principales</h4>
                      <p className="text-sm text-muted-foreground">
                        Se eliminan todos los datos personales y contenido de nuestros servidores principales
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-semibold">
                      30d
                    </div>
                    <div>
                      <h4 className="font-medium">Eliminación completa</h4>
                      <p className="text-sm text-muted-foreground">
                        Se eliminan todos los datos de respaldo y copias de seguridad. Proceso irreversible
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Before You Delete */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Antes de Eliminar tu Cuenta</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Considera estas alternativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Desactivar temporalmente</p>
                        <p className="text-sm text-muted-foreground">Oculta tu perfil sin eliminar datos</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Ajustar privacidad</p>
                        <p className="text-sm text-muted-foreground">Modifica qué información compartes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Pausar notificaciones</p>
                        <p className="text-sm text-muted-foreground">Reduce las interrupciones sin eliminar</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Respalda tu información</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Descarga tus datos</p>
                        <p className="text-sm text-muted-foreground">Solicita una copia de tu información</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Guarda contenido importante</p>
                        <p className="text-sm text-muted-foreground">Fotos, videos y documentos relevantes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div>
                        <p className="font-medium">Exporta contactos</p>
                        <p className="text-sm text-muted-foreground">Lista de conexiones y amigos</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">¿Necesitas Ayuda?</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <CardTitle>Contacta con Soporte</CardTitle>
                </div>
                <CardDescription>
                  Si tienes problemas con el proceso de eliminación o preguntas adicionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Información de contacto</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Email:</strong> support@appcraftstudio.com
                      </p>
                      <p>
                        <strong>Teléfono:</strong> (555) 123-4567
                      </p>
                      <p>
                        <strong>Horario:</strong> Lun-Vie 9:00-18:00
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Información requerida</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Email registrado en la cuenta</li>
                      <li>• Nombre de usuario (si aplica)</li>
                      <li>• Descripción del problema</li>
                      <li>• Capturas de pantalla (si es necesario)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 AppCraft Studio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/account-deletion" className="text-xs hover:underline underline-offset-4">
            Account Deletion
          </Link>
          <Link href="/#contact" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
