import React, { useState } from "react";
import "./TodoStyle.css"
import TodoList from "./TodoList";
import Button from "react-bootstrap/Button"

function MainTodo() {
    const [inputList, setInputList] = useState("");
    const [Item, setItem] = useState([]);
    //console.log(Item);

    const itemEvent = (event) => {
        setInputList(event.target.value);

    }
    const listOfItem = () => {
        setItem((oldItem) => {
            return [inputList, ...oldItem];
        });
        setInputList("");

    }
    function dltList(index){
        let list=[...Item]
        list.splice(index, 3);
        setItem(list);

    }
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" name="name" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItem}>+</button>

                    <ul>
                        {
                            Item.map((list,index) => {

                                return (
                                    <div className="todoListValue">
                                        <TodoList text={list} />
                                        <Button onClick={()=>dltList(index)}>Delete
                                        </Button>
                                    </div>
                                )


                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    );

}
export default MainTodo;