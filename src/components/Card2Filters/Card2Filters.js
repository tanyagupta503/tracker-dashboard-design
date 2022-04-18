import React from 'react';
import { Button, Form } from 'react-bootstrap';
import group from '../../images/group.png';

const Card2Filters = () => {
  return (
    <div className='filter-box mt-3 no-border'>
      <div className='filter-form'>
        <Form.Group className='me-3'>
          <Form.Label className='select-label'>Source</Form.Label>
          <Form.Select size='lg'>
            <option>Any</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='me-3'>
          <Form.Label className='select-label'>Resolution</Form.Label>
          <Form.Select size='lg'>
            <option>Any</option>
          </Form.Select>
        </Form.Group>
      </div>
      <Button size='lg' className='mt-3 mt-sm-0'>
        <img src={group} alt='group' className='mt-1 mb-1 ms-1 me-1' />
        <span>Select columns</span>
      </Button>
    </div>
  );
};

export default Card2Filters;
