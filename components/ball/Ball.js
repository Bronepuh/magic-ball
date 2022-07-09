import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
} from "react-native";
import { ANSWERS } from "../utils/constants";
import { getRandomIntInclusive } from "../utils/helpers";

function Ball() {
  const [answer, setAnswer] = useState(ANSWERS.question);
  const [isDisabled, setIsDisabled] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const imageBall = require("../../assets/img/magic-ball.png");

  const onBallPress = () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (isDisabled) {
      return;
    }

    setIsDisabled(true);

    const newAnswer = getRandomIntInclusive(0, 1);

    switch (newAnswer) {
      case 0:
        setAnswer(ANSWERS.no);
        break;
      case 1:
        setAnswer(ANSWERS.yes);
        break;
      default:
        break;
    }

    const timeoutId = setTimeout(() => {
      setTimerId(timeoutId);
      setAnswer(ANSWERS.question);
      setIsDisabled(false);
    }, 3000);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableNativeFeedback onPress={onBallPress}>
        <ImageBackground
          style={styles.ball}
          source={imageBall}
          resizeMode="contain"
        >
          {answer === ANSWERS.question && (
            <Text style={styles.question} onPress={onBallPress}>
              {answer}
            </Text>
          )}
          {answer === ANSWERS.yes && (
            <Text style={styles.answer} onPress={onBallPress}>
              {answer}
            </Text>
          )}
          {answer === ANSWERS.no && (
            <Text style={styles.answer} onPress={onBallPress}>
              {answer}
            </Text>
          )}
        </ImageBackground>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    padding: 20,
  },
  ball: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },
  question: {
    width: 140,

    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "yellow",
  },
  answer: {
    width: 140,

    textAlign: "center",
    fontSize: 60,
    fontWeight: "600",
    color: "yellow",
  },
});

export default Ball;
