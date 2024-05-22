import React from 'react';
import Icon from './Icon';

const icons = [
  { id: 1, name: 'Microphone' },
  { id: 2, name: 'Guitar' },
  { id: 3, name: 'Drums' },
  { id: 4, name: 'Keyboard' },
  { id: 5, name: 'Speaker' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      {icons.map(icon => (
        <Icon key={icon.id} name={icon.name} />
      ))}
    </div>
  );
};

export default Sidebar;
