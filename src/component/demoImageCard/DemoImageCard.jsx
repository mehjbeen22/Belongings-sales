import "./DemoImageCard.css";
import { ImCross } from "react-icons/im";

export const DemoImageCard = ({ data }) => {
  const {
    item: { assetsName, assetsUrl },
    setAssetsArray,
    index,
  } = data;

  const deleteDemoAssets = () =>
    setAssetsArray((assetsArray) =>
      assetsArray.filter((_, Assetindex) => Assetindex !== index)
    );
  return (
    <div className="card text-center mb-3 cardBody" style={{ width: "18rem" }}>
      <span onClick={deleteDemoAssets}>
        <ImCross size={15} />
      </span>

      <img src={assetsUrl} className="demoImage" />
      <div className="card-body">
        <h5 className="card-title">{assetsName.toUpperCase()}</h5>
        <button href="#" className="btn btn-primary-select">
          Select Photos
        </button>
      </div>
    </div>
  );
};
