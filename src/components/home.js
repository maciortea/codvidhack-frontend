import React from 'react';
import { Button, Row, CardDeck, Card } from 'react-bootstrap';
import history from './history';

const Home = () => {
  return (
    <div className='bg'>
      <Row className="justify-content-md-center">
        <div className="mb-2">
          <div className='header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
            <h1>FixItAll - FIA</h1>
            <br />
            <br />
            <p>
              Bine ai venit pe platforma FixItAll - FIA! Scopul acestei platforme este sa sprijine: persoanele in cautare de servicii si produse,
              furnizorii de produse si servicii, cat si persoanele care in urma pandemiei COVID-19 au ramas fara un loc de munca si in acest moment
              se gasesc in situatia de a trece printr-o reconversie profesionala astfel incat sa deboandeasca competentele necesare locurilor de munca actuale.
            </p>
            <p>
              Pentru mai multe informatii apasati <a href='/about'>aici</a>.
            </p>
          </div>
          <br />
          <CardDeck>
            <Card border='primary' style={{ width: '18rem' }}>
              <Card.Header as="h5">Furnizor</Card.Header>
              <Card.Body>
                <Card.Text>
                  Inscrie-te aici daca esti furnizor de servicii si produse si iti doresti sa te promovezi prin aceasta aplicatie. Vei primi informatiile necesare inscrierii pas cu pas.
                </Card.Text>
                <br />
                <Button variant="primary" size="lg" block onClick={() => history.push('/registerProvider')}>
                  Inregistreaza-te
                </Button>
              </Card.Body>
            </Card>
            <Card border='primary' style={{ width: '18rem' }}>
              <Card.Header as="h5">Beneficiar</Card.Header>
              <Card.Body>
                <Card.Text>
                  Inscrie-te aici daca doresti sa accesezi un program de formare/reorientare profesionala care sa iti ofere posibilitatea sa iti gasesti un loc de munca. Vei primi informatiile necesare inscrierii pas cu pas.
                </Card.Text>
                <Button variant="primary" size="lg" block onClick={() => history.push('/registerUnemployed')}>
                  Inregistreaza-te
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>

        </div>
      </Row>
    </div>
  );
};

export default Home;
