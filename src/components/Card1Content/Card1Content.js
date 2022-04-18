import React, { useRef, useEffect } from 'react';
import './Card1Content.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import trashDefault from '../../images/trash-default.png';
import { Card1DataInfo } from '../Card1DataInfo';

const Card1Content = () => {
  const checkRef = useRef();
  useEffect(() => {
    checkRef.current.indeterminate = true;
  }, []);
  return (
    <Row className='mt-3 data-filter'>
      <Col sm={3}>
        <div className='filter-box no-border'>
          <Form.Group className='me-3 select-group'>
            <Form.Select size='lg'>
              <option>Infotype</option>
            </Form.Select>
          </Form.Group>
          <Button size='lg' className='mt-3 mt-sm-0'>
            <img src={trashDefault} alt='trashDefault' />
          </Button>
        </div>
        <div className='data-rows'>
          <Form.Group className='mb-0'>
            <Form.Check
              type='checkbox'
              label='7 of 7 selected'
              className='mb-0'
              checked
            />
          </Form.Group>
          <Card1DataInfo
            text='Credit card number'
            value='437k'
            checked={true}
            progressColor={'#00953B'}
            progressWidth={'100%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Debit card number'
            value='234k'
            checked={true}
            progressColor={'#00953B'}
            progressWidth={'75%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Country'
            value='3647k'
            checked={true}
            progressColor={'#00953B'}
            progressWidth={'50%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='CVV'
            value='346k'
            checked={true}
            progressColor={'#00953B'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Phone number'
            value='3647k'
            checked={false}
            progressColor={'#00953B'}
            progressWidth={'25%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Nationality'
            value='3647k'
            checked={false}
            progressColor={'#00953B'}
            progressWidth={'10%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Bank account type'
            value='3647k'
            checked={true}
            progressColor={'#00953B'}
            progressWidth={'3%'}
          ></Card1DataInfo>
        </div>
      </Col>
      <Col sm={3}>
        <div className='filter-box no-border'>
          <Form.Group className='me-3 select-group'>
            <Form.Select size='lg'>
              <option>Slack Channel</option>
            </Form.Select>
          </Form.Group>
          <Button size='lg' className='mt-3 mt-sm-0'>
            <img src={trashDefault} alt='trashDefault' />
          </Button>
        </div>
        <div className='mt-2 data-rows'>
          <Form.Group className='mb-3'>
            <Form.Check
              type='checkbox'
              label='1 of 1 selected'
              className='mb-0'
              checked
              ref={checkRef}
            />
          </Form.Group>
          <Card1DataInfo
            text='Other'
            value='234k'
            checked={true}
            progressColor={'#D74343'}
            progressWidth={'100%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='#design'
            value='346k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'75%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='#dev-internal'
            value='3647k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'50%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='#slack-alert'
            value='346k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='#vacations'
            value='3647k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='#random'
            value='3647k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='#marketing'
            value='3647k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Feedback'
            value='3647k'
            checked={false}
            progressColor={'#D74343'}
            progressWidth={'30%'}
          ></Card1DataInfo>
        </div>
      </Col>
      <Col sm={3}>
        <div className='filter-box no-border'>
          <Form.Group className='me-3 select-group'>
            <Form.Select size='lg'>
              <option>User</option>
            </Form.Select>
          </Form.Group>
          <Button size='lg' className='mt-3 mt-sm-0'>
            <img src={trashDefault} alt='trashDefault' />
          </Button>
        </div>
        <div className='mt-2 data-rows'>
          <Form.Group className='mb-3'>
            <Form.Check
              type='checkbox'
              label='12 of 12 selected'
              className='mb-0'
              checked
            />
          </Form.Group>
          <Card1DataInfo
            text='ckctm12@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'100%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='tranthuy.nute@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'75%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='nvt.isst.nute@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'50%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='thuhang.nute@gmail.com'
            value='346k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='tienlapspktnd@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='danghoang87hl@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='binhan628@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='vuhaithuongnute@gmail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'30%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='trungkienspktnd@gamail.com'
            value='3647k'
            checked={true}
            progressColor={'#FFC107'}
            progressWidth={'5%'}
          ></Card1DataInfo>
        </div>
      </Col>
      <Col sm={3}>
        <div className='filter-box no-border'>
          <Form.Group className='me-3 select-group'>
            <Form.Select size='lg'>
              <option>Incident Resolution</option>
            </Form.Select>
          </Form.Group>
          <Button size='lg' className='mt-3 mt-sm-0'>
            <img src={trashDefault} alt='trashDefault' />
          </Button>
        </div>
        <div className='mt-2 data-rows'>
          <Form.Group className='mb-3'>
            <Form.Check
              type='checkbox'
              label='1 of 3 selected'
              className='mb-0'
              checked
            />
          </Form.Group>
          <Card1DataInfo
            text='Message Deleted'
            value='0'
            checked={true}
            progressColor={'#17A2B8'}
            progressWidth={'100%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Marked as False Positive'
            value='0'
            checked={false}
            progressColor={'#17A2B8'}
            progressWidth={'75%'}
          ></Card1DataInfo>
          <Card1DataInfo
            text='Marked as Test Data'
            value='234k'
            checked={false}
            progressColor={'#17A2B8'}
            progressWidth={'10%'}
          ></Card1DataInfo>
        </div>
      </Col>
    </Row>
  );
};

export default Card1Content;
