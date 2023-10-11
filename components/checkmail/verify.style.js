import {StyleSheet}from 'react-native'
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
    check:{
        fontFamily:'medium',
        fontSize:SIZES.large,
        alignSelf:'center'
    },
    enter:{
        alignSelf:'center',
        fontFamily:'medium',

    },
    digits:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },
    inputDigit:{
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    verify:{
        backgroundColor:"#00a7ac",
        padding:SIZES.small,
        marginHorizontal:13,
        borderRadius:7,

    },
    verifyTxt:{
        alignSelf:'center',
        fontFamily:'medium',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
    },
    edit:{
        flexDirection:'row',
        gap:10
    },
    recode:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
        color:"#00a7ac"
    },
    resend:{
        fontFamily:'medium',
        fontSize:SIZES.small + 2,
    }

})

export default styles