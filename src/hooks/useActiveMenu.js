import { useState, useEffect } from "react";

export const useActiveMenu = (container) => {
  const [isActive, setIsActive] = useState(false)
  const [menuPosition, setMenuPosition] = useState({})

  const handleActive = (position) => {
    setIsActive(prev => !prev)
    setMenuPosition(position)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (container.current && !container.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      // setTimeout для того чтобы слушатель событий добависля только в следущей макротаске 
      // и меню не закрывалось сразу при открытии
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      })
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isActive]);

  return { handleActive, menuPosition, isActive, setIsActive }
}