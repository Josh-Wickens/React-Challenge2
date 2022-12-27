import React, { Component } from 'react';
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css"
import PostItem from './PostItem';
import Loader from './Loader';


export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label>Search</label>
                        <input type='search' id="searchInput">By Author</input>
                        <h4>posts found: 100</h4>
                    </form>
                    </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItem savedPosts={savedPosts} /> : <Loader /> }
                </div>
            </div>
        )
    }
}



export default Content

