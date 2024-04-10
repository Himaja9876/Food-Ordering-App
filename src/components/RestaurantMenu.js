import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const ResMenu = useRestaurantMenu(resId);
  if (ResMenu === null) {
    return <Shimmer />;
  } else {
    const { name, cuisines } = ResMenu?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = ResMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);
    return (
      <div className="res-menu text-sm p-4">
        <h2>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h3>Menu</h3>
        <div>
          <ul>
            {
              itemCards.map((menuCard) => (
                <li key={menuCard.card?.info?.id}>{menuCard.card?.info?.name}</li>
              )
              )
            }
          </ul>
        </div>
      </div >
    );
  }


}

export default RestaurantMenu;