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
      } else {
        moveItem(item.id, { x, y });
      }
    },
  });

  const addItem = (icon, position) => {
    setItems(prevItems => [
      ...prevItems,
      { id: prevItems.length + 1, icon, position },
    ]);
  };

  const moveItem = (id, position) => {
    setItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, position } : item))
    );
  };

  useImperativeHandle(ref, () => ({
    getCanvasRef: () => canvasRef.current,
  }));

  return (
    <div ref={canvasRef} className="canvas" style={{ position: 'relative', width: '100%', height: '100%' }}>
      {items.map((item, index) => (
        <CanvasItem
          key={index}
          id={item.id}
          icon={item.icon}
          position={item.position}
          moveItem={moveItem}
        />
      ))}
      <div ref={drop} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
});

export default Canvas;
