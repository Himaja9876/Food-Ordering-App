import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const ResMenu = useRestaurantMenu(resId);

  if (ResMenu === null) {
    return <Shimmer />;
  } else {
    const { name, cuisines } = ResMenu?.data?.cards[2]?.card?.card?.info;
    //const { itemCards } = ResMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(ResMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = ResMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    console.log(categories);

    return (
      <div className="res-menu text-center text-sm p-4">
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        {categories.map((category) => <RestaurantCategory key={category?.card?.card?.info?.title} categoryData={category?.card?.card} />

        )}

      </div >
    );
  }


}

export default RestaurantMenu;


{/* <div>
            <ul>
              <li className="font-bold m-4">{c?.card?.card?.title}</li>
              {c?.card?.card?.itemCards.map((item) => <li>{item?.card?.info?.name}</li>)}
            </ul>
          </div> */}