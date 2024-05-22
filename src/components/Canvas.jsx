import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { useDrop } from 'react-dnd';
import CanvasItem from './CanvasItem';

const Canvas = forwardRef((props, ref) => {
  const [items, setItems] = useState([]);
  const canvasRef = useRef(null);

  const [, drop] = useDrop({
    accept: ['icon', 'canvasItem'],
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      const canvasBoundingRect = canvasRef.current.getBoundingClientRect();
      const x = clientOffset.x - canvasBoundingRect.left;
      const y = clientOffset.y - canvasBoundingRect.top;

      if (item.type === 'icon') {
        addItem(item, { x, y });
      } else if (item.type === 'canvasItem') {
        moveItem(item.id, { x, y });
      }

      return { canvasRef: canvasRef.current };
    },
  });

  const addItem = (item, position) => {
    setItems(prevItems => [
      ...prevItems,
      { ...item, id: `${item.name}-${Date.now()}`, position },
    ]);
  };

  const moveItem = (id, position) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, position } : item
      )
    );
  };

  useImperativeHandle(ref, () => ({
    getCanvasRef: () => canvasRef.current,
  }));

  return (
    <div className="canvas-container">
      <div ref={node => { drop(node); canvasRef.current = node; }} className="canvas">
        {items.map((item, index) => (
          <CanvasItem
            key={index}
            id={item.id}
            name={item.name}
            position={item.position}
            moveItem={moveItem}
          />
        ))}
      </div>
    </div>
  );
});

export default Canvas;
