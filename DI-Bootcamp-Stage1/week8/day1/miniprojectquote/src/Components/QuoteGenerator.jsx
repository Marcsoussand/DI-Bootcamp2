import { useState, useEffect } from 'react'
import QuoteButton from './QuoteButton'
import { quotes } from '../quotesdatabases'

export default function QuoteGenerator () {
    const [currentQuote, setQuote] = useState({quote:"",author:""});
    const [usedIndexes, setIndexes] = useState([]);
    const [colors, setColors] = useState();

    useEffect(() => {
        getNewQuote();
    }, []);

    function getNewQuote() {
        let available = quotes.reduce((acc, _, index) => {
            if (!usedIndexes.includes(index)) acc.push(index);
            return acc;
        }, []);

        if (available.length === 0) {
            available = quotes.map((_, index) => index);
        }

        const randomIndex = available[Math.floor(Math.random() * available.length)];

        const randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');

        setQuote(quotes[randomIndex]);
        setIndexes([...usedIndexes, randomIndex]);
        setColors(randomColor);
    }
    return (
        <div style={{ backgroundColor: colors, padding: '2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', width: '500px', borderRadius: '5px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h3 style={{ color: colors, margin: '0 0 1rem 0', textAlign: 'left' }}>{currentQuote.quote}</h3>
                <h4 style={{ margin: '0 0 1rem 0', alignSelf: 'flex-end' }}>{currentQuote.author}</h4>
                <div style={{ alignSelf: 'flex-end' }}><QuoteButton onClick={getNewQuote} color={colors} /></div>
            </div>
        </div>
    )
}