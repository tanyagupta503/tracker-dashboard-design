import React from 'react';
import './Dashboard.css';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import search from '../../images/search.png';
import { Card1Title } from '../Card1Title';
import { Card1Filters } from '../Card1Filters';
import { Card2Title } from '../Card2Title';
import { Card3Title } from '../Card3Title';
import { Card3Content } from '../Card3Content';
import { Card2Filters } from '../Card2Filters';
import { Card2Table } from '../Card2Table';
import { Card2Pagination } from '../Card2Pagination';
import { Card1Content } from '../Card1Content';

const Dashboard = () => {
  return (
    <Container>
      <div>
        <Row className='dashboard-row'>
          <Col sm={12}>
            <Card className='h-100'>
              <Card.Body>
                <Card1Title></Card1Title>
                <div className='mt-3 card-text'>
                  <div className='search-form'>
                    <img src={search} alt='Search' />
                    <Form.Control
                      type='text'
                      defaultValue='scan ID: 73647836'
                    />
                  </div>
                  <Card1Filters></Card1Filters>
                  <Card1Content></Card1Content>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='h-50'>
          <Col sm={8} className='mt-4'>
            <Card className='h-100'>
              <Card.Body>
                <Card2Title></Card2Title>
                <Card2Filters></Card2Filters>
                <Card2Table></Card2Table>
                <Card2Pagination></Card2Pagination>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className='mt-4'>
            <Card className='h-100'>
              <Card.Body>
                <Card3Title></Card3Title>
                <Card3Content></Card3Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
