import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../assets/constants'

const styles = StyleSheet.create({
    imageBackground:{
        resizeMode: 'cover',
        aspectRatio:0.7,
        height:'100%'
        
    },
    overlay:{
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the alpha value (0.5) to control the darkness of the overlay
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop:'60%',
     },
     text:{
        color:COLORS.lightWhite,
        width:370,
        marginHorizontal:20,
        fontFamily:'medium',
        fontSize:SIZES.large
     },
     signUpbtn:{
        backgroundColor:"#00a7ac",
        padding:SIZES.small + 2,
        marginVertical:10,
        marginHorizontal:13,
        width:'67%',
        borderRadius:7,

    },
    signTxt:{
        paddingLeft:'37%',
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
    },
    login:{
        backgroundColor:"transparent",
        padding:SIZES.small + 2,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:7,
        width:'67%',
        borderColor:'#00a7ac',
        borderWidth:1

    },
    loginTxt:{
        paddingLeft:'39%',
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
    },
})

export default styles