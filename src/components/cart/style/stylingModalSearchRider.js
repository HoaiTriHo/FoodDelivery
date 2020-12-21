import {
    StyleSheet
}
from 'react-native';

const Styles = StyleSheet.create({
    wrapContent:{
        width:'95%',
        alignSelf:'center'
    },
    btnCancel:{
        width:'8%'
    },
    textCancel:{
        fontWeight:'bold',
        fontSize:18
    },
    textSearch:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center'
    },
    img:{
        height:200,
        width:200,
        borderRadius:100
    },
    imgWrap:{
        alignItems:'center',
        marginTop:30
    },
    billing:{
        borderTopColor:'gray',
        borderTopWidth:StyleSheet.hairlineWidth,
        marginTop:10
    },
    title:{
        opacity:0.7
    },
    cost:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textTotal:{
        fontSize:20,
        fontWeight:'bold'
    },
    order:{
        marginTop:25
    },
    prepairing:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    textRepairing:{
        fontSize:16,
        opacity:0.7
    },
    line:{
        borderTopColor:'white',
        borderTopWidth:10,
        marginTop:20
    },
    textOrder:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold'
    }
})
export default Styles;