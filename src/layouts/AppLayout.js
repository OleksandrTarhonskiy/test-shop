import React from 'react';

import './AppLayout.scss';

const AppLayout = ({ children }) => {
  return (
    <main className="Layout">
      <div className="Layout__content">
        {children}
      </div>
    </main>
  );
}

export default AppLayout;