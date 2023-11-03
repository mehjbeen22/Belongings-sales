import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import "./ImageInfoModal.css";

export const ImageInfoModal = ({ data }) => {
  const {
    setToggleImageModal,
    imageInfoField,
    setImageInfoFiels,
    modalSubmit,
  } = data;

  const haldleImageInput = (event) => {
    const fileEvent = event.target.files[0];
    const obtainUrl = URL.createObjectURL(fileEvent);

    setImageInfoFiels((imageInfoField) => ({
      ...imageInfoField,
      assetsUrl: obtainUrl,
    }));
  };

  return (
    <div className="modalCase">
      <form className="modalContent" onSubmit={modalSubmit}>
        <div className="close-modal">
          <label>Image Type</label>
          <ImCross size={20} onClick={() => setToggleImageModal(false)} />
        </div>

        <input
          autoComplete="off"
          value={imageInfoField.categoryName}
          type="text"
          id="imageType"
          onChange={(event) =>
            setImageInfoFiels((imageInfoField) => ({
              ...imageInfoField,
              assetsName: event.target.value,
            }))
          }
        />

        <center>
          <label htmlFor="fileType">
            <FaCloudUploadAlt size={30} />
          </label>
        </center>

        <input
          id="fileType"
          type="file"
          style={{ display: "none" }}
          onChange={haldleImageInput}
        />

        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
};
