import { v4 as uuid } from "uuid";

export const PropertyReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_DATA":
      const { name, value } = payload;
      return {
        ...state,
        persistData: { ...state.persistData, [name]: value, id: uuid() },
      };
    case "SET_DATA_IMAGE":
      return {
        ...state,
        persistData: { ...state.persistData, photos: payload },
      };
    case "SET_MULTIPLE_IMAGE":
      console.log(payload, "-");
      return {
        ...state,
        storePersistData: [
          ...state.storePersistData,
          { ...state.persistData, multipleImages: payload },
        ],
      };

    default:
      break;
  }
};
