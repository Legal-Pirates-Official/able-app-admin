import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAbout } from '../../axios/about';

const CardsComponents = () => {
	const [awards, setAwards] = useState();

	useEffect(async () => {
		await getAbout().then((res) => {
			setAwards(res.data);
		});
	}, []);

	return (
		<>
			<View style={styles.container}>
				<View style={styles.viewContainer}>
					<View style={styles.subContainer}></View>
					<Image
						style={styles.image}
						source={{
							uri: 'https://loveshayariimages.in/wp-content/uploads/2021/10/1080p-Latest-Whatsapp-Profile-Images-1.jpg'
						}}
					/>
					<View>
						<Text style={styles.text}>Dr.Rajesh Fernando</Text>
						{awards &&
							awards.map((award) => {
								return (
									<Text style={styles.description}>
										Marian James Rajesh Fernando, VP of Business Development &
										Training at ACEnovation, was born on the most holy day of
										all churchgoers, December 25th, bringing joy to his family
										and all those who have been involved with him in two ways.
										Rajesh is a trustworthy and kind individual, and those who
										have had the pleasure of knowing him and working with him
										appreciate him and want for more people like him.
									</Text>
								);
							})}
					</View>
				</View>
			</View>
		</>
	);
};

export default CardsComponents;

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		alignItems: 'center',
		backgroundColor: '#000',
		justifyContent: 'center'
	},
	viewContainer: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		alignItems: 'center',
		justifyContent: 'center'
	},
	subContainer: {
		position: 'absolute',
		width: Dimensions.get('window').width - 20,
		height: 600,
		bottom: 0,
		backgroundColor: 'tomato',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10
	},
	image: {
		width: 250,
		height: 250,
		borderRadius: 150
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		padding: 10
	},
	description: {
		fontSize: 18,
		color: 'black',
		paddingHorizontal: 20,
		textAlign: 'justify',
		zIndex: 1
	}
});
