const labels = {
    '+': 'Add Them',
    '-': 'Subtract Them',
    '*': 'Multiply Them',
    '/': 'Divide Them',
}

export default function ButtonAdd({ onClick, operation }) {
    return (
        <button onClick={onClick}>{labels[operation] || 'Calculate'}</button>
    )
}