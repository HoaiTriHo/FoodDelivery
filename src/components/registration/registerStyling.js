import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Styles = StyleSheet.create({
    //Start component Register
    containerRegister:{
        flex:1,
        //backgroundColor:'red',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    //End component Register

    //Start Component title 
    containerTitle_Text1:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold'
    },
    containerTitle_Text2:{
        color:'darkgray',
        fontSize:15
    },
    //End Component title
    container:{
        flex:1
    },
    //Start component Form
    containerForm:{
        flex:2.7,
        alignItems:'center'
    },
    cancelArea:{
        flex:0.3
    },
    containerForm_btn:{
        backgroundColor:'#13CE66',
        width:wp('80%'),
        alignItems:'center',
        marginTop:50,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:10,
    },
    containerForm_text:{
        fontSize:22,
        fontWeight:'bold'
    },
    //End component Form

    //Start input component
    containerInput:{
        //backgroundColor:'red',
        width:wp('80%'),
        marginTop:30,
        alignItems:'center',
    },
    containerInput_Input:{
        height:25,
        borderBottomWidth:1,
        borderBottomColor:'darkgray',
        width:wp('80%'),
        marginTop:10,
        fontSize: 18
    },
    containerInput_label:{
        fontSize:wp('5%'),
        marginTop:20
    },
    containerInput_message:{
        color:'red'
    },
    message_success:{
        color:'#13CE66'
    },
    disabled_btn:{
        backgroundColor:'gray',
        opacity:0.15
    }
    //End input component
});
export default Styles;