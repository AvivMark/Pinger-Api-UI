import React, { useState } from 'react';

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleToggle}>Show</button>
      <div style={{ display: isOpen ? 'block' : 'none' }}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;