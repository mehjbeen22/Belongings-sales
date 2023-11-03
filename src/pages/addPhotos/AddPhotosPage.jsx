import { useState } from "react";
import { BsHouseAddFill } from "react-icons/bs";

import { DemoImageCard } from "../../component/demoImageCard/DemoImageCard";
import { ImageInfoModal } from "../../component/imageModal/ImageInfoModal";
import { DemoAssets } from "../../database/demoImageData";

export const AddPhotos = () => {
  const [toggleImageModal, setToggleImageModal] = useState(false);
  const [assetsArray, setAssetsArray] = useState(DemoAssets);

  const [imageInfoField, setImageInfoFiels] = useState({
    assetsName: "",
    assetsUrl: "",
  });

  const modalSubmit = (event) => {
    event.preventDefault();
    setToggleImageModal(false)
    setAssetsArray([...assetsArray, imageInfoField ])
  };


  console.log(assetsArray);
  return (
    <>
      <div className="imageMainCase">
        {assetsArray.map((item, index) => {
          return <DemoImageCard key={index} data={{item, setAssetsArray, index}} />;
        })}

        <button
          className="btn btn-primary-add"
          onClick={() => setToggleImageModal(true)}
        >
          More <br /> <BsHouseAddFill size={25} />
        </button>
      </div>

      {toggleImageModal && (
        <ImageInfoModal
          setToggleImageModal={setToggleImageModal}
          data={{
            setToggleImageModal,
            imageInfoField,
            setImageInfoFiels,
            modalSubmit,
          }}
        />
      )}
    </>
  );
};
