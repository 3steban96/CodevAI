import { Button } from "@/components/ui/button"
import { getAppById } from "@/lib/apps"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    appId: string
  }
}

export default function AppPrivacyPage({ params }: PageProps) {
  const app = getAppById(params.appId)

  if (!app) {
    notFound()
  }

  return (
<main className="flex-1">
  <div className="container max-w-4xl px-4 py-8 md:px-6 md:py-12">
    <div className="mb-8">
      <Link href="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
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
          <h1 className="text-3xl font-bold tracking-tighter">
            {app.name} - Política de Privacidad
          </h1>
          <p className="text-gray-600 mt-2">{app.description}</p>
        </div>
      </div>

      <p className="text-gray-600">
        Última actualización: 24 de julio de 2025
      </p>
    </div>

    <div className="prose prose-gray max-w-none dark:prose-invert">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
        <p>
          Esta política de privacidad se aplica a la aplicación {app.name} (en
          adelante, la “Aplicación”) para dispositivos móviles, creada por
          Codevai (en adelante, el “Proveedor del Servicio”) como un servicio
          con publicidad. Este servicio está destinado a ser utilizado “TAL COMO
          ESTÁ”.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recolección y uso de la información</h2>
        <p>La Aplicación recopila información cuando la descargas y utilizas. Esta información puede incluir, entre otras cosas:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Las páginas de la Aplicación que visitas, la fecha y hora de tu visita, el tiempo que pasas en esas páginas.</li>
          <li>El tiempo total de uso de la Aplicación.</li>
        </ul>
        <p>
          La Aplicación <strong>NO</strong> recopila información precisa sobre la
          ubicación de tu dispositivo móvil.
        </p>
        <p>
          El Proveedor del Servicio puede utilizar la información que
          proporciones para ponerse en contacto contigo ocasionalmente con el fin
          de ofrecerte información importante, avisos requeridos y promociones de
          marketing.
        </p>
        <p>
          Para mejorar la experiencia al usar la Aplicación, el Proveedor del
          Servicio puede requerirte que proporciones cierta información personal
          identificable, incluyendo, entre otros: correo electrónico, ID de
          usuario, nombre, edad, presión arterial, glucosa, peso, frecuencia
          cardíaca, y diario. La información solicitada será conservada y
          utilizada tal como se describe en esta política de privacidad.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Acceso de terceros</h2>
        <p>
          Solo se transmite periódicamente información agregada y anonimizada a
          servicios externos para ayudar al Proveedor del Servicio a mejorar la
          Aplicación y su servicio. El Proveedor del Servicio puede compartir tu
          información con terceros de las formas descritas en esta política de
          privacidad.
        </p>
        <p>
          Ten en cuenta que la Aplicación utiliza servicios de terceros que
          tienen sus propias políticas de privacidad respecto al manejo de datos.
          A continuación, se incluyen los enlaces a las políticas de privacidad
          de los proveedores de servicios de terceros utilizados por la
          Aplicación:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Firebase
            </a>
          </li>
        </ul>
        <p>El Proveedor del Servicio puede divulgar información proporcionada por el usuario y recopilada automáticamente:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>cuando sea requerido por ley, como para cumplir con una citación u otro proceso legal similar;</li>
          <li>
            cuando considere de buena fe que la divulgación es necesaria para
            proteger sus derechos, tu seguridad o la seguridad de otros,
            investigar fraudes o responder a una solicitud del gobierno;
          </li>
          <li>
            con proveedores de servicios de confianza que trabajan en su nombre,
            que no tienen un uso independiente de la información divulgada y que
            han aceptado cumplir con las reglas establecidas en esta política de
            privacidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Derechos de exclusión (Opt‑Out)</h2>
        <p>
          Puedes detener toda recolección de información por parte de la
          Aplicación simplemente desinstalándola. Puedes utilizar los procesos
          estándar de desinstalación disponibles en tu dispositivo móvil o a
          través del mercado de aplicaciones correspondiente.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Política de retención de datos</h2>
        <p>
          El Proveedor del Servicio conservará los datos proporcionados por el
          usuario mientras utilices la Aplicación y por un tiempo razonable
          después. Si deseas que eliminemos los datos proporcionados a través de
          la Aplicación, por favor contáctanos a{" "}
          <a href="mailto:codevai.agendvital@gmail.com">
            codevai.agendvital@gmail.com
          </a>{" "}
          y responderemos en un tiempo razonable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Niños</h2>
        <p>
          El Proveedor del Servicio no utiliza la Aplicación para recopilar
          deliberadamente datos de niños menores de 18 años ni para dirigirse a
          ellos con fines de marketing.
        </p>
        <p>
          La Aplicación no está dirigida a menores de 18 años. El Proveedor del
          Servicio no recopila de manera consciente información personal
          identificable de menores de 18 años. Si se descubre que un menor de 18
          años ha proporcionado información personal, esta será eliminada de
          inmediato de los servidores. Si eres padre, madre o tutor y sabes que
          tu hijo nos ha proporcionado información personal, por favor contáctanos
          a{" "}
          <a href="mailto:agendvital@codevai.cloud">
            agendvital@codevai.cloud
          </a>{" "}
          para tomar las medidas necesarias.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Seguridad</h2>
        <p>
          El Proveedor del Servicio se preocupa por proteger la confidencialidad
          de tu información. Se proporcionan medidas de seguridad físicas,
          electrónicas y administrativas para proteger la información que se
          procesa y almacena.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cambios</h2>
        <p>
          Esta Política de Privacidad puede actualizarse ocasionalmente por
          cualquier motivo. El Proveedor del Servicio te notificará sobre
          cualquier cambio actualizando esta página con la nueva política. Se
          recomienda revisar esta Política de Privacidad regularmente, ya que el
          uso continuado de la Aplicación se considera como aceptación de todos
          los cambios.
        </p>
        <p><strong>Esta política de privacidad es efectiva a partir del 24 de julio de 2025.</strong></p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Limitaciones del análisis automatizado</h2>
        <p>
          La Aplicación utiliza inteligencia artificial para generar sugerencias basadas en los datos que proporcionas, como presión arterial, glucosa, peso y otros parámetros de salud. Estos análisis son automatizados y no constituyen ni reemplazan una evaluación, diagnóstico o tratamiento médico profesional.
          <br /><br />
          Al usar la Aplicación, entiendes y aceptas que toda la información generada es de carácter informativo y debe ser revisada con un profesional de la salud antes de tomar cualquier decisión relacionada con tu bienestar físico o mental.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tu consentimiento</h2>
        <p>
          Al usar la Aplicación, consientes el procesamiento de tu información
          como se establece en esta Política de Privacidad, ahora y según sea
          modificada por nosotros.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
        <p>
          Si tienes preguntas relacionadas con la privacidad durante el uso de
          la Aplicación, o preguntas sobre nuestras prácticas, por favor
          contáctanos por correo electrónico:{" "}
          <a href="mailto:agendvital@codevai.cloud">
            agendvital@codevai.cloud
          </a>.
        </p>
      </section>
    </div>
  </div>
</main>

  )
}
