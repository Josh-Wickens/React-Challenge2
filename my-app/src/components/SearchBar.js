import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             importedNames: 'names'
        }
    }
    
    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <form>
                    <input
                        type="text"
                        placeholder="search names..."
                    />
                </form>
                <div style={{margin: 'auto'}}>
                    we will render names here
                    
                </div>
            </div>
        )
    }
}

export default SearchBar