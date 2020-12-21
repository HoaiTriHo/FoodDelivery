import {StyleSheet} from 'react-native';

const StyleLogin = StyleSheet.create({
    //Form login
    formLogin:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    containerForm_btn:{
        backgroundColor:'#84DEDD',
        width:'100%',
        paddingBottom:13,
        paddingTop:13,
        alignItems:'center',
        marginTop:10,
        borderRadius:10
    },
    containerForm_text:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    },
    forgot:{
        marginTop:15
    },
    forgot_text:{
        fontSize:15,
        color:'blue'
    },
    //Social
    social:{
        flexDirection:'row',
        //justifyContent:'space-around'
        marginTop:10
    },
    facebook:{
        backgroundColor:'#1a77f2',
        flexDirection:'row',
        alignItems:'center',
        padding:4,
        flex:1,
        borderRadius:10,
        justifyContent:'center'
    },
    google:{
        backgroundColor:'#d34836',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'#d34836',
        padding:7,
        flex:1,
        borderRadius:10,
        justifyContent:'center'
    },
    facebooklogo:{
        width:25,
        height:25
    },
    social_text:{
        color:'white',
        fontWeight:'600',
        fontSize:17
    },
    googlelogo:{
        width:25,
        height:25
    },
    //sign up
    signup:{
        marginTop:10
    },
    signup_text:{
        fontSize:16,
        color:'#1a77f2'
    },
    //buttonskip
    buttonskip:{
        backgroundColor:'#13CE66',
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row'
    },
    //arrow image
    arrow:{
        width:18,
        height:18
    },
    btnMes:{
        color:'red',
        textAlign:'center',
        fontSize:18
    },
    textStyling:{
        letterSpacing:-2
    },
    center:{
        textAlign:'center',
        color:'gray'
    }
});

export default StyleLogin;