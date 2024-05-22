import React from "react";
import Icon from "./Icon";

const icons = [
  { id: 1, name: "Microphone", image: "/mic.png" },
  { id: 2, name: "Drums", image: "/drums.png" },
  { id: 3, name: "Keyboard", image: "/keyboard.png" },
  { id: 4, name: "Guitar", image: "/e_guitar.png" },
  { id: 5, name: "Acoustic Guitar", image: "/ac_guitar.png" },
  { id: 6, name: "Bass Guitar", image: "/bass.png" },
  { id: 7, name: "Guitar Amp", image: "/amp.jpeg" },
  { id: 8, name: "Bass Amp", image: "/amp.jpeg" },
];

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="heading"><h3>STAGE PLOT DESIGNER</h3></div>
        {icons.map((icon) => (
          <Icon key={icon.id} name={icon.name} image={icon.image} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
