import {INCREMENT, DELETE_ARTICLE, ADD_SELECT} from '../constans'
export function increment() {
    return{
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return{
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addSelect(article) {
    return{
        type: ADD_SELECT,
        payload: { article }
    }
}