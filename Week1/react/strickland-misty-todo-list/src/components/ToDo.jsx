import React, { useState } from 'react';

const ToDo = () => {
    const [item, setItem] = useState("");
    const [isCompleted, _setIsCompleted] = useState(false);
    const [listOfItems, setListOfItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemObj = {item, isCompleted};
        setListOfItems([...listOfItems, itemObj]);
        setItem(""); // this paired with the value in the text input clears the input box after it's submitted
    }

    const toggleComplete = (e, i) => {
        const copyOfItemList = [...listOfItems];
        copyOfItemList[i].isCompleted = e.target.checked;
        setListOfItems(copyOfItemList);
    }

    const deleteItem = (_e, idx) => { // idx is the index of the item that we want to delete
        const filteredCopy = listOfItems.filter((_item, i) => { // i is the index of each item in the list // we're not using the item param, but it's needed because the index is always passed as the second param, so add an underscore to take away the 'not using it' warning
            return i !== idx; // return all items where indexes don't match, & remove the item where the indexes match
        });
        setListOfItems(filteredCopy);
    }

    return (
        <>
            <div className="mt-5">
                <form onSubmit={ handleSubmit }>
                    <input type="text" onChange={ (e) => setItem(e.target.value) } value={ item } />
                    <div>
                        <input type="submit" value="Add" className="btn btn-primary mt-2"/>
                    </div>
                </form>
            </div>
            <div>
                {
                    listOfItems.map((itemObj, i) => {
                        const itemClasses = []; // this is an empty array for the css classes, so class names go inside it
                        if (itemObj.isCompleted){
                            itemClasses.push("complete"); 
                        }
                        return( // idk why that ternary operator didn't work for the css styling, but it didn't
                            <div key={i} style={{textDecoration: itemObj.isCompleted ? "lineThrough" : "none"}} className="d-flex justify-content-center align-items-center m-3">
                                <p className={itemClasses.join(" ")}>{itemObj.item}</p>
                                <input type="checkbox" onChange={ (e) => toggleComplete(e, i)} checked={itemObj.isCompleted} className="mb-3 ms-2"/>
                                <button onClick={ (e) => deleteItem(e, i)} style={{backgroundColor: "black", color: "snow", marginLeft: "10px"}}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default ToDo;