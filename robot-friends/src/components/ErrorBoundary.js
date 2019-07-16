import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasErrorOccured: false
        };
    }

    componentDidCatch(){
        this.setState({ hasErrorOccured: true });
    }


    render(){
        if(this.state.hasErrorOccured){
          return <h1>Oops! Something doesn't seem right..</h1>;
        }
        else{
            return this.props.children;
        }
    }

}

export default ErrorBoundary;