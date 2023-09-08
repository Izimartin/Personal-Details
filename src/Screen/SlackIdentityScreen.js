import { Button, Image, StyleSheet, Text, View } from "react-native";

import React from "react";

function SlackIdentityScreen({ navigation }) {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},
		heading: {
			fontSize: 24,
			fontWeight: "bold",
			marginBottom: 16,
		},
		profileImage: {
			width: 300,
			height: 300,
			borderRadius: 150,
			marginBottom: 16,
		},
		usernameTitle: {
			fontSize: 20,
			fontWeight: "bold",
			marginBottom: 25,
		},
		slackUsername: {
			fontSize: 18,
			marginBottom: 25,
		},
		githubButton: {
			backgroundColor: "blue",
			paddingHorizontal: 30,
			paddingVertical: 16,
			borderRadius: 8,
			marginTop: 25,
		},
		githubButtonText: {
			color: "white",
			fontWeight: "bold",
		},
	});

	const slackUsername = "Martins Akhivbareme";
	const slackProfilePicture = require("../Image/martins_profile.jpeg");

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>My Slack Identity</Text>
			<Image source={slackProfilePicture} style={styles.profileImage} />
			<Text style={{ marginBottom: 25 }}>
				<Text style={styles.usernameTitle}>Username:</Text>{" "}
				<Text style={styles.slackUsername}>{slackUsername}</Text>
			</Text>

			<Button
				title='Open GitHub'
				onPress={() => navigation.navigate("GitHubWebView")}
				style={styles.githubButton}
			/>
		</View>
	);
}

export default SlackIdentityScreen;
