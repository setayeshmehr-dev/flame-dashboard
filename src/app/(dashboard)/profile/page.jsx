"use client"

import { useUserProfile } from "@/context/UserProfileContext"
import Link from "next/link"
import { useState } from "react"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Briefcase,
  Pencil,
  Save,
  X,
  Package,
  Settings,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const activityLog = [
  { action: "Updated order ORD-7891", time: "2 hours ago", icon: Package },
  { action: "Changed theme to Dark", time: "5 hours ago", icon: Settings },
  { action: "Created new order ORD-8012", time: "Yesterday", icon: Package },
  { action: "Exported orders CSV", time: "2 days ago", icon: Briefcase },
  { action: "Updated profile information", time: "3 days ago", icon: User },
  { action: "Logged in from new device", time: "1 week ago", icon: Shield },
]

export default function ProfilePage() {
  const { userData, updateUserData } = useUserProfile()

  const [isEditing, setIsEditing] = useState(false)
  const [form, setForm] = useState({ ...userData })
  const [errors, setErrors] = useState({})

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }))
  }

  const handleSave = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = "Name is required."
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    updateUserData(form)
    setIsEditing(false)

    toast.success("Profile updated successfully")
  }

  const handleCancel = () => {
    setForm({ ...userData })
    setErrors({})
    setIsEditing(false)
  }

  return (
    <div className="space-y-6 p-6">
      {/* Breadcrumb */}
      <div>
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/dashboard"
            className="transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>

          <span>/</span>

          <span className="text-foreground">Profile</span>
        </nav>
      </div>

      {/* Profile Header */}
      <Card className="relative overflow-hidden p-0!">
        <div className="h-32 bg-linear-to-br from-primary to-secondary from-25% to-85%" />

        <CardContent className="pt-0 pb-6">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-card bg-linear-to-br from-primary to-secondary from-25% to-85% text-3xl font-bold text-white shadow-lg">
                {userData.initials}
              </div>

              <button
                type="button"
                className="absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold tracking-tight md:text-2xl">
                {userData.name}
              </h1>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Badge
                  variant="secondary"
                  className="w-auto p-2 text-black capitalize"
                >
                  {userData.role}
                </Badge>

                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {userData.location}
                </span>
              </div>
            </div>

            <Link
                href="/settings"
                className="inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-md border bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
              <Pencil className="mr-1.5 h-4 w-4" />
              Edit Profile
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Personal Information
          </CardTitle>

          <CardDescription>
            Your basic profile details
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <User className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Full Name
                </p>

                <p className="truncate text-sm font-medium">
                  {userData.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </p>

                <p className="truncate text-sm font-medium">
                  {userData.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </p>

                <p className="text-sm font-medium">
                  {userData.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Location
                </p>

                <p className="text-sm font-medium">
                  {userData.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Department
                </p>

                <p className="text-sm font-medium">
                  {userData.department}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Role
                </p>

                <p className="text-sm font-medium">
                  {userData.role}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Bio
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {userData.bio}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Recent Activity
          </CardTitle>

          <CardDescription>
            Your latest account activity
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {activityLog.map((activity, index) => {
              const Icon = activity.icon

              return (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {activity.action}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Edit Profile */}
      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Edit Profile
            </CardTitle>

            <CardDescription>
              Update your personal information
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="profile-name">Full Name</Label>

                <Input
                  id="profile-name"
                  value={form.name}
                  onChange={(e) =>
                    handleChange("name", e.target.value)
                  }
                />

                {errors.name && (
                  <p className="text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-email">Email</Label>

                <Input
                  id="profile-email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    handleChange("email", e.target.value)
                  }
                />

                {errors.email && (
                  <p className="text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-phone">Phone</Label>

                <Input
                  id="profile-phone"
                  value={form.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-location">Location</Label>

                <Input
                  id="profile-location"
                  value={form.location}
                  onChange={(e) =>
                    handleChange("location", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-department">
                  Department
                </Label>

                <Input
                  id="profile-department"
                  value={form.department}
                  onChange={(e) =>
                    handleChange("department", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-role">Role</Label>

                <Input
                  id="profile-role"
                  value={form.role}
                  onChange={(e) =>
                    handleChange("role", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="profile-bio">Bio</Label>

                <Textarea
                  id="profile-bio"
                  value={form.bio}
                  onChange={(e) =>
                    handleChange("bio", e.target.value)
                  }
                  rows={4}
                  className="resize-y"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-2 border-t pt-5">
              <Button
                variant="outline"
                onClick={handleCancel}
              >
                <X className="mr-1.5 h-4 w-4" />
                Cancel
              </Button>

              <Button onClick={handleSave}>
                <Save className="mr-1.5 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}