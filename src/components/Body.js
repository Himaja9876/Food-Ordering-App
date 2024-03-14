import ResCard from "./ResCard";
import resList from "../utils.js/mockData";
import { useState } from "react";



const Body = () => {

  // Local State Variable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">

      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredlist = ListOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredlist);
        }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {
          ListOfRestaurants.map((restaurant) => (
            <ResCard key={restaurant.info.id} resData={restaurant} />)
          )
        }
      </div>

    </div>
  )
}

export default Body;