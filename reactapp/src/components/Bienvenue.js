import React from 'react';
import { Container, Card } from 'react-bootstrap';
export default class Bienvenue extends React.Component {
render() {
return (
<Container className="mt-4">
  <Card className="p-4 text-center">
    <h1>Bienvenue</h1>
    <p>Application de gestion des voitures</p>
  </Card>
</Container>
);
}
}