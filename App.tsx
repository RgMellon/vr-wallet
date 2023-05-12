import { StyleSheet, StatusBar, Text, View } from "react-native";
import { Home } from "./src/Home";
import { Theme } from "./src/template/Theme";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Theme>
        <Home />
      </Theme>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
