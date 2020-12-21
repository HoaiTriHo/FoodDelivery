import{
    ADD_RIDER
}
from '../type/rider';

export const addRider = (id, name, image, motorbike) => (
    {
        type: ADD_RIDER,
        payload: {
            id, 
            name, 
            image, 
            motorbike
        }
    }
)