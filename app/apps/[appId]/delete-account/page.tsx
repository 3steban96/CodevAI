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
            Home
          </Link>
          <Link href="/#apps" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Our Apps
          </Link>
          <Link
            href={`/apps/${app.id}/privacy`}
            className="text-sm font-medium hover:text-primary-600 transition-colors"
          >
            Privacy Policy
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
                <h1 className="text-3xl font-bold tracking-tighter">Delete Your {app.name} Account</h1>
                <p className="text-gray-600 mt-2">Step-by-step guide to permanently delete your account and data</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Important Notice</AlertTitle>
            <AlertDescription className="text-red-700">
              Deleting your {app.name} account is permanent and irreversible. All your data, settings, and content will
              be permanently removed from our servers and cannot be recovered.
            </AlertDescription>
          </Alert>

          {/* Methods Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">How to Delete Your Account</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* In-App Method */}
              <Card className="border-primary-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary-600" />
                    <CardTitle>From {app.name} App</CardTitle>
                  </div>
                  <CardDescription>The quickest and most direct method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Open {app.name}</p>
                        <p className="text-sm text-gray-600">Make sure you're logged into your account</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Go to Settings</p>
                        <p className="text-sm text-gray-600">Look for the gear icon or "Settings" menu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Select "Account & Privacy"</p>
                        <p className="text-sm text-gray-600">Find the account management section</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Tap "Delete Account"</p>
                        <p className="text-sm text-gray-600">Usually located at the bottom of the page</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs text-white font-semibold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Confirm deletion</p>
                        <p className="text-sm text-gray-600">Read the warnings and confirm your decision</p>
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
                    <CardTitle>Via Email Request</CardTitle>
                  </div>
                  <CardDescription>If you can't access the app</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Send an email</p>
                        <p className="text-sm text-gray-600">To: {app.id}@codevai.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Subject line</p>
                        <p className="text-sm text-gray-600">"Delete {app.name} Account Request"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Include information</p>
                        <p className="text-sm text-gray-600">Registered email, username, reason for deletion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Identity verification</p>
                        <p className="text-sm text-gray-600">Answer our security questions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-600 text-xs text-white font-semibold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Final confirmation</p>
                        <p className="text-sm text-gray-600">Confirm your request via email</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">What Data Will Be Deleted</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trash2 className="h-6 w-6 text-red-600" />
                  <CardTitle>Data permanently removed from {app.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Personal Information</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Name and profile information</li>
                      <li>• Email address and contact details</li>
                      <li>• Profile picture and avatar</li>
                      <li>• Account preferences and settings</li>
                      <li>• Linked social media accounts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">App-Specific Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {app.category === "Health & Fitness" && (
                        <>
                          <li>• Workout history and progress</li>
                          <li>• Health metrics and measurements</li>
                          <li>• Fitness goals and achievements</li>
                          <li>• Nutrition and meal data</li>
                        </>
                      )}
                      {app.category === "Productivity" && (
                        <>
                          <li>• Tasks and project data</li>
                          <li>• Team collaborations</li>
                          <li>• Time tracking records</li>
                          <li>• Document attachments</li>
                        </>
                      )}
                      {app.category === "Food & Drink" && (
                        <>
                          <li>• Saved recipes and favorites</li>
                          <li>• Meal plans and shopping lists</li>
                          <li>• Dietary preferences</li>
                          <li>• Recipe ratings and reviews</li>
                        </>
                      )}
                      {app.category === "Health & Wellness" && (
                        <>
                          <li>• Meditation session history</li>
                          <li>• Mindfulness progress tracking</li>
                          <li>• Custom meditation preferences</li>
                          <li>• Sleep and relaxation data</li>
                        </>
                      )}
                      {app.category === "Finance" && (
                        <>
                          <li>• Transaction history</li>
                          <li>• Budget and spending data</li>
                          <li>• Financial goals and targets</li>
                          <li>• Bill reminders and alerts</li>
                        </>
                      )}
                      {app.category === "Education" && (
                        <>
                          <li>• Learning progress and achievements</li>
                          <li>• Course completions and certificates</li>
                          <li>• Study materials and notes</li>
                          <li>• Language proficiency data</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Usage Data</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• App usage statistics</li>
                      <li>• Feature interaction history</li>
                      <li>• Device and location data</li>
                      <li>• Crash reports and error logs</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Social Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Friends and connections</li>
                      <li>• Messages and communications</li>
                      <li>• Shared content and posts</li>
                      <li>• Community interactions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Deletion Timeline</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary-600" />
                  <CardTitle>Account deletion process for {app.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                      0h
                    </div>
                    <div>
                      <h4 className="font-medium">Request received</h4>
                      <p className="text-sm text-gray-600">
                        Your account is immediately deactivated and hidden from other users
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-semibold">
                      24h
                    </div>
                    <div>
                      <h4 className="font-medium">Grace period</h4>
                      <p className="text-sm text-gray-600">
                        You have 24 hours to cancel the deletion if you change your mind
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-semibold">
                      7d
                    </div>
                    <div>
                      <h4 className="font-medium">Primary data deletion</h4>
                      <p className="text-sm text-gray-600">
                        All personal data and app content is removed from our primary servers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-semibold">
                      30d
                    </div>
                    <div>
                      <h4 className="font-medium">Complete deletion</h4>
                      <p className="text-sm text-gray-600">
                        All backup data and logs are permanently deleted. Process is irreversible
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Before You Delete */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Before You Delete Your {app.name} Account</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary-100">
                <CardHeader>
                  <CardTitle className="text-lg">Consider these alternatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-600 mt-2"></div>
                      <div>
                        <p className="font-medium">Temporarily deactivate</p>
                        <p className="text-sm text-gray-600">Hide your profile without deleting data</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-600 mt-2"></div>
                      <div>
                        <p className="font-medium">Adjust privacy settings</p>
                        <p className="text-sm text-gray-600">Control what information you share</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-600 mt-2"></div>
                      <div>
                        <p className="font-medium">Disable notifications</p>
                        <p className="text-sm text-gray-600">Reduce interruptions without deleting</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary-100">
                <CardHeader>
                  <CardTitle className="text-lg">Backup your data</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-secondary-600 mt-2"></div>
                      <div>
                        <p className="font-medium">Export your data</p>
                        <p className="text-sm text-gray-600">Request a copy of your information</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-secondary-600 mt-2"></div>
                      <div>
                        <p className="font-medium">Save important content</p>
                        <p className="text-sm text-gray-600">Screenshots, files, and achievements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-secondary-600 mt-2"></div>
                      <div>
                        <p className="font-medium">Note your progress</p>
                        <p className="text-sm text-gray-600">Record achievements and milestones</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Need Help?</h2>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                  <CardTitle>Contact {app.name} Support</CardTitle>
                </div>
                <CardDescription>
                  If you have problems with the deletion process or questions about your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Contact information</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Email:</strong> {app.id}@codevai.com
                      </p>
                      <p>
                        <strong>General Support:</strong> support@codevai.com
                      </p>
                      <p>
                        <strong>Phone:</strong> (555) 123-4567
                      </p>
                      <p>
                        <strong>Hours:</strong> Mon-Fri 9:00-18:00 PST
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Information to include</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Email registered with {app.name}</li>
                      <li>• Username or user ID</li>
                      <li>• Description of the issue</li>
                      <li>• Screenshots (if applicable)</li>
                      <li>• Device and app version</li>
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
            Privacy Policy
          </Link>
          <Link href="/privacy-policy" className="text-xs hover:text-primary-600 transition-colors">
            General Privacy
          </Link>
          <Link href="/#contact" className="text-xs hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
