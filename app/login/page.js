"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/products")
        }
    }, [status, router])

    if (status === "loading") {
        return <p>Loading...</p>
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            <h1>Login Page</h1>
            <button onClick={() => signIn("google")}>
                Login with Google
            </button>
        </div>
    )
}