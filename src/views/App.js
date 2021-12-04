import React, { useState} from 'react';

import AppLayout from 'layouts/AppLayout';
import Card from 'components/Card';
import Modal from 'components/Modal';
import Form from './Form'
import './App.scss';

function App() {
  const [ open, setOpen ] = useState(false);

  return (
    <AppLayout>
      <div className="cards-wrapper">
        <Card type="success">
          Test
          <button className="btn btn-default">
            Buy
          </button>
        </Card>
        <Card>
          Test
        </Card>
        <Card>
          Test
        </Card>
        <Card>
          Test
        </Card>
      </div>
      <button onClick={() => setOpen(true)} className="btn btn-success lg">
        Buy
      </button>
      
      <Modal onToggle={setOpen} open={open}>
        <Form />
      </Modal>
    </AppLayout>
  );
}

export default App;
