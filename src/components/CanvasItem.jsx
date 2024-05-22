import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const CanvasItem = ({ id, icon, position, moveItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'canvasItem',
    item: { id, type: 'canvasItem' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'canvasItem',
    hover: (item, monitor) => {
      if (item.id !== id) return;
      const clientOffset = monitor.getClientOffset();
      const canvasBoundingRect = document.getElementById('canvas').getBoundingClientRect();
      const x = clientOffset.x - canvasBoundingRect.left;
      const y = clientOffset.y - canvasBoundingRect.top;
      moveItem(id, { x, y });
    },
  });

  const itemStyle = {
    left: position.x,
    top: position.y,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  const imgStyle = {
    width: '50px', // Default width for icons
    height: '50px', // Default height for icons
  };

  if (icon.name === 'Drums') {
    imgStyle.width = '170px'; // Set width to 170px for drums
    imgStyle.height = '170px'; // Set height to 170px for drums
  }

  return (
    <div ref={node => drag(drop(node))} className="canvas-item" style={itemStyle}>
      <img src={icon.image} alt={icon.name} style={imgStyle} />
      <span>{icon.name}</span>
    </div>
  );
};

export default CanvasItem;
