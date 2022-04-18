import { useEffect, useState } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import Topnavigation from './navigation/navigationtop';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Loading from './screens/mainscreens/Loading'
export default function App() {
  const [loading, setLoading] = useState(true);
	const [isNetworkConnected, setIsNetworkConnected] = useState(false);
 
	useEffect(async () => {
		NetInfo.fetch().then((state) => {
			setIsNetworkConnected(state.isConnected);
      if(state.isConnected){
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
		});
	}, []);
	return isNetworkConnected ? (
    loading ? (<Loading/>) : (
		<NavigationContainer>
			<Topnavigation />
		</NavigationContainer>)
	) : (
		<View style={styles.container}>
			<Text>No Internet Connection</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
