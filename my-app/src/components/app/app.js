import React,{Component}from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';
import BooksPage from '../characterPage/books';
import HousesPage from '../characterPage/houses';
import  ErrorMessage404 from '../errorMessage404/errorMessage404';


import gotService from '../../services/gotService';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class App extends Component  {
    gotService = new gotService();
    state ={
        showRandomChat: true,
        
        error: false
    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }
    toggleRandomChar =() =>{
        this.setState((state)=>{
            return{
                showRandomChat: !state.showRandomChat
            }
        })
    }

    render(){
        const char = this.state.showRandomChat ? <RandomChar interval={3000} /> : null;
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
            
            <Router>            
                <div className='App'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>

                                {char}
                                <button className='btn  btn-outline-info m-2'  onClick={this.toggleRandomChar}>showRandomChat</button>
                            </Col>
                        </Row>

                        <Routes>
                            <Route path='/houses'  element={ <HousesPage/>}/>

                            <Route path='/' exact element={<CharacterPage/>}/> 
                            <Route path='/books'   exact element={ <BooksPage/>}/>

                            
                            <Route path='*'   exact element={ <ErrorMessage404/>}/>

                            
                        </Routes>



                    </Container>
                </div>
            </Router>
        )
    }
}


