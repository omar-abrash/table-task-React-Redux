// import { useCallback, useEffect } from "react";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { mainDataSliceActions } from "./redux/mainData-slice";
import { gettingData } from "./thuncks/thuncks";

import LayOut from "./Components/LayOut/LayOut";
import TablePage from "./Pages/TablePage";
//
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Thunk (Action Creater)
    dispatch(gettingData(dispatch));
  }, [dispatch]);
  //
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Navigate to="/page1" />} />
        <Route path="/:pageNumber" element={<TablePage />} />
      </Routes>
    </LayOut>
  );
}

export default App;
