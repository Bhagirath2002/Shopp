import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

function App() {
  const [Items, setItems] = useState([
    { itemName: "Item1", quantity: 1, isSelected: false },
    { itemName: "Item2", quantity: 3, isSelected: true },
    { itemName: "Item3", quantity: 2, isSelected: false },
  ]);

  const [namet, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleAddButtonClicked = () => {
    const newItem = {
      itemName: namet,
      quantity: 1,
      isSelected: false,
    };
    const newItems = [...Items, newItem];

    setItems(newItems);
    setInputValue("");
    //calculateTotl();
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...Items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateTotal();
  };
  const handleQuantityDecrease = (index) => {
    const newItems = [...Items];
    newItems[index].quantity--;
    setItems(newItems);
    calculateTotal();
  };
  const toggleComplete = (index) => {
    const newItems = [...Items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = Items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            //value={namet}
            onChange={(e) => setInputValue(e.target.value)}
            className="add-item-input"
            placeholder="Add an item...."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClicked()}
          />
        </div>
        <div className="item-list">
          {Items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
}

export default App;
