import React from 'react';
import { Button, Form } from 'react-bootstrap';
import plus from '../../images/plus.png';
import filter from '../../images/filter.png';

const Card1Filters = () => {
  return (
    <div className='filter-box mt-3'>
      <div className='filter-form'>
        <Form.Label className='me-3 filter-label'>
          <img src={filter} alt='filter' />
          <span>Filter</span>
        </Form.Label>
        <Form.Group className='me-3'>
          <Form.Label className='select-label'>Infotypes</Form.Label>
          <Form.Select size='lg'>
            <option>Any</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='me-3'>
          <Form.Label className='select-label'>Connector</Form.Label>
          <Form.Select size='lg'>
            <option>Gmail, Slack</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='me-3'>
          <Form.Label className='select-label'>Time range</Form.Label>
          <Form.Select size='lg'>
            <option>Last 60 days</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label className='select-label'>Account</Form.Label>
          <Form.Select size='lg'>
            <option>Any</option>
          </Form.Select>
        </Form.Group>
      </div>
      <Button size='lg' className='mt-3 mt-sm-0'>
        <img src={plus} alt='plus' />
        <span>Add breakdown</span>
      </Button>
    </div>
  );
};

export default Card1Filters;
