import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import "./ImageInfoModal.css";

export const ImageInfoModal = ({ setToggleImageModal }) => {
  return (
    <div className="modalCase">
      <form className="modalContent">
        <div className="close-modal">
          <label htmlFor="imageType">
            Image Type 
          </label>
          <ImCross size={20}  onClick={() => setToggleImageModal(false)} />
        </div>
        <input type="text" id="imageType" />
        <FaCloudUploadAlt size={30} />
        <button
          className="submit-button"
         
        >
          Submit
        </button>
      </form>
    </div>
  );
};
