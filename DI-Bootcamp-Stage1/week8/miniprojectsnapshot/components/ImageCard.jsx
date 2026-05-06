export default function ImageCard({ photo }) {
    return (
        <div className="image-card">
            <img src={photo.src.medium} alt={photo.alt || photo.photographer} />
            <div className="image-overlay">
                <p>{photo.photographer}</p>
            </div>
        </div>
    )
}
