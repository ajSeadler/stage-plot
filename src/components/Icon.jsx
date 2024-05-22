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

  return (
    <div
      ref={drag}
      className="icon"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <img src={image} alt={name} style={{ width: 32, height: 32 }} />
      <span>{name}</span>
    </div>
  );
};

export default Icon;
