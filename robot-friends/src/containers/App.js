import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { robotDetails } from '../components/robots';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robotDetails: [],
            searchBox: ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json())
            .then( objects => this.setState({robotDetails: objects}) );       
    }

     onSearchBoxChange = (event) => {
        this.setState( {searchBox: event.target.value} );
    }

    render(){
        let searchInput = robotDetails.filter((robo) =>{
            return robo.name.toLowerCase().includes(this.state.searchBox.toLowerCase());
        }
        );
        if(this.state.robotDetails.length === 0){
            return <h1>Loading....</h1>;
        }
        else{
            return(
                <div className = "tc">
                    <h1 className = "f1">Robo Friends</h1>
                    <SearchBox searchTrigger = {this.onSearchBoxChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robotDetails = {searchInput} />
                        </ErrorBoundary>
                    </Scroll>
                    
                </div>
            ); 
        }
    }
  
}

export default App;