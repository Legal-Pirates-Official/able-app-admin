import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Image,
	Dimensions,
	StatusBar,
	Animated
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { liveevent, yt } from '../../data/liveevent.data';
import { aboutget, getEvents, getyoutube } from '../../axios/home.axios';
import Swipercontainer from '../../components/swipercontainer';
import Gridcont from '../../components/grid/grid';
import Loading from './Loading';
import Slider from '../../components/slider/slider';
import YoutubeSlider from '../../components/slider/youtubeSlider';
import AboutAble from '../../components/aboutable';
import { Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

const Home = ({ navigation }) => {
	const [about, setAbout] = useState([]);
	const [events, setEvents] = useState([]);
	const [youtube, setYoutube] = useState([]);

	const fetchHomeAbout = () =>
		aboutget()
			.then((res) => {
				setAbout(res.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	const fetchLiveEvents = () =>
		getEvents().then((res) => {
			setEvents(res.data);
			console.log(res.data);
		});

	const fetchYoutube = () =>
		getyoutube().then((res) => {
			setYoutube(res.data);
		});

	useEffect(() => {
		fetchHomeAbout();
	}, [about]);

	useEffect(() => {
		fetchLiveEvents();
	}, [events]);

	useEffect(() => {
		fetchYoutube();
	}, [youtube]);

	return (
		<>
			<SafeAreaView style={styles.container}>
				<LinearGradient
					colors={['#1D47BA', '#5F9BA9', '#A3D4DE', '#F6F9FB']}
					style={styles.areaone}
				>
					<ScrollView style={styles.scrollView}>
						<View style={styles.namecontainer}>
							<View>
								<Text style={styles.name}>Rajesh Fernando</Text>
								<Text style={styles.namedescription}>Motivation Speaker</Text>
							</View>
							<View>
								<Octicons name='smiley' size={24} color='#fff' />
							</View>
						</View>
						<View style={styles.swipercontainer}>
							<View style={styles.swiperheadingcont}>
								<Text style={styles.swipertext}>Live Events</Text>
							</View>
							{/* <Swipercontainer liveevent={yt} title={"Live Events"} /> */}
							<Slider data={yt} />
						</View>
						<View style={styles.aboutcontainer}>
							<AboutAble />
						</View>
						<View style={styles.youtube}>
							<View style={styles.swiperheadingcont}>
								<Text style={styles.swipertext}>Youtube Videos</Text>
							</View>
							<YoutubeSlider data={yt} />
						</View>
					</ScrollView>
				</LinearGradient>
				<StatusBar
					barStyle='light-content'
					hidden={false}
					backgroundColor='#1D47BA'
					translucent={true}
				/>
			</SafeAreaView>
		</>
	);
};
export default Home;
const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
		paddingBottom: 50,
		marginBottom: 50
	},
	scrollView: {
		width: width
	},
	areaone: {
		// height: 250,
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
		height: height
	},
	namecontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: width - 40,
		alignSelf: 'center',
		height: 200,
		alignItems: 'center'
	},
	name: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 10
	},
	namedescription: {
		fontSize: 20,
		color: '#fff'
	},
	swipercontainer: {
		height: 470,
		width: width,
		justifyContent: 'center'
		// backgroundColor: "black"
	},
	swiperheadingcont: {
		width: width - 40,
		height: 27,
		justifyContent: 'center',
		alignSelf: 'center'
	},
	swipertext: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#fff'
	},
	aboutcontainer: {
		width: width,
		height: 520
		// backgroundColor: "#fff",
	},
	youtube: {}
});
