import {normalizedComments as defaultComments} from '../fixtures'
import {
    ADD_SELECT, DELETE_ARTICLE, FILTER_BY_SELECT, FILTER_BY_DATE, LOAD_ARTICLE_COMMENTS, ADD_COMMENT,
    SUCCESS
} from '../constants'
import {arrToMap, mapToArr} from "../helpers";
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: '',
    text: '',
    user: ''

})
const ReducerState = Record({
    entities: new OrderedMap({})
})

const defaultState = new ReducerState();
export default (commentsState = defaultState, action)=>{
    const {type, payload, response, randomId} = action

    switch (type){
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));//{...commentsState, [randomId]: payload.comment}
        case LOAD_ARTICLE_COMMENTS+SUCCESS:
            console.log( LOAD_ARTICLE_COMMENTS+SUCCESS );
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))

    }
    return commentsState
}