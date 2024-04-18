import { CDN_URL } from "../utils.js/constants";

const CategoryList = (props) => {
  const { itemsList } = props;
  return (
    <div className="mt-2">
      {itemsList.map((item) =>
        <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-10/12">
            <div>
              <span>{item?.card?.info?.name}</span>
              <p>${item?.card?.info?.price / 100}</p>
            </div>
            <p>{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>


          <div >
            <button className="w-16 h-7 rounded-md text-center absolute bg-white " >Add +</button>
          </div>
          <div className="w-2/12">
            <img src={CDN_URL + item?.card?.info?.imageId} alt="ygvgguhjguhjygbjgujbuhjhbhhghbhhhhgh" className="w-24 h-24 rounded-md" />
          </div>


        </div>
      )
      }
    </div >
  );
}

export default CategoryList;
