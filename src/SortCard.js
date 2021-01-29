import React, { Component } from 'react'

export class SortCard extends Component {
    render() {
        return (
            <>
             SortBy:   <select onChange={this.props.catfun}>
                 <option value="">Select categories</option>
                    {this.props.categories.map(item=>{
                        return (<option value={item}>{item}</option>)
                    })}
                </select>
            </>
        )
    }
}

export default SortCard
