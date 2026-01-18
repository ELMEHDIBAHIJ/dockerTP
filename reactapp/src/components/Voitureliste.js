import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
class Voitureliste extends Component {
constructor(props) {
super(props);
this.state = { voitures: [] };
}
componentDidMount() {
fetch('http://localhost:8089/voitures')
.then((response) => response.json())
.then((responseData) => {
this.setState({
voitures: responseData
});
})
.catch(err => console.error(err));
}
render() {

const columns= [{
dataField: 'id',
text:'Id',
headerStyle: {
backgroundColor: '#c8e6c9'
}
}, {
dataField: 'marque',
text:'Marque',
headerStyle: {
backgroundColor: '#c8e6c9'
}
}, {
dataField: 'modele',
text:'Modele',
headerStyle: {
backgroundColor: '#c8e6c9'
}
}, {
dataField: 'couleur',
text:'Couleur',
headerStyle: {
backgroundColor: '#c8e6c9'
}
}, {
dataField:'prix',
text:'Prix',
headerStyle: {
backgroundColor: '#c8e6c9'
}
},
];
const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign:
'center', color: 'cyan', border: '1px solid cyan', padding: '0.5em' }}>Liste des Voitures</h3>;
const rowStyle2 = (row, rowIndex) => {
const style = {};
style.backgroundColor = '#00BFFF';
style.color = 'black';
return style;
};
return (

<div>
<Card className={"border border-dark bg-dark text-white"}>
<Card.Body>
<BootstrapTable bootstrap4 rowStyle={ rowStyle2 } keyField="id"
data={this.state.voitures} columns={ columns } caption={<CaptionElement />}/>
</Card.Body>
</Card>
</div>
);
}
}
export default Voitureliste;
