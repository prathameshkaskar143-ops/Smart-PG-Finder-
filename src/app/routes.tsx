import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Rooms } from "./components/Rooms";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "rooms", Component: Rooms },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
