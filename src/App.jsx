import About from "./pages/About";
import Home from "./pages/Home";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Error from "./pages/Error";
import Blog from "./pages/Blog";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
