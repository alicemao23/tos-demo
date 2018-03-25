import React, { Component } from 'react'; 
import Listing from './Listing';
import axios from 'axios'; 
import { Pagination } from 'antd';
import 'antd/dist/antd.css'; 

const baseURL = " https://thisopenspace.com/lhl-test?page="; 

class PaginationView extends Component {
    constructor() {
        super(); 
        this.state ={
            currentPage: 1, 
            total: 0, 
            listings: [], 
        }

    }

    componentDidMount() {
        axios.get(baseURL)
        .then((res)=>{
            console.log(res)
            this.setState({
                total: res.data.total, 
                listings: res.data.data
            })
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.currentPage !== this.state.currentPage){
            axios.get(`${baseURL}${this.state.currentPage}`)
            .then((res)=>{
               this.setState( {
                    listings: res.data.data
                })
            })
        }
    }

    handleChange = (page)=> {
        this.setState({
            currentPage: page
        })
    }
    render() {
        return(
            <div>
                <h3>Beautiful Spaces</h3>
                <Pagination onChange={this.handleChange} defaultCurrent={this.state.currentPage} total={this.state.total}/> 
                <div className="pagination-container">
                {
                    this.state.listings.map((listing)=>{
                        return <Listing key={listing.id} listing={listing} />
                    })
                }
                </div>
            </div>
        )
    }
}

export default PaginationView;