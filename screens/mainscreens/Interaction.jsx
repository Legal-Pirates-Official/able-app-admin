import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getSlot, sendMail } from "../../axios/meet";
const { width, height } = Dimensions.get("window");
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
    <LinearGradient
      colors={["#1D47BA", "#5F9BA9", "#A3D4DE", "#F6F9FB"]}
      style={{
        // justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingTop: 60,
        backgroundColor: "#000",
      }}
    ><ScrollView  style={{
      flex: 1,
      
    }}>
      <View
        style={{
          height: height / 4,
          // borderColor: "#000",
          // borderBottomWidth: 4,
          // borderRadius: 10,
          width: width - 40,
          alignSelf: "center",
        }}
      >
        <View style={{ top: 50 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 10,
              // alignSelf: "center",
            }}
          >
            APPOINTMENT
          </Text>
          <Text style={{ fontSize: 20, color: "#fff" }}>
            Book your appointment now!
          </Text>
        </View>
      </View>
      <View
        style={{
          width: width / 1.2,
          backgroundColor: "#F6F9FB",
          padding: 10,
          borderRadius: 20,
          // height: height / 2.3,
          shadowColor: "#000",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 3,
          marginBottom:100,
          elevation: 5,
          justifyContent: "space-evenly",
        }}
      >
        {isDatePickerVisible ? (
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
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
        <View style={styles.inputcontainer}>
          <Text>Enter Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}

            // keyboardType="numeric"
          />
        </View>
        <View style={styles.inputcontainer}>
          <Text>Enter Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            // keyboardType="numeric"
          />
        </View>
        <View style={{ flexDirection: "row", width: '100%', justifyContent: "space-evenly" ,marginTop:50}}>
          <TouchableOpacity
            style={{
              borderColor: "#155F9D",
              borderWidth: 2,
              padding: 15,
              paddingHorizontal: 20,
              borderRadius: 30,
              // marginTop: 20,
              width: width / 3.2,
              alignSelf: "center",
            }}
            onPress={() => setDatePickerVisibility(true)}
          >
            <Text style={[styles.text, { color: "#155F9D" }]}>
              {selectedTime
                ? `${dates} ${selectedTime.time_slot}-${selectedTime.time_slot_am_pm}`
                : "Pick a Date"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#155F9D",
              padding: 15,
              paddingHorizontal: 20,
              borderRadius: 30,
              // marginTop: 20,
              width: width / 3.2,
              alignSelf: "center",
              alignItems: 'center',
            }}
            onPress={() => handleMail()}
          >
            <Text style={[styles.text, { color: "#fff" }]}>Send Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </LinearGradient>
    // </View>
  );
};

export default Interaction;

const styles = StyleSheet.create({
  inputcontainer: {
    width: "80%",
    alignSelf: "center",
  },
  input: {
    height: 50,
    // margin: 12,
    padding: 10,
    borderBottomWidth: 1,
    width: "100%",
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "#000",
    color: "#000",
  },
  timeslot: {
    // position: 'absolute',
    width: "100%",
    borderRadius: 10,
    elevation: 18,
    backgroundColor: "#ffffff",
    marginVertical: 50,
    height: 300,
    // backgroundColor: "grey",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  slot: {
    // backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    borderColor: "#000000",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    textAlign: "center",
  },
  btn: {
    textAlign: "center",
  },
  text: { width: "100%", fontSize: 16, fontWeight: "bold", color: "#000", textAlign: "center" },
});
