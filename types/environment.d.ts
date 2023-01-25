/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL: string
    NEXT_PUBLIC_SLACK_API_BASE_URL: string

    SLACK_API_BASE_URL: string
    SLACK_AUTH_URL: string
    SLACK_CLIENT_ID: string
    SLACK_CLIENT_SECRET: string
    SLACK_TOKEN_URL: string
    SLACK_BOT_TOKEN: string

    NEXTAUTH_SECRET: string
  }
}
