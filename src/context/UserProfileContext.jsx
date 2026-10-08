"use client"

import { createContext, useContext, useState } from "react"

const initialUserData = {
  name: "Amirali Setayeshmehr",
  role: "Admin",
  email: "Setayeshmehr@flame.com",
  phone: "+98 9198383305",
  location: "Iran, Tehran",
  bio: "I'm a passionate frontend developer with a strong attention to detail, focused on building responsive and user-friendly web applications. With expertise in modern JavaScript technologies like React, I transform ideas into functional, engaging, and seamless digital experiences.",
  department: "Engineering",
  language: "English, Persian",
  initials: "AS",
}

const UserProfileContext = createContext(undefined)

export function UserProfileProvider({ children }) {
  const [userData, setUserData] = useState(initialUserData)

  const updateUserData = (newData) => {
    setUserData((prev) => ({
      ...prev,
      ...newData,
    }))
  }

  return (
    <UserProfileContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserProfileContext.Provider>
  )
}

export function useUserProfile() {
  const context = useContext(UserProfileContext)

  if (!context) {
    throw new Error(
      "useUserProfile must be used inside UserProfileProvider"
    )
  }

  return context
}