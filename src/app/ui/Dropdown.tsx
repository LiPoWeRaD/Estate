"use client"

import { FC, useMemo, useState } from 'react';
import LocationSvg from '../svg/location';
import Type from '../svg/Type';
import Range from '../svg/Range';
import Size from '../svg/Size';
import Year from '../svg/Year';
import ArrowDrop from '../svg/arrowDrop';

interface DropdownProps {
  selectedOptionValue: string;
  options: string[];
  icon: string;
  isOpen: boolean;
  toggleDropdown: () => void;
  leftIcon?: boolean
  className?: string
  otherMargin?: boolean
}

const Dropdown: FC<DropdownProps> = ({ 
  selectedOptionValue, 
  options, 
  icon, 
  isOpen, 
  toggleDropdown ,
  leftIcon = true,
  className,
  otherMargin = false

}) => {
  const [selectedOption, setSelectedOption] = useState(selectedOptionValue);

  const selectedIcon = useMemo(() => {
    switch (icon) {
      case "Location":
        return <LocationSvg />;
      case "Type":
        return <Type />;
      case "Range":
        return <Range />;
      case "Size":
        return <Size />;
      case "Year":
        return <Year />;
      default:
        return <LocationSvg />;
    }
  }, [icon]);

  return (
    <div className={`relative min-h-[52px] ${className}`}>
      <button
        type='button'
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full px-4 py-2 text-left bg-grey10 border border-grey30 rounded-lg shadow-sm hover:bg-grey08 focus:outline-none focus:ring-2 focus:ring-grey30"
      >
        <div className="flex items-center flex-grow">
          {leftIcon && 
            <span className='w-5 h-5'>{selectedIcon}</span> 
          }
          <span className="flex-grow text-lg  truncate text-grey60">
            {selectedOption}
          </span>
        </div>
        {isOpen ? (
          <span className='ml-2 pt-1.5 rounded-full bg-grey15 rotate-180'><ArrowDrop /></span>
        ) : (
          <span className='ml-2 pt-1.5 rounded-full bg-grey15'><ArrowDrop /></span>
        )}
      </button>

      {isOpen && (
        <div className={`absolute z-10 w-full ${otherMargin ? "mt-10" : "mt-1"} bg-grey10 border border-grey30 rounded-lg shadow-lg`}>
          <ul className="py-1 overflow-auto text-base max-h-60">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  toggleDropdown();
                }}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-grey08"
              >
                {leftIcon && 
                  <span className='w-5 h-5'>{selectedIcon}</span>
                }
                <span className="flex-grow">
                  {option}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;