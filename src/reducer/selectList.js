import {ADD_SELECT} from '../constans'
export default (select =[], action)=>{
    const {type, payload} = action;
    switch (type){
        case ADD_SELECT:
            console.log('asdasd')
            return payload.article
    }

    console.log('asdasd2')
    return select
}