import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import refresh from '../../images/refresh.png';
import chevronDown from '../../images/chevron-down.png';

const Card1Title = () => {
  return (
    <Card.Title>
      <h3>Dashboard</h3>
      <ButtonGroup>
        <Button size='lg' className='me-md-3 mb-3 mb-sm-0'>
          <img src={refresh} alt='refresh' />
          <span>Reset Page</span>
        </Button>
        <Button size='lg'>
          <span>Save / load dashboard</span>
          <img src={chevronDown} alt='chevronDown' />
        </Button>
      </ButtonGroup>
    </Card.Title>
  );
};

export default Card1Title;
