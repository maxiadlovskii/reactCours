import {INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION, DELETE_ARTICLE, ADD_SELECT, FILTER_BY_SELECT, SET_DATE, FILTER_BY_DATE} from '../constans'
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
export function changeDateRange(dateRange){
    return{
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export  function changeSelection(selected) {
    return{
        type: CHANGE_SELECTION,
        payload: {selected}
    }
}