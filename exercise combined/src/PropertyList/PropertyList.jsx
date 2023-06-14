import Property from "./Property.jsx";
import "./PropertyList.css";

export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => {
        return <Property {...p} key={p._id} />;
      })}
    </div>
  );
}
