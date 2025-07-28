import Link from "next/link"
import { ArrowLeft, Code, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAppById } from "@/lib/apps"
import { notFound } from "next/navigation"
import Image from "next/image"

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
            Home
          </Link>
          <Link href="/#apps" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Our Apps
          </Link>
          <Link
            href={`/apps/${app.id}/delete-account`}
            className="text-sm font-medium hover:text-primary-600 transition-colors"
          >
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
                <h1 className="text-3xl font-bold tracking-tighter">{app.name} - Privacy Policy</h1>
                <p className="text-gray-600 mt-2">{app.description}</p>
              </div>
            </div>

            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary-600" />
                Introduction
              </h2>
              <p className="mb-4">
                CodevAI ("we," "our," or "us") is committed to protecting your privacy when using {app.name}. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                mobile application.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not use {app.name}.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">
                When you use {app.name}, we may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account registration information (name, email address)</li>
                <li>Profile information and preferences</li>
                <li>User-generated content and data</li>
                <li>Communication data when you contact support</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <p className="mb-4">
                {app.name} may automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>App usage analytics and performance data</li>
                <li>Location data (if you grant permission)</li>
                <li>Crash reports and error logs</li>
                <li>Network information and IP address</li>
              </ul>

              {app.category === "Health & Fitness" && (
                <>
                  <h3 className="text-xl font-semibold mb-3">Health and Fitness Data</h3>
                  <p className="mb-4">{app.name} may collect health and fitness-related information, including:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Workout data and exercise history</li>
                    <li>Health metrics (with your explicit consent)</li>
                    <li>Fitness goals and progress tracking</li>
                    <li>Integration data from health platforms (Apple Health, Google Fit)</li>
                  </ul>
                </>
              )}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing and maintaining {app.name} functionality</li>
                <li>Personalizing your app experience</li>
                <li>Improving app performance and features</li>
                <li>Sending important notifications and updates</li>
                <li>Providing customer support</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Ensuring app security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">AI and Machine Learning</h2>
              <p className="mb-4">
                {app.name} uses artificial intelligence and machine learning technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personalized recommendations based on your usage patterns</li>
                <li>Intelligent features that adapt to your preferences</li>
                <li>Automated content analysis and categorization</li>
                <li>Predictive analytics to improve app functionality</li>
              </ul>
              <p className="mb-4">
                All AI processing is designed to respect your privacy, and personal data used for machine learning is
                anonymized and aggregated whenever possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third-party services that help us operate {app.name}{" "}
                  (analytics, cloud storage, payment processing)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or
                  safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly agree to share information with third parties
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure cloud infrastructure</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of marketing communications</li>
                <li>Control location and notification permissions</li>
                <li>Restrict certain data processing activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="mb-4">
                We retain your personal information only as long as necessary to provide {app.name} services and fulfill
                the purposes outlined in this Privacy Policy. Specific retention periods include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account data: Until account deletion or 3 years of inactivity</li>
                <li>Usage analytics: Aggregated data retained for up to 2 years</li>
                <li>Support communications: 1 year after resolution</li>
                <li>Legal compliance data: As required by applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="mb-4">
                {app.name} is not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal information from
                a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that
                such transfers comply with applicable data protection laws and implement appropriate safeguards to
                protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Posting the updated Privacy Policy in {app.name}</li>
                <li>Sending you a notification through the app</li>
                <li>Updating the "Last updated" date at the top of this policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or {app.name}'s privacy practices, please contact
                us:
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>CodevAI - {app.name} Support</strong>
                </p>
                <p className="mb-2">Email: privacy@codevai.com</p>
                <p className="mb-2">App-specific support: {app.id}@codevai.com</p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p>Address: 123 AI Innovation Drive, Tech City, TC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-600">© 2024 CodevAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:text-primary-600 transition-colors">
            General Privacy Policy
          </Link>
          <Link href={`/apps/${app.id}/delete-account`} className="text-xs hover:text-primary-600 transition-colors">
            Delete Account
          </Link>
          <Link href="/#contact" className="text-xs hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
