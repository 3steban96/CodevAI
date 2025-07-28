import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Palette, Rocket, Users, Zap, Download, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { apps } from "@/lib/apps"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <Code className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            CodevAI
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Services
          </Link>
          <Link href="#apps" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Our Apps
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary-600 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Contact
          </Link>
          <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Privacy
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
                    🚀 AI-Powered Development
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Ideas Into
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                      {" "}
                      Smart Apps
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    We create intelligent mobile applications powered by AI. From concept to launch, we're your trusted
                    partner in building the next generation of mobile experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 border-primary-200 text-primary-700 hover:bg-primary-50 bg-transparent"
                  >
                    View Our Apps
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary-500" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary-500" />
                    <span>AI Integration</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-secondary-500" />
                    <span>30-Day Support</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl blur-3xl opacity-30"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=300&text=AI+Mobile+App"
                    width={300}
                    height={400}
                    alt="AI Mobile App Mockup"
                    className="relative aspect-[3/4] overflow-hidden rounded-xl object-cover shadow-2xl"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive AI-powered mobile app development services tailored to your business needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-primary-100 hover:border-primary-200 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>AI-Native Development</CardTitle>
                  <CardDescription>
                    iOS and Android apps built with cutting-edge AI integration and machine learning capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      AI-Powered Features
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Machine Learning Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Smart Analytics
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-secondary-100 hover:border-secondary-200 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Cross-Platform AI</CardTitle>
                  <CardDescription>
                    React Native and Flutter apps with unified AI services that work seamlessly across platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Unified AI Backend
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Cross-Platform ML
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Shared Intelligence
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-purple-100 hover:border-purple-200 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Intelligent UI/UX</CardTitle>
                  <CardDescription>
                    AI-driven design optimization with adaptive interfaces that learn from user behavior
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Adaptive Interfaces
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Behavioral Analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary-500" />
                      Smart Personalization
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Apps</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the intelligent mobile applications we've built for various industries
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
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.8</span>
                        <span className="text-xs text-gray-500">(2.1k)</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/apps/${app.id}/privacy`}>
                          <Button variant="ghost" size="sm" className="text-xs">
                            Privacy
                          </Button>
                        </Link>
                        <Link href={app.downloadUrl} target="_blank">
                          <Button size="sm" className="text-xs bg-gradient-to-r from-primary-600 to-primary-700">
                            <Download className="h-3 w-3 mr-1" />
                            Download
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
                    About CodevAI
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Pioneering AI-Driven Mobile Innovation
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With over 5 years of experience in mobile app development and 2 years specializing in AI
                    integration, we've helped startups and enterprises build intelligent mobile solutions that adapt and
                    learn from user behavior.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">50+ Clients</div>
                      <div className="text-sm text-gray-500">Happy Customers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                      <Rocket className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">100+ Apps</div>
                      <div className="text-sm text-gray-500">Successfully Launched</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl blur-3xl opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=400&width=550&text=CodevAI+Team"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to build your next AI-powered mobile app? Let's discuss your ideas and bring them to life.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl space-y-4 py-12">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="border-primary-200 focus:border-primary-400" />
                  <Input placeholder="Last Name" className="border-primary-200 focus:border-primary-400" />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="border-primary-200 focus:border-primary-400"
                />
                <Input placeholder="Company (Optional)" className="border-primary-200 focus:border-primary-400" />
                <Textarea
                  placeholder="Tell us about your AI app idea..."
                  className="min-h-[120px] border-primary-200 focus:border-primary-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2024 CodevAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:text-primary-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/account-deletion" className="text-xs hover:text-primary-600 transition-colors">
            Account Deletion
          </Link>
          <Link href="#contact" className="text-xs hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
