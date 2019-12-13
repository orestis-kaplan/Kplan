import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Content from './Content';

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/content" component={Content} />
                </Switch>
            </div>
        );
    }
}

export default App