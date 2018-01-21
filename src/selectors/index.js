import {createSelector} from 'reselect'
import filters from "../reducer/filters";

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export  const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter,  (articles, filters) =>{
    const {selected, dateRange: {from, to}} = filters
    console.log( "----", 'recompilll filters')
    return articles.filter(article =>{
        const published = Date.parse(article.date)
        return ( !selected.length || selected.includes(article.id) ) &&
            (!from || !to || (published > from && published < to))

    })
})


