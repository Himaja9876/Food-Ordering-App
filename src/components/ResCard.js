import { CDN_URL } from "../utils.js/constants";

const ResCard = (props) => {

  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData;

  return (
    <div className="res-card m-5 p-4 w-[250] h-[340] rounded-md" style={{ backgroundColor: "#f0f0f0" }}>
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

export default ResCard;