import './navItem.css';
import { Dropdown } from './dropdown';
import { useState } from 'react';

export function NavItem({ text, url, className, info}) {

    const [dropdown, setDropdown] = useState(false)

    const openClose = dropdown
    ? "nav-item-dropdown nav-item-dropdown-open"
    : "nav-item-dropdown"

    const handleHover = () => {
        setDropdown(!dropdown)
    }

    return (
        <>
            <a onMouseEnter={handleHover} className={className} href={url}>{text}</a>
            <div onMouseLeave={handleHover} className={openClose}>
                {info.map(data => (
                    <Dropdown category={data.category} items={data.items}/>
                ))}
            </div>
        </>
    );
}
