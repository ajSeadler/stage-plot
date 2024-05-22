import React from 'react';
import Icon from './Icon';

const icons = [
  { id: 1, name: 'Microphone', image: '/icons/microphone.png' },
  { id: 2, name: 'Guitar', image: '/icons/guitar.png' },
  { id: 3, name: 'Drums', image: '/icons/drums.png' },
  { id: 4, name: 'Keyboard', image: '/icons/keyboard.png' },
  { id: 5, name: 'Speaker', image: '/icons/speaker.png' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {icons.map(icon => (
        <Icon key={icon.id} name={icon.name} image={icon.image} />
      ))}
    </div>
  );
};

export default Sidebar;
