import React from 'react';
import { Button, Form } from 'react-bootstrap';
import arrowRight from '../../images/arrow-right.png';
import arrowLeft from '../../images/arrow-left.png';
import './Card2Pagination.css';

const Card2Pagination = () => {
  return (
    <div className='pagination-box mt-3'>
      <Form.Label className='mb-0 me-2 pagination-label'>
        <span>Rows per page:</span>
      </Form.Label>
      <Form.Group className='me-4'>
        <Form.Select size='lg' className='page-size-select'>
          <option>10</option>
        </Form.Select>
      </Form.Group>
      <Form.Label className='mb-0 ms-2 me-2 pagination-label'>
        <span>Page</span>
      </Form.Label>
      <Form.Group className='me-2'>
        <Form.Control
          type='text'
          defaultValue='1'
          className='page-number-input'
        />
      </Form.Group>
      <Form.Label className='me-4 mb-0 pagination-label'>
        <span>of 35</span>
      </Form.Label>
      <Button size='lg' className='ms-2'>
        <img src={arrowLeft} alt='arrowLeft' />
      </Button>
      <Button size='lg' className='ms-2'>
        <img src={arrowRight} alt='arrowRight' />
      </Button>
    </div>
  );
};

export default Card2Pagination;
