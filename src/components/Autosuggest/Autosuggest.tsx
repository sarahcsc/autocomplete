import React from "react";
import './Autosuggest.css';
import Suggestions from "../Suggestions/Suggestions";

export default function Autosuggest() {
    const [search, setSearch] = React.useState<string>("");
    const [filteredList, setFilteredList] = React.useState<Array<string>>([]);
    const [index, setIndex] = React.useState<number>(-1);
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
        setIndex(-1);
    }

    // Function to clear the input and the items list
    function clearFilter(): void {
        setSearch("");
        setFilteredList([]);
        setIndex(-1);
    }

    // This function was created to deal with keyboard navigation
    // So that user can walk between the options using arrows keys (up and down)
    function dealWithKeyboard(e: any) {
        console.log(e)
        if(e.code === "ArrowDown"){
            if(index === filteredList.length){
                setIndex(-1);
            } else {
                var newIndex = index + 1;
                setIndex(newIndex);
            }            
        } else if (e.code === "ArrowUp"){
            if(index === -1){
                setIndex(filteredList.length);
            } else {
                var newIndex = index - 1;
                setIndex(newIndex);
            }            
        } else if(e.code === "Enter"){
            selectItem(filteredList[index]);
        }
    }

    return <div className="autosuggest">
        <input
            className='input'
            value={search}
            onChange={onChange}
            onKeyUp={dealWithKeyboard}
        />
        
        <Suggestions
            list={filteredList}
            search={search}
            selectItem={selectItem}
            selectedItem ={index}
        />
     
        {filteredList.length > 0 ? <button onClick={() => clearFilter()} className={index === filteredList.length? 'selected' : ''}>Clear All</button> : <></>}        
    </div>
}
