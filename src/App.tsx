import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { PrivateRoutes } from "./constants/routes";

const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<div>Landing Page</div>} />
          <Route element={<Dashboard />}>
            <Route index path={PrivateRoutes.HOME} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </Suspense>
  );
}

export default App;
