import ImageCard from './ImageCard'

export default function Gallery({ photos }) {
    if (!photos || photos.length === 0) return <p className="no-results">No images found.</p>

    return (
        <div className="gallery">
            {photos.map(photo => (
                <ImageCard key={photo.id} photo={photo} />
            ))}
        </div>
    )
}
