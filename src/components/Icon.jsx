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
    width: '50px', // Default width for icons
    height: '50px', // Default height for icons
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  if (name === "Drums") {
    iconStyle.width = '70px'; // Set width to 70px for drums
    iconStyle.height = '70px'; // Set height to 70px for drums
  }

  return (
    <div ref={drag} className="icon" style={{ cursor: 'move' }}>
      <img src={image} alt={name} style={iconStyle} />
      <span>{name}</span>
    </div>
  );
};

export default Icon;
