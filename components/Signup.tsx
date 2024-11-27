import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Signup({ navigation }: { navigation: any }) {
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
            <Text style={styles.heading}>Signup</Text>
          </View>

          <View>
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

            <TextInput
              style={styles.ti}
              placeholder="Confirm Password"
              placeholderTextColor="white"
            />
          </View>

          <View style={styles.v}>
            <Text style={{fontSize: 18, color: 'white'}}>
              Already have an account ?</Text>
              <TouchableOpacity 
              style = {styles.btn}
              onPress={() => navigation.navigate('Login')}
              >
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
    paddingTop : 8
  },

  ti: {
    width: 350,
    height: 50,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ffffff',
    margin: 15,
    fontSize : 15,
    paddingLeft : 10
  },

  tv: {
    padding: 20,
  },


  tb: {
    color : 'blue',
    fontSize : 20,
    fontWeight : 'bold',
    alignItems : 'center',
    justifyContent : 'flex-end'
    
  },

  v : {
    margin: 43 , 
    flexDirection : 'row',
    paddingLeft : 18
    
    
  },


  btn : {
  // backgroundColor : 'white',
   width : 100,
   height : 30,
   paddingLeft : 7
  
  }
});
