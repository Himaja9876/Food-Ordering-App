import CategoryList from "./CategoryList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { categoryData, ShowItems, setShowIndex } = props;

  const showAllItems = () => {
    setShowIndex();
  }
  //console.log(categoryData);
  return (
    <div className=" w-6/12 mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
      <div className="font-bold flex justify-between cursor-pointer" onClick={showAllItems}>
        <span>{categoryData?.title} ({categoryData?.itemCards.length})</span>
        <span>{"⬇"}</span>
      </div>
      <div className="ml-0">
        {ShowItems && <CategoryList itemsList={categoryData?.itemCards} />}
      </div>
    </div>


  );
}

export default RestaurantCategory;