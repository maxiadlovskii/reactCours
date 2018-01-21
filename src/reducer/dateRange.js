import {SET_DATE} from '../constans'

export default (date = {from: null, to: null}, action) => {
    const {type} = action

    switch (type) {
        case SET_DATE: {
            const {from, to} = action.payload.date
            console.log(from, to);
            return {from, to}
        }
    }

    return date
}