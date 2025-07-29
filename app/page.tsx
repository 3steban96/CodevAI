import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Palette, Rocket, Users, Zap, Download, Star, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { apps } from "@/lib/apps"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-gradient-to-br from-primary-50 via-white to-secondary-50 backdrop-blur-md sticky top-0 z-50">
        {/* <Link href="/" className="flex items-center justify-center">
          <Image
            src="/Logo-CodevAINavBar.png"
            width={150}
            height={200}
            alt="CodevAI Logo"
            className="bg-gradient-to-br from-primary-500 to-secondary-500 h-8 w-8"
          />
        </Link> */}
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium text-gray-800 hover:text-primary-500 transition-colors">
            Servicios
          </Link>
          <Link href="#apps" className="text-sm font-medium text-gray-800 hover:text-primary-500 transition-colors">
            Nuestras Apps
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-800 hover:text-primary-500 transition-colors">
            Acerca de
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-800 hover:text-primary-500 transition-colors">
            Contacto
          </Link>
        </nav>
      </header>



      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                    🚀 Desarrollo Impulsado por IA
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforma Ideas en
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      {" "}
                      Apps Inteligentes
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Creamos aplicaciones móviles inteligentes impulsadas por IA. Desde el concepto hasta el lanzamiento,
                    somos tu socio de confianza para construir la próxima generación de experiencias móviles.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                  <Button                   
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
                  >                    
                    Inicia tu Proyecto
                  </Button></Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-primary-200 text-primary-700 hover:bg-primary-50 bg-transparent"
                  >
                    Ver Nuestras Apps
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary-500" />
                    <span>Consulta Gratuita</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary-500" />
                    <span>Integración IA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary-500" />
                    <span>Soporte 30 Días</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl blur-3xl opacity-30"></div>
                  <Image
                    src="/telefono-3d.png?height=400&width=300&text=AI+Mobile+App"
                    width={250}
                    height={400}
                    alt="AI Mobile App Mockup"
                    className="relative aspect-[1/2] overflow-hidden rounded-xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Servicios integrales de desarrollo de aplicaciones móviles impulsadas por IA adaptados a las
                  necesidades de tu negocio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-primary-100 hover:border-primary-200 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Desarrollo Nativo con IA</CardTitle>
                  <CardDescription>
                    Apps iOS y Android construidas con integración de IA de vanguardia y capacidades de aprendizaje
                    automático
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Funciones Impulsadas por IA
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Integración de Aprendizaje Automático
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Análisis Inteligente
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-secondary-100 hover:border-secondary-200 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>IA Multiplataforma</CardTitle>
                  <CardDescription>
                    Apps React Native y Flutter con servicios de IA unificados que funcionan perfectamente en todas las
                    plataformas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Backend de IA Unificado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      ML Multiplataforma
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Inteligencia Compartida
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-purple-100 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>UI/UX Inteligente</CardTitle>
                  <CardDescription>
                    Optimización de diseño impulsada por IA con interfaces adaptativas que aprenden del comportamiento
                    del usuario
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Interfaces Adaptativas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Análisis de Comportamiento
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Personalización Inteligente
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-primary-50/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Apps</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las aplicaciones móviles inteligentes que hemos construido para diversas industrias
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <Card
                  key={app.id}
                  className="group hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-primary-200"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={app.icon || "/placeholder.svg"}
                        alt={`${app.name} icon`}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-primary-50 text-primary-700">
                          {app.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">{app.description}</CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {app.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-2">
                        <Link href={`/apps/${app.id}/privacy`}>
                          <Button variant="ghost" size="sm" className="text-xs">
                            Privacidad
                          </Button>
                        </Link>
                        <Link href={`/apps/${app.id}/delete-account`} target="_blank">
                          <Button size="sm" className="text-xs bg-gradient-to-r from-red-600 to-red-700">
                            <Trash className="h-3 w-3 mr-1" />
                            Tutorial eliminación cuenta
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gradient-to-r from-primary-100 to-secondary-100 px-3 py-1 text-sm font-medium text-primary-700">
                    Acerca de CodevAI
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Pioneros en Innovación Móvil Impulsada por IA
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Con más de 2 años de experiencia en desarrollo de aplicaciones móviles especializándonos en
                    integración de IA, hemos ayudado a startups y empresas a construir soluciones móviles inteligentes
                    que se adaptan y aprenden del comportamiento del usuario.
                  </p>
                </div>

              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl blur-3xl opacity-20"></div>
                <Image
                  src="/Logo-CodevAI.png?height=400&width=550&text=CodevAI+Team"
                  width={550}
                  height={400}
                  alt="CodevAI Team"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary-50 to-secondary-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ponte en Contacto</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Listo para construir tu próxima aplicación móvil impulsada por IA? Hablemos de tus ideas y hagámoslas
                  realidad.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl space-y-4 py-12">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Nombre" className="border-primary-200 focus:border-primary-400" />
                  <Input placeholder="Apellido" className="border-primary-200 focus:border-primary-400" />
                </div>
                <Input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="border-primary-200 focus:border-primary-400"
                />
                <Input placeholder="Empresa (Opcional)" className="border-primary-200 focus:border-primary-400" />
                <Textarea
                  placeholder="Cuéntanos sobre tu idea de app con IA..."
                  className="min-h-[120px] border-primary-200 focus:border-primary-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2025 CodevAI. Todos los derechos reservados.</p>

      </footer>
    </div>
  )
}
