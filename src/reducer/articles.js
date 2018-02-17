import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap, mapToArr} from '../helpers'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES} from '../constans'
import {Map, Record} from 'immutable'
//Опис вигляду статті, типу модель
const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    comments: []
})
const defaultState = new Map({})
export default (articleState = defaultState, action)=>{
    const {type, payload, response, randomId} = action

    switch(type){
        case DELETE_ARTICLE:
            return articleState.delete(payload.id);
            /*
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState
            */
        case ADD_COMMENT:
            /*
            const article = articleState[payload.articleId]
            return{
                ...articleState,
                [payload.articleId]:{
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
            */
            return articleState.updateIn([payload.articleId, 'comments'], comments=> comments.concat({randomId})) //<-- Оновлюємо іммутабельні данні
                                                                                                                    // updateIn( [в чому оновлювати, що оновлювати], як оновлювати )
        case LOAD_ARTICLES:
            return arrToMap(response, ArticleRecord) //<-- Передаєм модель статті
    }

    return articleState
}