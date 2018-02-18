import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap, mapToArr} from '../helpers'
import {
    DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES,  START, SUCCESS, FAIL, LOAD_ARTICLE,
    LOAD_ARTICLE_COMMENTS
} from '../constants'
import {OrderedMap, Map, Record} from 'immutable'
//Опис вигляду статті, типу модель
const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
    comments: []
})
const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState();
export default (articleState = defaultState, action)=>{
    const {type, payload, response, randomId} = action

    switch(type){
        case DELETE_ARTICLE:
            return articleState.deleteIn(['entities', payload.id]);
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
        case ADD_COMMENT:
            return articleState.updateIn(
                ['entities', payload.articleId, 'comments'],
                comments => comments.concat(randomId)
            )//<-- Оновлюємо іммутабельні данні
                                                                                                         // updateIn( [в чому оновлювати, що оновлювати], як оновлювати )

        case LOAD_ALL_ARTICLES+START:
            return articleState.set('loading', true);
        case LOAD_ALL_ARTICLES+SUCCESS:
            return articleState
                .set( 'entities', arrToMap(response, ArticleRecord),  ) //<-- Передаєм модель статті
                .set('loading', false)
                .set('loaded', true)
        case LOAD_ARTICLE+START:
            return articleState.setIn(['entities', payload.id, 'loading'], true)
        case LOAD_ARTICLE+SUCCESS:
            return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response))
        case LOAD_ARTICLE_COMMENTS + START:
            console.log(LOAD_ARTICLE_COMMENTS + START )
            return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true)
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            console.log(LOAD_ARTICLE_COMMENTS + SUCCESS + " IN ARTICLE")
            return articleState
                .setIn(['entities', payload.articleId, 'commentsLoading'], false)
                .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
    }

    return articleState
}