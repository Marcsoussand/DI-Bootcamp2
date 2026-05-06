import { Link } from 'react-router-dom'

const categories = [
    { name: 'Mountains', emoji: '🏔️' },
    { name: 'Beaches', emoji: '🏖️' },
    { name: 'Birds', emoji: '🐦' },
    { name: 'Food', emoji: '🍔' },
]

export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to SnapShot</h1>
            <p>Explore stunning images by category or search for anything</p>
            <div className="categories-grid">
                {categories.map(cat => (
                    <Link key={cat.name} to={`/category/${cat.name.toLowerCase()}`} className="category-card">
                        <span>{cat.emoji}</span>
                        <h2>{cat.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}
