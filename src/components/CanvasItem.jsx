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

  return (
    <div
      ref={node => drag(drop(node))}
      className="canvas-item"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <img src={icon.image} alt={icon.name} style={{ width: 32, height: 32 }} />
      <span>{icon.name}</span>
    </div>
  );
};

export default CanvasItem;
