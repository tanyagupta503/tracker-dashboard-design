import React from 'react';
import { Card, Button, ButtonGroup, Badge } from 'react-bootstrap';
import fileDownload from '../../images/file-download.png';

const Card2Title = () => {
  return (
    <Card.Title>
      <h3>
        Incidents Results <Badge className='ms-3'>2,257 incidents</Badge>
      </h3>
      <ButtonGroup>
        <Button size='lg' className='select-btn'>
          <img src={fileDownload} alt='fileDownload' />
          <span>Download</span>
        </Button>
      </ButtonGroup>
    </Card.Title>
  );
};

export default Card2Title;
