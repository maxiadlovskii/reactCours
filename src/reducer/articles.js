import {normalizedArticles as defaultArticles} from '../fixtures'
import {ADD_SELECT, DELETE_ARTICLE, FILTER_BY_SELECT, FILTER_BY_DATE} from '../constans'
export default (articleState = defaultArticles, action)=>{
    const {type, payload} = action

    switch(type){
        case DELETE_ARTICLE: return articleState.filter(article=>article.id !== payload.id)
        /*
        break;
        case FILTER_BY_SELECT: return defaultArticles.filter(article=>{
           return payload.selected.some(function (item) {
                return item.value === article.id
            })

        })
        break;
        case FILTER_BY_DATE: return defaultArticles.filter(article=>{
            console.log("ARTICLES   "+payload.date.from, payload.date.to)
               if(!(payload.date.from === null) && !(payload.date.to === null)){
                    let dt = new Date(article.date);
                    console.log( dt);
                    return (dt > payload.date.from && dt < payload.date.to)
                } else return articleState
        })

    */
    }

    return articleState
}