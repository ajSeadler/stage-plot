import React from 'react';
import { useDrag } from 'react-dnd';

const Icon = ({ name, image }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'icon',
    item: { name, image, type: 'icon' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const iconStyle = {
    width: name === 'Drums' ? '70px' : '50px',
    height: name === 'Drums' ? '70px' : '50px',
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div ref={drag} className="icon" style={{ cursor: 'move' }}>
      <img src={image} alt={name} style={iconStyle} />
      <span>{name}</span>
    </div>
  );
};

export default Icon;
