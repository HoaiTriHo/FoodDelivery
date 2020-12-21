import{
    ADD_RIDER
}
from '../type/rider'

const rider = {
    id:null,
    name: null,
    image: null,
    motorbike: null
}
const riderReducer = (state = rider, action)=>{
    if(action.type === ADD_RIDER){
        const{id, name, image, motorbike} = action.payload;

        return{
            id : id,
            name: name,
            image :image,
            motorbike :motorbike
        }
    }

    return state;
}
export default riderReducer;