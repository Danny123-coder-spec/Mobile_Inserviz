import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../assets/constants'

const styles = StyleSheet.create({
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
    emailTxt:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    },
    passwordContainer:{
        paddingTop:SIZES.small -2,
        paddingHorizontal:10
    },
    textContainer:{
        // backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius: 7,
        padding: 12, 
        marginVertical: 7,
        borderWidth: 1,
        borderColor: '#ccc', 
        
    },
    createPass:{
        backgroundColor:"#00a7ac",
        padding:SIZES.small,
        marginHorizontal:13,
        borderRadius:7,
        marginTop:7

    },
    newPassTxt:{
        alignSelf:'center',
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
    },
})

export default styles