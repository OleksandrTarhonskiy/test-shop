import React, { useState, useEffect } from 'react';

import AppLayout from 'layouts/AppLayout';
import Item from './Item';
import Modal from 'components/Modal';
import Order from './Order';
import useApp from './useApp';
import './App.scss';

function App() {
  const [ open, setOpen ] = useState(false);
  const { loading, error, data, fetchData } = useApp();
  const [ cheapest, setCheapest ] = useState({});

  useEffect(() => {
    fetchData();
  }, [fetchData])

  useEffect(() => {
    if (data.length) {
      const cp = data.reduce((prev, curr) => (curr.price < prev.price) ? curr : prev);
      setCheapest(cp);
    }
  }, [data, setCheapest])

  if (loading) return <p>loading...</p>

  if (error) return <p>{error.message}</p>

  return (
    <AppLayout>
      {
        data.length ? 
        <>
          <div className="App__cards-wrapper">
            {
                data.map((item) => 
                  <Item 
                    key={item.name}
                    data={item}
                  />
                )
              }
          </div>
          <div className="App__btn-wrapper">
            <button 
              onClick={() => setOpen(true)} 
              className="btn btn-success lg"
            >
              Buy cheapest
            </button>
          </div>
        </> : <p>Nothing to show</p>
      }
       <Modal onToggle={setOpen} open={open}>
         <Order data={cheapest} />
      </Modal>
    </AppLayout>
  );
}

export default App;
