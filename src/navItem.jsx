import './navItem.css';
import { Dropdown } from './dropdown';
import { useState } from 'react';

export function NavItem({ text, url, className, info}) {

    const [dropdown, setDropdown] = useState(false)

    const openClose = dropdown
    ? "nav-item-dropdown nav-item-dropdown-open"
    : "nav-item-dropdown"

    const open = () => {
        setDropdown(true)
    }
    const close = () => {
        setDropdown(false)
    }

    return (
        <>
            <a onMouseEnter={open} onMouseLeave={close} className={className} href={url}>{text}</a>
            <div onMouseEnter={open} onMouseLeave={close} className={openClose}>
                {info.map((data, index) => (
                    <Dropdown key={index} category={data.category} items={data.items} isActive={dropdown}/>
                ))}
            </div>
        </>
    );
}
