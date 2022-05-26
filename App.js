import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Topnavigation from "./navigation/navigationtop";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import Loading from "./screens/mainscreens/Loading";
export default function App() {
    const [loading, setLoading] = useState(true);
    const [isNetworkConnected, setIsNetworkConnected] = useState(false);

    useEffect(async () => {
        NetInfo.fetch().then((state) => {
            setIsNetworkConnected(state.isConnected);
            if (state.isConnected) {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        });
    }, []);
    return !isNetworkConnected ? (
        loading ? (
            <Loading />
        ) : (
            <NavigationContainer>
                <Topnavigation />
            </NavigationContainer>
        )
    ) : (
        <View style={styles.container}>
            {/* <Text>No Internet Connection</Text> */}
            <Image
                style={{
                    width: "100%",
                    height: "50%",
                    resizeMode: "contain",
                    // margin: "5%",
                }}
                source={{
                    uri: "https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5303.jpg?w=740&t=st=1653572363~exp=1653572963~hmac=f071c30243b6b29cb5b714616143aec8ed527c37a3d8c9d0d982bf03006dcd14",
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
					color: "black",
					width: "100%",
					height: 50,
                }}
            >
                No Internet Connection
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});
