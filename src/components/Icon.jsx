import React from 'react';
import { useDrag } from 'react-dnd';

const Icon = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'icon',
    item: { name, type: 'icon' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="icon"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {name}
    </div>
  );
};

export default Icon;
