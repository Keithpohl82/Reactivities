import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Component } from 'react';
import Axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';



class App extends Component{



    state = {
       values: []
    }

    componentDidMount() {

        Axios.get('http://localhost:5000/api/values')
            .then((response) => {
           
                this.setState({
                    values: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Header as='h2'>
                    <Icon name='users' />
                    <Header.Content>Reactivities</Header.Content>
                </Header>
                <List>
                        {this.state.values.map((value: any) => (
                            <List.Item key={value.id}>{value.name}</List.Item>
                        ))}
                </List>
            </div>
        );
    }

  
}

export default App;
