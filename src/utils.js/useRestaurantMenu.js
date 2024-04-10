import { MENU_URL } from "../utils.js/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [ResMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(MENU_URL + resId);

    const jsondata = await menu.json();
    setResMenu(jsondata);
    //console.log(jsondata?.data?.cards[0]?.card?.card?.info?.name);
    {/** {const prom = new Promise(function (resolve, reject) {
      if (true) {
        setResMenu(jsondata);
        //console.log(ResMenu);
        resolve();
      } else {
        reject();
      }
    });
    //setResMenu(jsondata);
    prom.then(
      function (value) {
        console.log(ResMenu?.data?.cards[0]?.card?.card?.info?.name);
        hi = ResMenu?.data?.cards[0]?.card?.card?.info?.name;
        //console.log(hi);
      },
      function (error) { }
    );} */}
  };

  return ResMenu;
}

export default useRestaurantMenu;