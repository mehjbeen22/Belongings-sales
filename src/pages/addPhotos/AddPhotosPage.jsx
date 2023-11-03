import { useState } from "react";
import { BsHouseAddFill } from "react-icons/bs";

import { DemoImageCard } from "../../component/demoImageCard/DemoImageCard";
import { ImageInfoModal } from "../../component/imageModal/ImageInfoModal";
import { DemoAssets } from "../../database/demoImageData";

export const AddPhotos = () => {
  const [toggleImageModal, setToggleImageModal] = useState(false);
  return (
    <>
      <div className="imageMainCase">

        {DemoAssets.map((item, index) => {
          return <DemoImageCard key={index} item={item}  />;
        })}

        <button className="btn btn-primary-add" onClick={()=>setToggleImageModal(true)}>
          More <br /> <BsHouseAddFill size={25} />
        </button>

        
        
      </div>

      {toggleImageModal && (
        <ImageInfoModal setToggleImageModal={setToggleImageModal} />
      )}
    </>
  );
};
