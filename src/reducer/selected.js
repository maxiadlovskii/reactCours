import {ADD_SELECT} from '../constans'
export default (select =[], action)=>{
    const {type, payload} = action;
    switch (type){
        case ADD_SELECT:
            console.log('asdasd');
            payload.article.forEach(function (item) {
            })
            return payload.article
    }

    return select
}