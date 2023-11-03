import "./DisplayDetail.css";

export const DisplayDetail = () => {
  return (
    <div className="detail-case">
      <div className="card mb-3 property-info" style={{ maxWidth: "70%" }}>
        <div className="row g-0">
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-case">
        <img
          src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
          alt=""
          className="multi-img-size"
        />
        <img
          src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
          alt=""
          className="multi-img-size"
        />
        <img
          src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg"
          alt=""
          className="multi-img-size"
        />
      </div>
    </div>
  );
};
