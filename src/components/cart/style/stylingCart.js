import {
    StyleSheet,
    Dimensions
}
    from 'react-native';

const Styles = StyleSheet.create({
    //Notice cart
    noticeWrap: {
        backgroundColor: 'red',
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    noticeText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    //Cart
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cartWrap: {
        flex: 1
    },
    cartTitle: {
        alignItems: 'center',
        // borderBottomColor:'gray',
        // borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center'
    },
    cartText: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '95%',
        textAlign: 'center'
    },
    btnCancel: {
        backgroundColor: 'gray',
        width: 23,
        height: 23,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCancel: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    addressUser: {
        paddingTop: 15,
        paddingBottom: 15,
        borderTopColor: '#EEEEEE',
        borderTopWidth: 10
    },
    title: {
        fontSize: 15,
        opacity: 0.7
    },
    address: {
        fontWeight: 'bold',
        fontSize: 20
    },
    changeAddress: {
        //color: '#13CE66'
        color:'#57CFD1'
    },
    wrapContent: {
        width: '95%',
        alignSelf: 'center'
    },
    ordering: {
        borderTopColor: '#EEEEEE',
        borderTopWidth: 10,
        paddingTop: 10
    },
    itemWrap: {
        flexDirection: 'row',
        marginTop: 10
    },
    amount: {
        width: '10%',
        alignSelf: 'center'
    },
    nameFood: {
        width: '62%'
    },
    price: {
        width: '20%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    deteleItem: {
        width: '8%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    btnDetele: {
        backgroundColor: 'gray',
        width: 18,
        height: 18,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDelete: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
    },
    total: {
        width: '100%',
        borderTopWidth: 10,
        borderTopColor: '#EEEEEE',
        paddingTop: 5
    },
    btnOrder: {
        backgroundColor: '#57CFD1',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        marginTop: 30
    },
    textOrder: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'white'
    },
    totalPrice: {
        fontWeight: 'bold',
        fontSize: 20
    },
    bill: {
        borderTopColor: 'gray',
        borderTopWidth: StyleSheet.hairlineWidth,
        marginTop: 12,
        flexGrow:1
    },
    costFood: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    emptyCart: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    imgEmpty: {
        height: 150,
        width: 150
    },
    totalPriceWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgCash: {
        width: 30,
        height: 30
    },
    btnCash: {
        backgroundColor: '#57CFD1',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    textCash: {
        fontWeight: 'bold',
        fontSize: 15,
        color:'white'
    },
    screenBackground: {
        width:'100%',
        height:Dimensions.get('screen').height,
        backgroundColor:'black',
        position:'absolute',
        opacity:0.5
    }
});
export default Styles;