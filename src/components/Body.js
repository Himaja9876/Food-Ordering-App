import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Body = () => {
  // Local State Variable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfliteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfliteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  {/*const latitude = 12.9351929;
  const longitude = 77.62448069999999;

  const requestData = {
    lat: latitude,
    lng: longitude,
  };

  const postData = async (url = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",

      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  postData("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update", requestData).then((data) => {
    console.log(data);
  }); */}

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>You are offline, please check your internet connection.</h1>
    );
  }
  else {
    return ListOfRestaurants.length === 0 ? <Shimmer /> :
      (
        <div className="body">

          <div className="flex justify-between">

            <div className="search-res">
              <input type="text" className="border border-black m-4 h-7 rounded-sm text-sm" value={searchText} onChange={(e) => {
                setsearchText(e.target.value);
              }} />
              <button className="px-5 ml-0.5 py-1 bg-slate-400 m-4 h-7 rounded-sm shadow-sm text-sm" onClick={() => {
                const filteredRestaurant = ListOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setfliteredRestaurant(filteredRestaurant);
              }}>Search</button>
            </div>

            <div className="filter px-5 py-1 bg-slate-400 m-4 h-7 rounded-sm shadow-sm text-sm ">
              <button className="filter-btn" onClick={() => {
                const filteredlist = ListOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setfliteredRestaurant(filteredlist);
              }}
              >
                Top Rated Restaurants
              </button>
            </div>

          </div>
          <div className="flex flex-wrap">
            {
              filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id} >
                  <ResCard resData={restaurant?.info} /></Link>)
              )
            }
          </div>
        </div >
      )
  }
}

export default Body;