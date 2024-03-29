import './dropdown.css';

export function Dropdown({category, items }) {
    return (
        <div className='dropdown'>
            <a className="dropdown-category" href={category.url}>{category.name}</a>
            {items.map((item, index) => (
                <a key={index} className="dropdown-item" href={item.url}>{item.name}</a>
            ))}
        </div>
    );
}
