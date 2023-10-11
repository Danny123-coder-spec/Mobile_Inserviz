import { TouchableOpacity,TextInput,Text,Image, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import styles from './signup.style';
import { Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../assets/constants';
import Icon5 from 'react-native-vector-icons/AntDesign';
import Icon6 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome'
import CountryPicker from 'react-native-country-picker-modal'

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = () => {
    setEmailError('');
    setPasswordError('');
    if(!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if(!phone.trim()) {
      setPhoneError('Phone number is required');
      return;
    }

    if(password.length < 6) {
      setPasswordError('Password must be at least 6 characters or above');
      return;
    }

    if(!email.trim() || !phone.trim() || !password) {
      setEmailError('Email is required');
      setPasswordError('Phone number is required');
    }
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <TouchableOpacity style={styles.back}onPress={() => navigation.goBack('')}>
        <Icon
          name='chevron-left'
          size={30}
          color='white'
          />
        </TouchableOpacity>
       <View style={styles.signUpContainer}>
          <View style={styles.welcomeBack}>
            <Text style={styles.signingUp}>Sign up to <Text style={styles.inserviz}>Inserviz</Text> today!</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.emailTxt}>Email</Text>
            <View style={styles.textContainer}>
             <View>
              <Fontisto name='email' size={24} color={COLORS.gray}/>
                <TextInput
                    value={email}
                    placeholder='Email'
                    onChangeText={(newText) => setEmail(newText)}
                    style={styles.searchInput}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
             </View>
              
            </View>
            {emailError ? <Text style={styles.validation}>{emailError}</Text> : null}
            <View style={styles.phone}>
                <Text style={styles.phoneTxt}>Phone Number</Text>
                <View style={styles.phoneContainer}>
                   <View style={styles.phoneIcon}>
                    <Icon4 name='phone' size={24} color={COLORS.gray}/>
                        <TextInput
                            value={phone}
                            placeholder='Phone Number'
                            onChangeText={(newPhone) => setPhone(newPhone)}
                            style={styles.searchInput}
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                   </View>
                    
                </View>
                {phoneError ? <Text style={styles.validation}>{phoneError}</Text> : null}
            </View>
            <View style={styles.passwordContainer}>
              <Text style={styles.emailTxt}>Password</Text>
              <View style={styles.textContainer}>
                <View style={styles.iconInput}>
                    <Icon5  name='lock1' size={24} color={COLORS.gray}/>
                    <TextInput
                        value={password}
                        placeholder='Password'
                        onChangeText={(newPassword) => setPassword(newPassword)}
                        style={styles.searchpassInput}
                        secureTextEntry={!isPasswordVisible}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon1
                    name={isPasswordVisible ? 'eye' : 'eye-slash'}
                    size={24}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              </View>

            </View>
            {passwordError ? <Text style={styles.validation}>{passwordError}</Text> : null}
            <View style={styles.passwordContainer}>
              <Text style={styles.emailTxt}>Confirm Password</Text>

              <View style={styles.textContainer}>
              <Icon6 name='lock1' size={24} color={COLORS.gray}/>
                <TextInput
                    value={password}
                    placeholder='Password'
                    onChangeText={(newPassword) => setPassword(newPassword)}
                    style={styles.searchpassInput}
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon1
                    name={isPasswordVisible ? 'eye' : 'eye-slash'}
                    size={24}
                    color={COLORS.gray}
                  />
                </TouchableOpacity>
              </View>

            </View>
            {passwordError ? <Text style={styles.validation}>{passwordError}</Text> : null}
        
            <View style={styles.loginbtn}>
              <TouchableOpacity style={styles.login} onPress={handleSignUp}>
                <Text style={styles.loginTxt}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.continueWith}>
              <View style={styles.empty}/>
              <Text style={styles.continueTxt}>Or Continue With</Text>
              <View style={styles.empty}/>
            </View>
            <View style={styles.imageContainer}>
              < TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={require('../../assets/constants/google.png')} size={30}/>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={require('../../assets/constants/apple-logo.png')} size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={require('../../assets/constants/facebook.png')} size={30}/>
              </TouchableOpacity>
            </View>
            <View style={styles.dontHave}>
              <Text style={styles.account}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.signUp}>login</Text>
              </TouchableOpacity>
            </View>


          </View>
       </View>
       
      </View>
      
    </ScrollView>
  )
}

export default Signup



