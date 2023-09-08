# Slack GitHub Integration App

This mobile application, built with React Native and Expo, prominently features your Slack identity, incorporates your Slack profile picture, and includes an "Open GitHub" button to view your GitHub profile within the app.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- Expo CLI installed globally. You can install it with: `npm install -g expo-cli`.
- Expo Go app installed on your mobile device (for testing on a physical device).
- A valid Slack account and Slack profile picture URL.
- A valid GitHub account.

## Getting Started

To get this app up and running, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/Izimartin/Personal-Details.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd SlackGitHubApp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
    expo start
   ```

5. Open the Expo Go app on your mobile device and scan the QR code in the Expo development server to view the app.

## Usage

To use this app, follow these steps:

1. After launching the app, you will see your Slack identity with your Slack profile picture and username.

2. Click the "Open GitHub" button to view your GitHub profile within the app.

## Customization

To customize this app, follow these steps:

1. Slack identity: Replace the slackUsername and slackProfilePicture variables in SlackIdentityScreen.js with your Slack details.

## Assumptions

- The provided Slack profile picture URL is accessible and valid.
- The provided GitHub URL is accessible and valid.

## License

This project uses the following license: [MIT] (<https://opensource.org/licenses/MIT>).
