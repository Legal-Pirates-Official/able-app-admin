import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { AntDesign } from '@expo/vector-icons'; 
  const { width, height } = Dimensions.get("window");
  
  const YoutubeSlider = ({ data }) => {
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
              <Image source={{ uri: item.image }} style={styles.image} />
              <AntDesign name="youtube" size={70} color="#c4302b" />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };
  export default YoutubeSlider;
  
  const styles = StyleSheet.create({
    listcontainer: {
      height: 350,
      //   backgroundColor: "#fff",
      justifyContent: "center",
    },
    slidercard: {
      width: width / 1.5,
      marginHorizontal: 25,
      backgroundColor: "#fff",
      height: height / 4,
      borderColor: "#fff",
      borderWidth: 2,
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
      height: height / 4,
      borderRadius: 18,
    },
  });
  