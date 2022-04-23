import { ScrollView, StyleSheet, StatusBar,SafeAreaView } from 'react-native';
import React from 'react';
import CardsComponents from '../../components/about/CardsComponents';
import AwardsComponents from '../../components/about/AwardsComponents';
import { LinearGradient } from "expo-linear-gradient";


const About = () => {
	return (
		<LinearGradient
		colors={["#1D47BA", "#5F9BA9", "#A3D4DE", "#F6F9FB"]}
		style={styles.container}>
			<ScrollView style={{ marginTop: StatusBar.currentHeight }}>
				<CardsComponents />
				<AwardsComponents />
			</ScrollView>
		</LinearGradient>
	);
};

export default About;

const styles = StyleSheet.create({});
