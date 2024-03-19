import './dropdown.css';

export function Dropdown({ category, items }) {
    return (
        <div className='dropdown'>
                <div className='dropdown'>
                    <a className="dropdown-category" href="">{category}</a>
                    {items.map((item) => (
                        <a className="dropdown-item" href="">{item}</a>
                    ))}
                </div>
        </div>
    );
}
