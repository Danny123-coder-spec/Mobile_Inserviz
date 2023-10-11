import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../assets/constants'

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    // },
    loginContainer:{
        paddingTop:50,
    },
    back:{
        backgroundColor:"#00a7ac",
        borderRadius:20,
        height:30,
        width:30,
        margin:10,
        marginTop:20,  
    },
    welcomeBack:{
        padding:SIZES.medium,
    },
    welcome:{
        fontFamily:'bold',
        fontSize:SIZES.xLarge + 4,
        color:'#00a7ac'
    },
    welback:{
        fontFamily:'bold',
        fontSize:SIZES.xLarge + 4,
        color:COLORS.gray
    },
    welTxt:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
        color:COLORS.gray
    },
    email:{
        padding:SIZES.medium,
    },
    emailTxt:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    },
    textContainer:{
        backgroundColor: 'rgba(211,211,211,0.2)',
        flexDirection:'row',
        // justifyContent:'space-between',
        borderRadius: 7,
        padddingRight:2,
        paddingVertical:SIZES.small + 2,
        paddingHorizontal:SIZES.small,
        alignItems:'center',
        // padding: 12, 
        gap:10,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: 'rgba(204, 204, 204, 0.5)', 
        
    },
    imagePass:{
        color:'gray'
    },
    iconInput:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    textContainerPass:{
        backgroundColor: 'rgba(211,211,211,0.2)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius: 7,
        padddingRight:2,
        alignItems:'center',
        paddingVertical:SIZES.small + 2,
        paddingHorizontal:SIZES.small,
        marginVertical: 7,
        borderWidth: 1,
        borderColor: 'rgba(204, 204, 204, 0.5)', 
    },
    emailValid:{
        flexDirection:'column'
    },
    validation:{
        color:'red',
        fontFamily:'medium',
        fontSize:SIZES.small -2,
        paddingHorizontal: 7,
        paddingVertical:1,
    },
    searchPassInput:{
        color: '#333',
        width:'70%',
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    },
    searchEmailInput:{
        color: '#333',
        width:'90%',
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    },


    passwordContainer:{
        paddingTop:SIZES.small -2,
    },
    checkbox:{
        width: 20,
        height: 20,
        borderWidth: 1.4,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        
    
    },
    checked: {
        backgroundColor: '#00a7ac',
        alignSelf: 'center',
      },

    unchecked: {
       backgroundColor: 'transparent',
     },
     containerRemember:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
     },
    remember:{
        flexDirection:'row',
        alignItems:'center'
        
    },
    rememberTxt:{
        fontFamily:'medium',
    },
    forgotTxt:{
        fontFamily:'medium',

    },
    loginbtn:{
        backgroundColor:"#00a7ac",
        padding:SIZES.small + 2,
        marginVertical:10,
        borderRadius:7,

    },
    loginTxt:{
        alignSelf:'center',
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
    },
    continueWith:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    empty:{
        flex: 1,
        height: 1,
        backgroundColor: '#00a7ac'
    },
    continueTxt:{
        paddingHorizontal: 10,
        color: '#00a7ac',
        fontWeight: 'bold',
    },
    imageContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:10,
    },
    image:{
        resizeMode:'contain',
        width:35,
        height:35,
    },
    dontHave:{
        flexDirection:'row',
        paddingTop:13,
        gap:10,
        alignItems:'center',
        justifyContent:'center'
    },
    account:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
        color:'#00a7ac'
    },
    signUp:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,

    }

    


})

export default styles