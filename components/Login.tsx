import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/bk.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Text style={styles.heading}>Login</Text>
          </View>

          <View>
            <TextInput
              style={styles.ti}
              placeholder="Enter Your Name"
              placeholderTextColor="white"
            />

            <TextInput
              style={styles.ti}
              placeholder="Enter E-mail"
              placeholderTextColor="white"
            />

            <TextInput
              style={styles.ti}
              placeholder="Enter Password"
              placeholderTextColor="white"
            />
          </View>

          <View style={{margin: 42}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.tb}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 98,
    color: 'white',
    paddingTop: 8,
  },

  ti: {
    width: 350,
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ffffff',
    margin: 15,
    fontSize: 15,
    paddingLeft: 10,
  },

  tv: {
    padding: 20,
  },

  btn: {
    backgroundColor: 'white',
    width: 90,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tb: {
    color : 'blue',
    fontSize : 20,
    fontWeight : 'bold'
  },
});
