import Link from "next/link"
import { ArrowLeft, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
          <Link href="/account-deletion" className="text-sm font-medium hover:underline underline-offset-4">
            Delete Account
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="mb-4">
                AppCraft Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our mobile application development services.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Contact us through our website forms</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with us on social media</li>
                <li>Enter into a service agreement with us</li>
              </ul>
              <p className="mb-4">
                This information may include your name, email address, phone number, company name, and any other
                information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending you marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Analyzing website usage and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting our rights and preventing fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information with trusted third-party service
                  providers who assist us in operating our website and conducting our business
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect
                  our rights, property, or safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You
                can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review the privacy policies of any third-party
                sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal information from
                a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="mb-2">
                  <strong>AppCraft Studio</strong>
                </p>
                <p className="mb-2">Email: privacy@appcraftstudio.com</p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 AppCraft Studio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/#contact" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
