import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_SELECT, DELETE_ARTICLE, FILTER_BY_SELECT, FILTER_BY_DATE} from '../constans'

const commentsMap = defaultComments.reduce((acc, comment) =>{
    acc[comment.id] = comment
    return acc
}, {})
export default (commentsState = commentsMap, action)=>{
    const {type, payload} = action

    switch (type){

    }
    return commentsState
}