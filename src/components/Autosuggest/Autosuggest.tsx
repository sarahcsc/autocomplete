import React from "react";
import './Autosuggest.css';
import Suggestions from "../Suggestions/Suggestions";

export default function Autosuggest() {
    const [search, setSearch] = React.useState<string>("");
    const [filteredList, setFilteredList] = React.useState<Array<string>>([]);
    const itemsList = ["shirt", "short", "dress", "jeans", "blouse"];

    // Function to deal with changes when the user types inside input
    function onChange(e: any) {
        setSearch(e.target.value)
        e.target.value === "" ? setFilteredList([]) : filter(e.target.value);
    }

    // Asynchronous function to filter the items 
    async function filter(aa: string) {
        const result = await new Promise(resolve => {
            setTimeout(() => {
              var result = itemsList.filter(item => item.includes(aa));
              setFilteredList(result)
            }, 500);
          })
    }  

    // Function to select an item when using mouse or keyboard
    function selectItem(filteredName: string) {
        setSearch(filteredName);
        setFilteredList([]);
    }

    // Function to clear the input and the items list
    function clearFilter(): void {
        setSearch("");
        setFilteredList([]);
    }

    return <div className="autosuggest">
        <input
            className='input'
            value={search}
            onChange={onChange}
        />
        
        <Suggestions
            list={filteredList}
            search={search}
            selectItem={selectItem}
        />
     
        {filteredList.length > 0 ? <button onClick={() => clearFilter()}>Clear All</button> : <></>}        
    </div>
}
