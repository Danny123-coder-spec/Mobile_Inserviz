import { StyleSheet, Text,Image, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './forgotPassword.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import tw from 'twrnc';
import {COLORS, SIZES} from '../../assets/constants'
import { Fontisto } from '@expo/vector-icons'

const Password = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  return (
    < ScrollView style={styles.forgotContainer} showsVerticalScrollIndicator={false}>
       <TouchableOpacity style={styles.back} onPress={() => navigation.goBack('')}>
        <Icon
          name='chevron-left'
          size={30}
          color='white'
          />
        </TouchableOpacity>
        <View>
          <Image source={require('../../assets/constants/forgotPassword.png')} style={styles.image}/>
        </View>
        <Text style={styles.forgotTxt}>Forgot Password?</Text>
        <Text style={ styles.reset}> We will send the reset instructions.</Text>
        <View style={[tw`p-4`,]}>
          <Text style={styles.emailTxt}>Email Address</Text>
          <View style={styles.textContainer}>
              <TextInput
              value={email}
              placeholder='Email'
              onChangeText={(newEmail) => setEmail(newEmail)}
              style={styles.searchInput}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              />
              <Fontisto name='email' size={24} color={COLORS.gray}/>
          </View>
        </View>
        <TouchableOpacity style={styles.sendCode} onPress={() => {}}>
          <Text style={styles.codeTxt}>Send Code</Text>
        </TouchableOpacity>
        <View style={styles.remember}>
          <Text style={styles.passwordRem}>Remember the password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[tw`ml-90`, styles.back]} onPress={() => navigation.navigate('verify')}>
        <Icon2
          name='chevron-right'
          size={30}
          color='white'
          />
        </TouchableOpacity>

    </ScrollView>
  )
}

export default Password

