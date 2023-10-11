import { TouchableOpacity,TextInput,Text,Image, View, SafeAreaView , ScrollView} from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from '@rneui/themed';
import styles from './login.style'
import { Fontisto } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../assets/constants'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import Icon4 from 'react-native-vector-icons/AntDesign';


const Login = () => {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [emailError , setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    setEmailError('');
    setPasswordError('');
    if(!email.trim()) {
      setEmailError('Email of phone number is required');
      return;
    }
   
    if(password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    if(emailError || passwordError) {
      setEmailError('Please enter a valid email address or phone number');
      setPasswordError('Password must be at least 6 characters');
    };
  }
  
  const toggleCheckbox = () => setChecked(!checked);
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
       <View style={styles.loginContainer}>
          <View style={styles.welcomeBack}>
            <Text style={styles.welcome}>Welcome <Text style={styles.welback}>Back!</Text></Text>
            <Text style={styles.welTxt}>Great to see you again</Text>
          </View>
          <View style={styles.email}>
            <Text style={styles.emailTxt}>Email / Phone Number</Text>
            <View style={styles.textContainer}>
                <Fontisto name='email' size={27} color={COLORS.gray}/>
                <TextInput
                    value={email}
                    placeholder='Email or phone'
                    onFocus={() => setEmailError('')}
                    onChangeText={(newText) => setEmail(newText)}
                    style={styles.searchEmailInput}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            {emailError ? <Text style={styles.validation}>{emailError}</Text> : null}
            <View style={styles.passwordContainer}>
              <Text style={styles.emailTxt}>Password</Text>
              <View style={styles.textContainerPass}>
                <View style={styles.iconInput}>
                <Icon4 name='lock1' size={27} color={COLORS.gray}/>
                  <TextInput
                      value={password}
                      placeholder='Password'
                      onFocus={() => setPasswordError('')}
                      onChangeText={(newPassword) => setPassword(newPassword)}
                      style={styles.searchPassInput}
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
              {passwordError ? <Text style={styles.validation}>{passwordError}</Text> : null}

            </View>
            <View style={styles.containerRemember}>
                <View style={styles.remember}>
                  <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="#00a7ac"
                  />
                    <Text style={styles.rememberTxt}>Remember Me</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("forgot")}>
                  <Text style={styles.forgotTxt}>Forgot password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginbtn}>
              <TouchableOpacity style={styles.login} onPress={handleLogin}>
                <Text style={styles.loginTxt}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.continueWith}>
              <View style={styles.empty}/>
              <Text style={styles.continueTxt}>Or Continue With</Text>
              <View style={styles.empty}/>
            </View>
            <View style={styles.imageContainer}>
              < TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={require('../assets/constants/google.png')} size={30}/>
              </TouchableOpacity >
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={require('../assets/constants/apple-logo.png')} size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={require('../assets/constants/facebook.png')} size={30}/>
              </TouchableOpacity>
            </View>
            <View style={styles.dontHave}>
              <Text style={styles.account}>Dont have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                <Text style={styles.signUp}>Sign up</Text>
              </TouchableOpacity>
            </View>


          </View>
       </View>
       
      </View>
      
    </ScrollView>
  )
}

export default Login

