# Capsule Technical Case

## 👋 Context

At Capsule, we want to empower the development team by involving developer throughout the entire lifecycle of a feature.

> 💡 If you want to learn more about Capsule, our vision or our position: go here 👉 [https://capsule.crew.work/jobs/633ae157daf2495f3d2b74cd](https://capsule.crew.work/jobs/633ae157daf2495f3d2b74cd)

As part of our evaluation process, we ask them to complete a technical case that covers the development of a feature from conception to delivery.

## 🎯 Objective

The objective of this project will be to create a small Slack client for asynchronous messaging.

After talking with your users, you end up with the following requirements:

- The user should be able to log into their Slack account and then choose a Slack channel
- After logging in, he/she/they will be able to access a "chat"
- He/she/they should be able to send and receive messages that will appear in this chat and in Slack
- Messages sent from this client should be sent as a bot user (not the user who signed in)
- The receiving of messages does **not** need to be real-time (it's for asynchronous messaging after all)
- For security reasons, the client should never be able to access messages sent before the user's login

## 📝 Instructions

The project should use [Next.js](https://nextjs.org/docs/getting-started) with Typescript.

> Sorry about this arbitrary requirement but **don't worry if you are not very comfortable in Next.js, the evaluation criteria will be adapted according to your previous knowledge of the subject** ! Besides the Next.js constraint, you can do whatever you want ! You can change the current structure of the project. You can use any library or SDK (including Slack SDKs).

**Additional instructions**:

- The goal is to complete this exercise in about 4 hours
- You will need to create a Slack account and refer to their API documentation
- The instructions leave some room for interpretation on the design and implementation: it's on purpose, it's up to you to make the best choices!

## ℹ️ How to use this repository

This repository is a Next.js template that you can use as a starting point for your project.
It has been generated with `pnpm create next-app --typescript`.

To start the project:

- Install the dependencies with `pnpm install`
- Start the development server with `pnpm dev`

For more information, check out Next.js's ["Getting Started" guide](https://nextjs.org/docs/getting-started).

## 🚢 Delivery

- [ ] You will need to copy (**not fork**) this repository to your account. You can do this by clicking [this link](https://github.com/GoCapsule/tiny-slack/generate).
- [ ] Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with all your code (but not the boilerplate code of Next.js)
- [ ] Mention all necessary steps to test your solution in the pull request description (e.g. [app manifest](https://api.slack.com/reference/manifests#exporting) of your Slack application, etc.)
- [ ] Add [Leonard](https://github.com/leonard-henriquez) to your repository
- [ ] Add Leonard as a reviewer of your pull request
- [ ] [Book a meeting with Leonard](https://calendly.com/leonard-capsule/) to discuss your solution

## ✅ Evaluation criteria

Criteria taken into account:

- Technical choices (libraries chosen, code organization, Slack authentication method, etc.)
- Code quality
- Quality of the pull request description
- Quality of the UX

Criteria **not** taken into account:

- Quality of the UI
