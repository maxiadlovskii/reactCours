import React, {Component} from 'react'
import Article from './Article/index'
import  accordeon from '../decorators/accordeon'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from "../selectors/index";
import {loadAllArticles} from "../AC/index";

import Loader from './Loader'

class ArticleList extends Component{
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func
    };

    componentDidMount(){
        const {loaded, loading, loadAllArticles} = this.props
        if(!loaded || !loading){ loadAllArticles() };
    }

    render(){
        const {articles, openItemId, toggleOpenItem, loading} = this.props
        if(loading) return <Loader/>
        const articleElements = articles.map(article => <li key={article.id}>

            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
            </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export  default connect((state)=>{
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, {loadAllArticles})( accordeon(ArticleList) )