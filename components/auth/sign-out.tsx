
"use client"

import { signOut } from "next-auth/react"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"
 
export default function SignOut() {
  return (
    <Button
      onClick={async () => {
        // `redirect: false` stops next-auth from following the URL the backend
        // returns. Auth.js builds that URL from the backend's AUTH_URL, so a
        // stale or unset AUTH_URL (e.g. http://localhost:3000) would otherwise
        // navigate the browser off the live site after signing out.
        await signOut({ callbackUrl: "/", redirect: false })
        window.location.href = "/"
      }}
      variant="ghost"
      className="w-full justify-start p-0 h-auto font-normal"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  )
}