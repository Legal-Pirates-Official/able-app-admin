import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import CardsComponents from '../../components/about/CardsComponents';
import AwardsComponents from '../../components/about/AwardsComponents';

const About = () => {
	return (
		<>
			<ScrollView style={{ marginTop: StatusBar.currentHeight }}>
				<CardsComponents />
				<AwardsComponents />
			</ScrollView>
		</>
	);
};

export default About;

const styles = StyleSheet.create({});
