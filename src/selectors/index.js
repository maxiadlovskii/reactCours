import {createSelector} from 'reselect'
import filters from "../reducer/filters";
import comments from "../reducer/comments";
import {mapToArr} from "../helpers";

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export  const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter,  (articles, filters) =>{
    const {selected, dateRange: {from, to}} = filters
    console.log( "----", 'recompilll filters')
    return mapToArr(articles).filter(article =>{
        const published = Date.parse(article.date)
        return ( !selected.length || selected.includes(article.id) ) &&
            (!from || !to || (published > from && published < to))

    })
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id)=>{
   return comments[id]
});

export const articleSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id)=>{
    console.log( id )
    return articles[id]
});

