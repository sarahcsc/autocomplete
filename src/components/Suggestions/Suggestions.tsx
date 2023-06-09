import './Suggestions.css';

interface SuggestionsProps {
    list: Array<string>,
    search: string,
    selectItem: any,
    selectedItem: number
}

// Function to highlight the matching part of the text
const getHighlightedItem = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> {parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
            { part }
        </span>)
    } </span>;
}

export default function Suggestions({list, search, selectItem, selectedItem}: SuggestionsProps) {

    // JSX.Element with only elements of the list
    const suggestions = () => {
        return list.map((item, index) => (
            <div onClick={() => selectItem(item)} key={index} className={index === selectedItem ? 'selected item' : 'item'}>
                {getHighlightedItem(item, search)}
            </div>
        ))
    }

    return <div className="suggestions">
        {suggestions()}
    </div>
}
