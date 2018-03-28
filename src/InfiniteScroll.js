import React, { Component } from 'react'; 
import Listing from './Listing';
import axios from 'axios'; 
import 'antd/dist/antd.css'; 

const baseURL = " https://thisopenspace.com/lhl-test?page="; 

class InfiniteScroll extends Component {
    constructor() {
        super(); 
        this.state ={
            currentPage: 1, 
            total: 0, 
            listings: [], 
            isLoading: false, 
            end: false
        }
    }

    fetchListings(){
        if (!this.state.end){
            axios.get(`${baseURL}${this.state.currentPage+1}}`)
            .then((res)=>{
                this.setState({
                    listings: this.state.listings.concat(res.data.data), 
                    isLoading: false, 
                    currentPage: this.state.currentPage+1,

                },()=>console.log(this.state))
            }).catch(err =>{
                    this.setState({
                        end: true
                    })
            })
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        axios.get(baseURL)
        .then((res)=>{
            this.setState({
                total: res.data.total, 
                listings: res.data.data
            })
        })
      }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        console.log((window.innerHeight + window.scrollY),  (document.body.scrollHeight), document.body.offsetHeight )
        if (
          (window.innerHeight + window.scrollY - 350) >= (document.body.scrollHeight - 350) &&
          this.state.listings.length && !this.state.loading
        ) {
            this.setState({
                isLoading: true
            }, ()=> this.fetchListings())
        }
      }    
    
    render(){
        return(
            <div>
                <h1>Beautiful Spaces</h1>
                <div className="pagination-body">
                    {
                        this.state.listings.map((listing)=>{
                            return <Listing key={listing.id} listing={listing} />
                        })
                    }
                </div>
                {
                    this.state.end ? <h1>End of Results</h1> : ''
                }
        </div>
        )
    }
}

export default InfiniteScroll;
