import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Text, View, StatusBar, StyleSheet } from "react-native";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <View style={styles.container}>
        <Text>Bike app</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
