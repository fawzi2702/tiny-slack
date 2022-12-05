/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    SLACK_API_BASE_URL: string
    SLACK_AUTHORIZATION_ENDPOINT: string
    SLACK_TOKEN_URL: string
    SLACK_CLIENT_ID: string
    SLACK_CLIENT_SECRET: string
    SLACK_TOKEN_URL: string

    CLIENT_BASE_URL: string
    CLIENT_SIGNED_IN_URL: string
    CLIENT_ACCESS_DENIED_URL: string
  }
}
