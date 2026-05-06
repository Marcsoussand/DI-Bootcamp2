import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (query.trim()) navigate(`/search/${query.trim()}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search images..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}
