import { CDN_URL } from "../utils.js/constants";

const ResCard = (props) => {

  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData;

  return (
    <div className="res-card hover:cursor-pointer m-5 p-4 w-[250px] h-[340px] rounded-md bg-gray-200 hover:bg-gray-400 ">
      <img className="res-logo rounded-lg h-[170] w-[300]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold my-2 text-sm">{name}</h3>
      <h4 className="text-xs p-[0.5]">{cuisines.join(", ")}</h4>
      <h4 className="text-xs p-[0.5] pt-2">Rating: {avgRating}</h4>
      <h4 className="text-xs p-[0.5]">{costForTwo}</h4>
      <h4 className="text-xs p-[0.5]">Delivery Time: {sla.slaString}</h4>
    </div>
  )
}

// a HOC that takes a component as an input, modifies and returns an another component ( that returns a JSX )
export const WithOfferLabel = (ResCard) => {

  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resData
    return (
      <div>
        <label className="absolute bg-gray-700 text-white m-2 p-2 rounded-lg">{aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3?.subHeader}</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;