
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    // এই লাইনটি যোগ করুন
    secret: process.env.NEXTAUTH_URL,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
