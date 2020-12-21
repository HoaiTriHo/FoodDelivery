import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

const Styles = StyleSheet.create({
    container:{
        flex:1
    },
    inforUser:{
        paddingTop:width*0.25,
        paddingBottom:width*0.05,
        backgroundColor:'#57CFD1',
        justifyContent:'center'
    },
    text_wrap:{
        alignItems:'center'
    },
    image_wrap:{
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    option:{
        flex:2,
        paddingTop:20
    },
    profile:{
        color:'white',
        fontSize:20,
        fontWeight:'600'
    },
    item:{
        borderTopColor:'#E7E5E5',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#E7E5E5',
        borderBottomWidth:StyleSheet.hairlineWidth,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        backgroundColor:'#E6E3E3',
        marginTop:10
    },
    itemText:{
        fontSize:16
    },
    textMes:{

    },
    textWrong:{
        textAlign:'center',
        color:'red'
    },
    subProfile:{
        width:width*0.8,
        alignSelf:'center',
    },
    disabled:{
        color:'gray'
    },
    btnUpdate:{
        backgroundColor:'#57CFD1',
        width:width*0.2,
        marginTop:16,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        alignSelf:'center'
    },
    textUpdate:{
        color:'white',
        fontWeight:'bold'
    },
    textChangePassword:{
        color:'#57CFD1'
    },
    popup:{
        backgroundColor:'white',
        width:'85%',
        alignSelf:'center',
        height:'50%',
        position:'absolute',
        shadowOpacity:0.5,
        top:'25%'
    },
    show:{
        display:'flex'
    },
    close:{
        // position:'absolute',
        // top:0,
        // right:0,
        width:'10%',
        alignSelf:'flex-end'
    },
    textExist:{
        fontWeight:'bold',
        fontSize:24
    }
});
export default Styles;