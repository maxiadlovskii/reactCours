import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from "../../AC"
import {mapToArr} from "../../helpers";

import 'react-select/dist/react-select.css'
class SelectFilter extends Component{
    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array
    };
    handleChange = selected => this.props.changeSelection(selected.map(options => options.value))
    render(){
        const { articles, selected} = this.props;
        console.log(articles)
        const options = articles.map(article =>({
            label: article.title,
            value: {article}
        }))
         return <Select
                options={options}
                value={selected}
                multi={true}
                onChange={this.handleChange}
        />
    }
}

export  default connect(state=>({
    selected: state.filters.selected,
    articles: mapToArr(state.articles.entities)

}), {changeSelection})(SelectFilter)
