import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'

export default function SearchPage() {
    const { query } = useParams()
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=30`, {
            headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY }
        })
            .then(res => res.json())
            .then(data => {
                setPhotos(data.photos || [])
                setLoading(false)
            })
    }, [query])

    return (
        <div className="page">
            <h1>Results for "{query}"</h1>
            {loading ? <p className="loading">Loading...</p> : <Gallery photos={photos} />}
        </div>
    )
}
