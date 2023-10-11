import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../assets/constants";


const styles = StyleSheet.create({
    forgotImg:{
        width:100,
        height:100,
        resizeMode:'contain',
    },
    back:{
        backgroundColor:"#00a7ac",
        borderRadius:20,
        height:30,
        width:30,
        margin:10,
        marginTop:20,  
    },
    image:{
        marginHorizontal:50,
        marginVertical:20,
    },
    forgotTxt:{
        fontFamily:'medium',
        fontSize:SIZES.large,
        alignSelf:'center'
    },

    emailTxt:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    },
    reset:{
        fontFamily:'medium',
        paddingHorizontal:30,
    },

    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius: 7,
        padding: 12, 
        marginVertical: 7,
        borderWidth: 1,
        borderColor: '#ccc',  
    },
    sendCode:{
        backgroundColor:"#00a7ac",
        padding:SIZES.small,
        marginHorizontal:13,
        borderRadius:7,

    },
    codeTxt:{
        alignSelf:'center',
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
    },
    remember:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:12,
        gap:4,

    },
    passwordRem:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
        color:"#00a7ac"
    },
    login:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    }

})

export default styles