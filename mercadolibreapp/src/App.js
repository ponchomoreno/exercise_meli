import { BrowserRouter, Routes, Route } from "react-router-dom";
import { storeExerciseMeli } from "./store/storeReducers";
import { Provider } from "react-redux";
import SearchBox from "./exercise_meli/components/SearchBox";
import ItemDetail from "./exercise_meli/components/ItemDetail";
import FoundItems from "./exercise_meli/components/FoundItems";
import HomePage from "./exercise_meli/components/HomePage";
import Container from '@mui/material/Container';
import * as routes from "./routesExercise/routes";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Container className="App" maxWidth={false} disableGutters={true} sx={{ minHeight: '100vh', width: '100%' }}>
        <Provider store={storeExerciseMeli}>
        <SearchBox />
          <Routes>
            <Route exact path={routes.HOMEPAGE} element={<HomePage/>} />
            <Route path={routes.ITEMS_FOUND} element={<FoundItems />} />
            <Route path={routes.ID_ITEM} element={<ItemDetail />} />
          </Routes>
        </Provider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
