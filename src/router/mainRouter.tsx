import { Contents, PostStore } from "../container";
import { FC } from "react";
import { Route, Routes } from "react-router";

const mainRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Contents />} />
      <Route path="/post" element={<PostStore />} />
    </Routes>
  );
};

export default mainRouter;
