import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  BackHandler,
  Share,
  ImageBackground,
} from "react-native";

function Menu() {
  const onExitPress = () => {
    BackHandler.exitApp();
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "exp://192.168.3.2:19000",
        url: "exp://192.168.3.2:19000",
        title: "exp://192.168.3.2:19000",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const exitImage = require("../../assets/img/premium-icon-exit.png");
  const shareImage = require("../../assets/img/icon-share.png");

  return (
    <View style={styles.buttonsWrapper}>
      <TouchableOpacity onPress={onShare}>
        <ImageBackground
          style={styles.share}
          source={shareImage}
          resizeMode="contain"
        ></ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={onExitPress}>
        <ImageBackground
          style={styles.exit}
          source={exitImage}
          resizeMode="contain"
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    position: "absolute",
    top: 15,
    right: 10,

    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",

    width: 150,

    zIndex: 10,
  },
  share: {
    flex: 1,
    width: 60,
    height: 37,
  },
  exit: {
    flex: 1,
    width: 60,
    height: 40,
  },
});

export default Menu;
