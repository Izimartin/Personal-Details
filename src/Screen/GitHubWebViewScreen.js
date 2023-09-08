import React from "react";
import { WebView } from "react-native-webview";

function GitHubWebViewScreen() {
	const githubProfileURL = "https://github.com/izimartin";

	return <WebView source={{ uri: githubProfileURL }} />;
}

export default GitHubWebViewScreen;
