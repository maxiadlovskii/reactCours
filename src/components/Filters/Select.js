import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {addSelect} from "../../AC/index"

import 'react-select/dist/react-select.css'

class SelectFilter extends Component{

    static propTypes = {
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array
    };

    handleChange = selected => this.props.addSelect(selected)

    render(){
        const { articles, selected } = this.props

        const options = articles.map(article =>({
            label: article.title,
            value: article.id
        }))
        console.log(this.props)
        return <Select
                options={options}
                value={selected}
                multi={true}
                onChange={this.handleChange}
        />
    }
}

export  default connect(state=>({
    articles: state.articles,
    selected: state.selected
}), {addSelect})(SelectFilter)
