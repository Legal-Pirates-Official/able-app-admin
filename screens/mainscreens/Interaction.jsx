import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Dimensions
} from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getSlot, sendMail } from '../../axios/meet';
const { width, height } = Dimensions.get('window');
const Interaction = () => {
	const [close, setClose] = useState(true);
	const [dates, setDates] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [selectedTime, setSelectedTime] = useState('');
	const [slots, setSlots] = useState([]);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		var strng = date.toLocaleString();
		setDates(strng.slice(0, strng.indexOf(',')));
		getSlot(strng.slice(0, strng.indexOf(','))).then((res) => {
			setSlots(JSON.parse(res[0].time_slot));
		});
		hideDatePicker();
		setClose(false);
		setSlots([]);
	};
	const handleTime = (item) => {
		setSelectedTime(item);
		setClose(true);
	};

	const handleMail = () => {
		sendMail(email, name, dates, selectedTime, slots).then((res) => {});
	};
	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				paddingTop: 60,
				backgroundColor: '#000'
			}}
		>
			<View
				style={{
					width: width / 1.2,
					backgroundColor: '#336DF5',
					padding: 10,
					borderRadius: 20,
					height: height / 2,
					shadowColor: '#fff',
					shadowOffset: { width: 10, height: 10 },
					shadowOpacity: 1,
					shadowRadius: 3,
					elevation: 5
				}}
			>
				<View
					style={{
						borderColor: '#fff',
						borderBottomWidth: 4,
						borderRadius: 10,
						width: width / 2.3,
						alignSelf: 'center'
					}}
				>
					<Text
						style={{
							fontSize: 23,
							fontWeight: 'bold',
							color: '#fff',
							alignSelf: 'center'
						}}
					>
						APPOINTMENT
					</Text>
				</View>
				<TouchableOpacity
					style={{
						borderColor: '#fff',
						borderWidth: 2,
						padding: 15,
						paddingHorizontal: 20,
						borderRadius: 30,
						textAlign: 'center',
						marginTop: 20,
						width: width / 2,
						alignSelf: 'center',
						justifyContent: 'center',
						alignContent: 'center'
					}}
					onPress={() => setDatePickerVisibility(true)}
				>
					<Text style={[styles.text, { color: '#fff', textAlign: 'center' }]}>
						{selectedTime
							? `${dates} ${selectedTime.time_slot}-${selectedTime.time_slot_am_pm}`
							: 'Pick a Date'}
					</Text>
				</TouchableOpacity>

				{isDatePickerVisible ? (
					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode='date'
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
					/>
				) : null}

				{!close ? (
					<View style={styles.timeslot}>
						<ScrollView>
							{slots.length > 0 ? (
								slots.map((item, index) => {
									return (
										<TouchableOpacity
											onPress={() => handleTime(item)}
											style={styles.slot}
										>
											<Text style={styles.btn}>
												{item.time_slot}-{item.time_slot_am_pm}
											</Text>
										</TouchableOpacity>
									);
								})
							) : (
								<Text>No Slots Available</Text>
							)}
						</ScrollView>
					</View>
				) : null}
				<TextInput
					style={styles.input}
					onChangeText={(text) => setEmail(text)}
					value={email}
					placeholder='Enter Email'
					placeholderTextColor='#fff'

					// keyboardType="numeric"
				/>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setName(text)}
					value={name}
					placeholder='Enter Name'
					placeholderTextColor='#fff'
					// keyboardType="numeric"
				/>
				<TouchableOpacity
					style={{
						backgroundColor: '#fff',
						padding: 15,
						paddingHorizontal: 20,
						borderRadius: 30,
						marginTop: 20,
						width: width / 2,
						alignSelf: 'center'
					}}
					onPress={() => handleMail()}
				>
					<Text
						style={[
							styles.text,
							{
								color: '#000',
								justifyContent: 'center',
								alignContent: 'center',
                textAlign: "center",
							}
						]}
					>
						Send Request
					</Text>
				</TouchableOpacity>
			</View>
		</View>
		// </View>
	);
};

export default Interaction;

const styles = StyleSheet.create({
	input: {
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: '80%',
		borderRadius: 10,
		alignSelf: 'center',
		borderColor: '#fff',
		color: '#fff'
	},
	timeslot: {
		// position: 'absolute',
		width: '80%',
		borderRadius: 10,
		elevation: 18,
		backgroundColor: '#fff',
		marginVertical: 50,
		height: 300,
		// backgroundColor: "grey",
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	slot: {
		// backgroundColor: '#f0f0f0',
		padding: 10,
		margin: 10,
		borderColor: '#f0f0f0',
		borderWidth: 3,
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		borderRadius: 10,
		textAlign: 'center'
	},
	btn: {
		textAlign: 'center'
	},
	text: { width: '100%', fontSize: 18, fontWeight: 'bold', color: '#fff' }
});
