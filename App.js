import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Ball from "./components/ball/Ball";
import Menu from "./components/menu/Menu";

export default function App() {
  const image = require("./assets/img/magic-ball-light-bg.png");

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Ball />
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",

    width: "100%",
    height: "100%",
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",

    width: 50,
    height: 20,
    backgroundColor: "green",
  },
});
