import React, { useState } from 'react';

import Card from 'components/Card';
import Modal from 'components/Modal';
import Order from '../Order';
import './item.scss';

const Item = ({ data }) => {
  const [ open, setOpen ] = useState(false);

  return (
    <Card 
      type="success"
      label={data.category}
      heading={data.name}
    >
      <div className="Item__body">
        <span className="price">
          {data.price}
        </span>
        <button 
          className="btn btn-default"
          onClick={() => setOpen(true)}
        >
          Buy
        </button>
      </div>
      {console.log(data)}
      <Modal onToggle={setOpen} open={open}>
         <Order data={data} />
      </Modal>
    </Card>
  );
};

export default Item;