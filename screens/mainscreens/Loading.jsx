import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABLE</Text>
      <Text style={styles.title}>Dr. Rajesh Fernando</Text>
      <Image style={{
        width: '90%',
        height: 300,
      }} source={{uri:'https://res.cloudinary.com/dn3s6sgki/image/upload/v1650284469/ABLE/EBWM5CXU4AMVtrE_c5qifg.jpg'}}></Image>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})