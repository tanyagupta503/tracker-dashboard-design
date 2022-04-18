import React from 'react';
import { Form } from 'react-bootstrap';

const Card1DataInfo = ({
  text,
  value,
  checked,
  progressColor,
  progressWidth,
}) => {
  return (
    <>
      <div className='mt-3 data-info'>
        <Form.Check
          type='checkbox'
          label={text}
          className='mb-0'
          checked={checked}
        />
        <span>{value}</span>
      </div>
      <div className='mt-2 data-progress'>
        <div
          className='filler'
          style={{
            backgroundColor: progressColor,
            width: progressWidth,
          }}
        ></div>
      </div>
    </>
  );
};

export default Card1DataInfo;
