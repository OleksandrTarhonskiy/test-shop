import React from 'react';

import './card.scss';

const Card = ({
  label,
  heading,
  children,
  type
}) => {
  return (
    <div className={`Card card-${type}`}>
      <div className="Card__header">
        {label && 
          <span className="Card__header-type">
            {label}
          </span>}
          <h2>
            {heading}
          </h2>
      </div>
      <div className="Card__body">
        {children}
      </div>
    </div>
  );
}

export default Card;