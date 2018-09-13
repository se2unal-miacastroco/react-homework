import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

const API = 'https://dog.ceo/api/breeds/list/all';

class Dog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authors : [],
            dogs: [],
        };
    }
    componentDidMount(){
        var _this = this;
        axios({
            method:'get',
            url:'https://dog.ceo/api/breeds/list/all',
        })
        .then(function(response) {

            console.log(response);
            _this.setState({
               dogs: response.data.message
            });
        })
        .catch(function (error) {
        console.log(error);

    });
    }
    render() {
        
        const dogs = this.state.dogs
        var contentKeys = Object.keys(dogs)
        
        var allNames = contentKeys.map((t) => 
                       dogs[t].map((e) => (<div class='myli'>{t + ": " + e}</div>))
                       );
            return (
                
                <ul>
                    <div id = "doggy">
                        {console.log(dogs)}
                        {
                            (<a>{allNames}</a>)
                        }
                    </div>
                </ul>
            )
        }
    }

export default Dog;
