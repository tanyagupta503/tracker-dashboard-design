import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import link from '../../images/link.png';
import x from '../../images/x.png';

const Card3Title = () => {
  return (
    <Card.Title>
      <h3>Incident Details</h3>
      <ButtonGroup>
        <Button size='lg' className='me-3'>
          <img src={link} alt='link' />
          <span>Copy link</span>
        </Button>
        <Button size='lg' className='mt-3 mt-sm-0'>
          <img src={x} alt='x' />
        </Button>
      </ButtonGroup>
    </Card.Title>
  );
};

export default Card3Title;
