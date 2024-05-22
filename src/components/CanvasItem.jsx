import React from 'react';
import { useDrag } from 'react-dnd';

const CanvasItem = ({ id, name, position, moveItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'canvasItem',
    item: { id, name, position, type: 'canvasItem' },
    end: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
        const canvasBoundingRect = monitor.getDropResult().canvasRef.getBoundingClientRect();
        const x = clientOffset.x - canvasBoundingRect.left;
        const y = clientOffset.y - canvasBoundingRect.top;
        moveItem(item.id, { x, y });
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="canvas-item"
      style={{
        left: position.x,
        top: position.y,
        position: 'absolute',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {name}
    </div>
  );
};

export default CanvasItem;
