import axios from 'axios';
import React, { Component } from 'react';
import { Card, Form, Col, Button, Row } from 'react-bootstrap';

export default class Voiture extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      marque: '',
      modele: '',
      couleur: '',
      prix: ''
    };

    this.state = this.initialState;

    this.voitureChange = this.voitureChange.bind(this);
    this.submitVoiture = this.submitVoiture.bind(this);
  }

  voitureChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitVoiture(event) {
    event.preventDefault();

    axios.post("http://localhost:8089/voitures", this.state)
      .then(response => {
        if (response.data != null) {
          alert("Voiture enregistrée avec succès");
          this.setState(this.initialState);
        }
      });
  }

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Ajouter une Voiture</Card.Header>

        <Form onSubmit={this.submitVoiture}>
          <Card.Body>

            <Row>
              <Form.Group as={Col}>
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  name="marque"
                  value={this.state.marque}
                  onChange={this.voitureChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Modèle</Form.Label>
                <Form.Control
                  name="modele"
                  value={this.state.modele}
                  onChange={this.voitureChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Couleur</Form.Label>
                <Form.Control
                  name="couleur"
                  value={this.state.couleur}
                  onChange={this.voitureChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  name="prix"
                  value={this.state.prix}
                  onChange={this.voitureChange}
                  required
                />
              </Form.Group>
            </Row>

          </Card.Body>

          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>{' '}
            <Button
              size="sm"
              variant="info"
              type="reset"
              onClick={() => this.setState(this.initialState)}
            >
              Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
