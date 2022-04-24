import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { getAbout } from "../../axios/about";

const CardsComponents = () => {
  const [awards, setAwards] = useState();

  useEffect(async () => {
    await getAbout().then((res) => {
      setAwards(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.subContainer}></View>
        <Image
          style={styles.image}
          source={require("../../assets/3.jpg")}
        />
        <View style={{ width: "80%" }}>
          <Text style={styles.text}>Dr.Rajesh Fernando</Text>
          <Text style={styles.description}>
            Marian James Rajesh Fernando, VP of Business Development & Training
            at ACEnovation, was born on the most holy day of all churchgoers,
            December 25th, bringing joy to his family and all those who have
            been involved with him in two ways. Rajesh is a trustworthy and kind
            individual, and those who have had the pleasure of knowing him and
            working with him appreciate him and want for more people like him.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardsComponents;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    position: "absolute",
    width: Dimensions.get("window").width - 50,
    height: 600,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 10,

    borderWidth: 1,
    borderColor: "#336DF5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    zIndex: 0,
    elevation: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    padding: 10,
    elevation: 12,
  },
  description: {
    fontSize: 18,
<<<<<<< HEAD
    color: "white",
    paddingHorizontal: 40,
    textAlign: "center",
=======
    color: "#000",
    paddingHorizontal: 20,
    textAlign: "justify",
>>>>>>> de1622910b4cecedce396a3145276c2e10a5dd5f
    zIndex: 1,
    elevation: 12,
  },
});
