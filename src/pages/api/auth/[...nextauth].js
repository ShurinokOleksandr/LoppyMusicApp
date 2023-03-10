import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import {CLIENT_ID, CLIENT_SECRET, SCOPES} from "@lp/shared/config";



export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            authorization: { params: { scope: SCOPES } },
        }),
    ],
    pages: {
        signIn: "/auth",
    },
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.refreshToken = account.refresh_token
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            session.refreshToken = token.refreshToken
            return session
        }
    }
});