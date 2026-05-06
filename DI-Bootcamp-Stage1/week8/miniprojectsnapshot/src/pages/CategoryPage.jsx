import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'

export default function CategoryPage() {
    const { name } = useParams()
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.pexels.com/v1/search?query=${name}&per_page=30`, {
            headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY }
        })
            .then(res => res.json())
            .then(data => {
                setPhotos(data.photos || [])
                setLoading(false)
            })
    }, [name])

    return (
        <div className="page">
            <h1>{name}</h1>
            {loading ? <p className="loading">Loading...</p> : <Gallery photos={photos} />}
        </div>
    )
}
