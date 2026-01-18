import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Navigationbar from './components/Navigationbar'
import Bienvenue from './components/Bienvenue';
import Voitureliste from './components/Voitureliste';
import Voiture from './components/Voiture';
class App extends Component {
render(){

const marginTop = { marginTop:"20px"}
return (
<BrowserRouter>
<Navigationbar/>
<Container className='App'>
<Row>
<Col lg={12} style={marginTop}>

 <Routes>
  <Route path="/" element={<Bienvenue />} />
  <Route path="/add" element={<Voiture />} />
  <Route path="/list" element={<Voitureliste />} />
 </Routes>

</Col>
</Row>
</Container>
</BrowserRouter>
);
}
}
export default App;