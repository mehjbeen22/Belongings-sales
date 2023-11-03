// import { useState, useEffect } from "react";
// import "./DemoImageCard.css";
// import { ImCross } from "react-icons/im";
// import { v4 as uuid } from "uuid";

// export const DemoImageCard = ({ item, setCollectImages, collectImages }) => {
//   const { assetsName, assetsUrl, _id } = item;

//   const obtainImages = (event, items) => {
//     const selectFile = event.target.files;
//     const filetoArray = Array.from(selectFile);
//     const fileUrl = filetoArray.map((item) => {
//       return URL.createObjectURL(item);
//     });
//     console.log(items, "item");
//   };

//   const uploadImage = () => {
//     // console.log(imageURL, "upload");
//   };

//   return (
//     <div className="card text-center mb-3 cardBody" style={{ width: "18rem" }}>
//       {/* <span onClick={deleteDemoAssets}>
//         <ImCross size={15} />
//       </span> */}

//       <img src={assetsUrl} className="demoImage" />
//       <div className="card-body">
//         <h5 className="card-title">{assetsName.toUpperCase()}</h5>

//         <label htmlFor="selected-image" className="btn btn-primary-select">
//           Select Photos
//         </label>

//         <input
//           multiple
//           accept="image/*"
//           type="file"
//           id="selected-image"
//           onChange={(event) => obtainImages(event, item)}
//           style={{ display: "none" }}
//         />

//         <div className="small-img-case">
//           {collectImages.categoryUrl.map((item, index) => {
//             return (
//               <img
//                 key={index}
//                 className="small-size-img"
//                 src={item}
//                 alt={index}
//               />
//             );
//           })}
//         </div>

//         <button type="button" className="upload-img" onClick={uploadImage}>
//           Upload Photos
//         </button>
//       </div>
//     </div>
//   );
// };
