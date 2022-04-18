import React from 'react';
import './Card3Content.css';
import { Button, Row, Col } from 'react-bootstrap';
import arrowRight from '../../images/arrow-right.png';
import traingleOff from '../../images/triangle-off.png';
import checks from '../../images/checks.png';
import trash from '../../images/trash.png';
import slackExternal from '../../images/slack-external.png';

const Card3Content = () => {
  return (
    <div className='info-div'>
      <div>
        <h5>General Info</h5>
        <Row className='mb-3'>
          <Col className='info-label'>Infotypes</Col>
          <Col className='info-value'>
            Credit Card Number, Bank account type
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Source</Col>
          <Col className='info-value'>Slack</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Channel</Col>
          <Col className='info-value'>
            #external-design
            <img src={slackExternal} alt='slackExternal' className='ms-1' />
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Channel type</Col>
          <Col className='info-value'>Shared channel (Grab)</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Sender</Col>
          <Col className='info-value'>Leslie Alexander</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Message sent on</Col>
          <Col className='info-value'>Jan 12 2022 2:23 PM</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>First detected on</Col>
          <Col className='info-value'>Jan 12 2022 3:01 PM</Col>
        </Row>
      </div>
      <div>
        <h5>Resolution</h5>
        <Row className='mb-3'>
          <Col className='info-label'>Resolution</Col>
          <Col className='info-value'>Mark as deleted</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Resolved by</Col>
          <Col className='info-value'>Alborz Heydaryan</Col>
        </Row>
        <Row className='mb-3'>
          <Col className='info-label'>Resolved on</Col>
          <Col className='info-value'>Jan 27 2022 4:46 PM</Col>
        </Row>
        <Button size='lg' className='mb-3'>
          <img src={checks} alt='checks' />
          <span>Mark as resolved</span>
        </Button>
        <Button variant='warning' size='lg' className='mb-3'>
          <img src={traingleOff} alt='traingleOff' />
          <span>False positive</span>
        </Button>
        <Button variant='danger' size='lg' className='mb-3'>
          <img src={trash} alt='trash' />
          <span>Delete message in Slack</span>
        </Button>
      </div>
      <div>
        <h5>Other information / Scan History</h5>
        <Button size='lg'>
          <span>Detail page</span>
          <img src={arrowRight} alt='arrowRight' />
        </Button>
      </div>
    </div>
  );
};

export default Card3Content;
