import React, { Component } from 'react'; 
import axios from 'axios'; 

let baseURL = " https://thisopenspace.com/lhl-test?page="; 

class Pagination extends Component {
    constructor() {
        super(); 
        
    }

    componentDidMount() {
        axios.get(baseURl)
        .then((res)=>{
            this.setState({
                
            })
        })
    }
}