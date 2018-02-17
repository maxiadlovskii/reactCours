import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_SELECT, DELETE_ARTICLE, FILTER_BY_SELECT, FILTER_BY_DATE, ADD_COMMENT} from '../constans'
import {arrToMap} from "../helpers";

const commentsMap = arrToMap(defaultComments);
console.log( commentsMap );
export default (commentsState = commentsMap, action)=>{
    const {type, payload, randomId} = action

    switch (type){
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}
    }
    return commentsState
}