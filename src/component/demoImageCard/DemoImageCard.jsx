import "./DemoImageCard.css";

export const DemoImageCard = ({ item }) => {
  const { assetsName, assetsUrl } = item;
  return (
    <>
      <div
        className="card text-center mb-3 cardBody"
        style={{ width: "18rem" }}
      >
        <img src={assetsUrl} className="demoImage" />
        <div className="card-body">
          <h5 className="card-title">{assetsName.toUpperCase()}</h5>
          <button href="#" className="btn btn-primary-select">
            Select Photos
          </button>
        </div>
      </div>
    </>
  );
};
