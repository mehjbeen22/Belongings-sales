import { createContext, useReducer } from "react";
import { PropertyReducer } from "./PropertyReducer";

export const PropertyContext = createContext(null);

export const PropertyContextProvider = ({ children }) => {
  const initialState = {
    persistData: {
      id: "003",
      address: "456 Elm St",
      geolocation: "Latitude: 34.0522, Longitude: -118.2437",
      configuration: "2 bedrooms, 2.5 bathrooms",
      amenities: "Balcony, parking",
      availability: "Available from 1st December",
      photos:
        "https://cdn.pixelspray.io/v2/black-bread-289bfa/TIw66q/wrkr/t.resize(h:780,w:780)/data/Westelm/01072022img/7517735_1.jpg",
      rent: "2,800/month",
      maintenance: "150/month",
      deposit: "2,800",
      multipleImages: [],
    },

    storePersistData: [
      {
        id: "0011",
        address: "123 Main St",
        geolocation: "Latitude: 40.7128, Longitude: -74.0060",
        configuration: "3 bedrooms, 2 bathrooms",
        amenities: "Swimming pool, gym, parking",
        availability: "Available now",
        photos:
          "https://www.godrejinterio.com/imagestore/B2C/56101543SD00155/56101543SD00155_A1_803x602.jpg",
        rent: "2,500/month",
        maintenance: "200/month",
        deposit: "2,500",
        multipleImages: [
          "https://i.etsystatic.com/26008302/r/il/77a603/3416039959/il_1080xN.3416039959_p5o9.jpg",
          "https://img1.exportersindia.com/product_images/bc-full/2022/9/4323551/glass-top-wooden-dining-table-set-1662615899-6529125.jpeg",
          "https://media.designcafe.com/wp-content/uploads/2020/02/21005007/modern-dining-table-designs-for-your-home.jpg",
        ],
      },
    ],
  };
  const [assetState, dispatchAssetState] = useReducer(
    PropertyReducer,
    initialState
  );

  return (
    <PropertyContext.Provider value={{ assetState, dispatchAssetState }}>
      {children}
    </PropertyContext.Provider>
  );
};
