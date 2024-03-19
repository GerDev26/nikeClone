import './dropdown.css';

export function Dropdown({ category, items }) {
    return (
        <div className='dropdown'>
                <div className='dropdown'>
                    <a className="dropdown-category" href={category.url}>{category.name}</a>
                    {items.map((item) => (
                        <a className="dropdown-item" href={item.url}>{item.name}</a>
                    ))}
                </div>
        </div>
    );
}
