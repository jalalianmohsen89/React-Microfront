import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";

const App = React.lazy(() => import("../App"));
const Products = React.lazy(() => import("../products/index"));
const Users = React.lazy(() => import("../users/index"));
const Verification = React.lazy(() => import("../verification/index"));
const Loading = () => <p>Loading ...</p>;

const RoutesPages = () => (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/verification" element={<Verification/>}/>
        </Routes>
      </Suspense>
    </Router>
);

export default RoutesPages