export default function Result({ result }) {
    if (result === null) return null
    return (
        <p className="result">Result : {result}</p>
    )
}