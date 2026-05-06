import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const categories = ['Mountains', 'Beaches', 'Birds', 'Food']

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">SnapShot</Link>
            <div className="navbar-categories">
                {categories.map(cat => (
                    <Link key={cat} to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
                ))}
            </div>
            <SearchBar />
        </nav>
    )
}
