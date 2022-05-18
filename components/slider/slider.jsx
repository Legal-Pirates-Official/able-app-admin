import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const Slider = ({ data }) => {
  return (
    <FlatList
      data={data}
      style={{ width: width, height: 400 }}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <View style={styles.listcontainer}>
          <View style={styles.slidercard}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.event_url)}>
              <Text style={styles.buttontext}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default Slider;

const styles = StyleSheet.create({
  listcontainer: {
    height: 450,
    //   backgroundColor: "#fff",
    justifyContent: "center",
  },
  slidercard: {
    width: width / 1.5,
    marginHorizontal: 25,
    backgroundColor: "#fff",
    height: height / 2.6,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  image: {
    position: "absolute",
    width: width / 1.5,
    height: height / 2.6,
    borderRadius: 18,
  },
  button: {
    padding: 10,
    backgroundColor: "#EEF6FF",
    borderRadius: 10,
    bottom: "15%",
    position: "absolute",
  },
  buttontext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1D47BA",
  },
});
