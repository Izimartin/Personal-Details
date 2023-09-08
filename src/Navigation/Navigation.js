import GitHubWebViewScreen from "../Screen/GitHubWebViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SlackIdentityScreen from "../Screen/SlackIdentityScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='SlackIdentity'>
				<Stack.Screen name='SlackIdentity' component={SlackIdentityScreen} />
				<Stack.Screen name='GitHubWebView' component={GitHubWebViewScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
