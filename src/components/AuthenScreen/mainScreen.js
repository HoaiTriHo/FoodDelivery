import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../account/accountScreen';
import CartScreen from '../cart/cartScreen';
import NoticeCart from '../cart/cartGeneral/noticeCart';
import HomeScreen from '../home/homeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import UserPositionModal from '../home/modals/modalUserPosition';
import CategoryMerchant from '../home/modals/modalCategoryMerchant';
import DetailMerchant from '../home/modals/modalDetailMerchant';
import MenuMerchant from '../home/modals/modalMenuMerchant';
import {disabledButtonCancel} from '../../redux/actions/shoppingCartAction';
import {connect} from 'react-redux';
import ModalShoppingCart from '../home/modals/modalShoppingCart';
import UpdateItem from '../cart/modals/modalUpdateItem';
import HandleOrdering from '../cart/modals/modalHandleOrdering';

//Main screen if login success
const Tab = createBottomTabNavigator();
const TabScreen = ({dispatch}) => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#57CFD1',
            inactiveTintColor: '#DAD5D5',
            labelStyle: {
                fontSize: 20
            }
        }}
    >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen
            name='Cart'
            component={CartScreen}
            options={{
                tabBarIcon: () => (
                    <NoticeCart />
                )
            }}
            listeners={()=>({
                tabPress:()=>{
                    dispatch(disabledButtonCancel(true))
                }
            })}
        />
        <Tab.Screen name='Account' component={AccountScreen} />

    </Tab.Navigator>
)
const TabScreens = connect()(TabScreen);
const stackModal = createStackNavigator();

const MainScreen = () => (
    <stackModal.Navigator headerMode='none' mode='modal'>
        <stackModal.Screen name='mainScreen' component={TabScreens} />
        
        <stackModal.Screen name='userLocationModal' component={UserPositionModal} />
        <stackModal.Screen name='categoryMerchant' component={CategoryMerchant} />
        <stackModal.Screen name='detailMerchant' component={DetailMerchant} />
        <stackModal.Screen options={{cardStyle:{backgroundColor: 'transparent'}}} name='menuMerchant' component={MenuMerchant} />
        <stackModal.Screen name='modalCart' component={ModalShoppingCart} />
        <stackModal.Screen options={{cardStyle:{backgroundColor:'transparent'}}} name='modalUpdate' component={UpdateItem} />
        <stackModal.Screen name='handleOrdering' component={HandleOrdering} />

       
    </stackModal.Navigator>
)
export default MainScreen;