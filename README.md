# Tiny Slack
This program provides a small slack client

features:
- Slack OAuth Authentication
- Retrieve user's channels
- Retrieve channel's message history
- Asynchronous send and receive messages (message sent through the app will be marked as sent as a bot user)

## Installation

 **0. Requirements**
	First of all, you must have *NodeJS*  and *pnpm *installed on your machine.
	
 **1. Slack App**
	Next, you must have a Slack app. If you don't have one, you can create one [here](https://api.slack.com/apps). 
	You can create your app with the `slack-app-manifest.json` file in the root of the project to help you.

**2. Environment variables**
	This program need some environment variables that must be specified in *.env* file, that's in the root of the progam
	Here are the required environment variables:
| name | type | description |
|--|--|--|
| `NEXT_APP_BASE_URL` | string | The URL to access the client. For development. **Recommended:** *http://localhost:3000* |
| `NEXT_PUBLIC_API_BASE_URL` | string | The URL to access the Next REST API. **Recommended:** *$NEXT_APP_BASE_URL/api* |
| `NEXT_PUBLIC_SLACK_API_BASE_URL` | string | API proxy endpoint to access Slack API. Implemented to avoid CORS errors.								**Recommended:** *$NEXT_PUBLIC_API_BASE_URL/slack*  |
| `SLACK_API_BASE_URL` | string | Slack API base URL.	**Recommended:** *https://slack.com/api* |
| `SLACK_AUTH_URL` | string | Slack API endpoint to get access_token. **Recommended:** *$SLACK_API_BASE_URL/openid.connect.token* |
| `SLACK_CLIENT_ID` | string | *Client ID* of your Slack App, you can retrieve it in **App Credentials** panel. |
| `SLACK_CLIENT_SECRET` | string | *Client Secret* of your Slack App, you can retrieve it in **App Credentials** panel. |
| `SLACK_BOT_TOKEN` | string | *Bot User OAuth Token* of your Slack App, you can retrieve it in **OAuth & Permissions** panel |
| `NEXTAUTH_SECRET` | string | A secret string to secure JWT tokens (you can generate one [here](https://www.dashlane.com/features/password-generator)) |

**3. Install packages**
In your terminal, run the following:
	
	pnpm install

## Run development server
**Once** you have installed the application, you can run the development server with the following command:

	pnpm run dev

***Enjoy !***
