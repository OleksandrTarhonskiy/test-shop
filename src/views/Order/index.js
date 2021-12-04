import React from 'react';

import Form from '../Form'
import './order.scss';

const Order = ({ data }) => {
  return (
    <>
      <div className="modal-header">
            <span className="label">
              {data?.category}
            </span>
            <h2 className="mt-2">{data.name}</h2>
            <span className="price mt-1 mb-2">
              {data?.price}
            </span>
          </div>
        <Form />
    </>
  );
}

export default Order;