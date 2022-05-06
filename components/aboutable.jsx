import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const AboutAble = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>AboutAble</Text>
      </View>
      <View style={styles.aboutcontainer}>
        <View style={styles.right}>
          <View
            style={{
              width: width / 11,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>A</Text>
          </View>
          <View
            style={{
              width: width / 11,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>B</Text>
          </View>
          <View
            style={{
              width: width / 11,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>L</Text>
          </View>
          <View
            style={{
              width: width / 11,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>E</Text>
          </View>
        </View>
        <View style={styles.left}>
          <View
            style={{
              width: width / 1.6,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.texttwo}>ATTITUDE, ALTITUDE</Text>
          </View>
          <View
            style={{
              width: width / 1.6,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.texttwo}>BELIVE, BUILDING</Text>
          </View>
          <View
            style={{
              width: width / 1.6,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.texttwo}>LISTENING, LEARN TO LEAD</Text>
          </View>
          <View
            style={{
              width: width / 1.6,
              borderBottomColor: "#000",
              borderBottomWidth: 1.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.texttwo}>EXCELENCE, EXUBERANCE</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutAble;

const styles = StyleSheet.create({
  maincontainer: {
    width: width,
  },
  headingcontainer: {
    width: width - 40,
    height: 70,
    alignSelf: "center",
    // backgroundColor: "#000",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  aboutcontainer: {
    width: width,
    flexDirection: "row",
    // backgroundColor: "#000",
  },
  right: {
    width: width / 5,
    height: height / 2.2,
    backgroundColor: "rgba(255,255,255,0.8)",
    marginLeft: 20,
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 15,
  },
  left: {
    position: "absolute",
    width: width / 1.5,
    height: height / 2.2,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginRight: 20,
    alignItems: "center",
    right: "0%",
    // overflow: "hidden",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  texttwo: {
    fontSize: 20,
  },
});
