"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Eye, EyeOff, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const handleAutoFill = () => {
    setEmail("admin@flame.dev")
    setPassword("flame123")
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!password.trim()) {
      newErrors.password = "Password is required."
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    router.push("/dashboard")
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <svg
        aria-hidden="true"
        className="absolute bottom-0 right-0 z-10 h-220 w-200 -rotate-45 overflow-visible md:h-220 md:w-300"
      >
        <defs>
          <linearGradient
            id="flame-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="25%" stopColor="var(--primary)" />
            <stop offset="85%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>

        <Flame
          size="1400"
          className="size-full"
          stroke="url(#flame-gradient)"
        />
      </svg>

      <Card className="z-20 w-full max-w-sm border-border/60 bg-background/80 shadow-sm">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex size-11 items-center justify-center rounded-xl">
            <Flame
              aria-hidden="true"
              className="size-7"
              stroke="url(#flame-gradient)"
            />
          </div>

          <span className="m-0 bg-linear-to-br from-primary from-25% to-secondary to-85% bg-clip-text ps-2.5 text-3xl font-semibold text-transparent">
            Flame
          </span>

          <div className="space-y-1">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Sign in to your Flame dashboard
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="admin@flame.dev"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }))
                }}
              />

              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setErrors((prev) => ({
                      ...prev,
                      password: "",
                    }))
                  }}
                  className="pr-10"
                />

                <button
                  type="button"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-0 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff aria-hidden="true" className="size-4" />
                  ) : (
                    <Eye aria-hidden="true" className="size-4" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-destructive">
                  {errors.password}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleAutoFill}
            >
              Auto Fill
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}