import { useState } from 'react';
import { Divide as HamburgerMenu } from 'hamburger-react';


export const Hamburger = ({ toggleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    toggleNavigation();
  };

  return <HamburgerMenu size={24} onToggle={toggle} toggled={isOpen} />;
};
