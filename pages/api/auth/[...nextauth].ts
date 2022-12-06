import NextAuth, { NextAuthOptions } from 'next-auth'
import SlackProvider from 'next-auth/providers/slack'

export const authOptions: NextAuthOptions = {
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile email',
          response_type: 'code',
        },
      },
      accessTokenUrl: process.env.SLACK_AUTH_URL,
      idToken: true,
    }),
  ],
  callbacks: {
    redirect() {
      return '/tiny-slack'
    },
    jwt({ token, account, user }) {
      if (user) {
        token.userId = user.id
      }
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.userId
      session.accessToken = token.accessToken
      return session
    },
  },
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
}

export default NextAuth(authOptions)
