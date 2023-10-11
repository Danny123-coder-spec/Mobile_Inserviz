import { Text,View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './newemail.style'
import { COLORS } from '../../assets/constants'
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import tw from 'twrnc'

const NewEmail = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Icon
                name='chevron-left'
                size={30}
                color='white'
                />
            </TouchableOpacity>
            <Image source={require('../../assets/constants/newEmail.png')} style={styles.image}/>
            <View style={styles.passwordContainer}>
                <Text style={styles.emailTxt}>New Password</Text>
                <View style={styles.textContainer}>
                    <TextInput
                        value={newPassword}
                        placeholder='Password'
                        onChangeText={(password) => setNewPassword(password)}
                        style={styles.searchInput}
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
            <View style={styles.passwordContainer}>
                <Text style={styles.emailTxt}>Confirm Password</Text>
                <View style={styles.textContainer}>
                    <TextInput
                        value={confirmPassword}
                        placeholder='Password'
                        onChangeText={(newPassword) => setConfirmPassword(newPassword)}
                        style={styles.searchInput}
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
            <TouchableOpacity style={styles.createPass} onPress={() => {}}>
                <Text style={styles.newPassTxt}>Create New Password</Text>
            </TouchableOpacity>
            
        </View>
      
    </ScrollView>
  )
}

export default NewEmail

