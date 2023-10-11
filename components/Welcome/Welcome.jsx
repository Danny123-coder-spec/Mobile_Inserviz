import { ImageBackground, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './welcome.style';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'

const Welcome = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <ImageBackground source={require('../../assets/constants/welcomeImg.png')}  
              style={styles.imageBackground}>
              <View style={styles.overlay}>
                 <Text numberOfLines={4} style={styles.text}><Text style={{color:'#00a7ac'}}>
                  Join</Text> us today to transform the gig economy and empower
                   <Text style={{color:'#00a7ac'}}>African</Text> youth.</Text> 
                 <View>
                    <TouchableOpacity style={styles.signUpbtn} onPress={() => navigation.navigate('Sign up')}>
                      <Text style={styles.signTxt}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('login')}>
                      <Text style={styles.loginTxt}>Login</Text>
                    </TouchableOpacity>
                 </View>
              </View>
          </ImageBackground>
          
      </View>
  )
}

export default Welcome
