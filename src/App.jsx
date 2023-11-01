import React from "react";
import {AddDetailPage} from "./pages/addDetails/AddDetailPage";
import { SigninPage } from "./pages/auth/SigninPage";

const App = () => {
  return (
    <div>
     <SigninPage />
     <AddDetailPage/>
    </div>
  );
};

export default App;
