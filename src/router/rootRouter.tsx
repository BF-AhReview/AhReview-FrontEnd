import React, { Suspense } from "react";
const MainRouter = React.lazy(() => import("./mainRouter"));

const RootRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <MainRouter />
    </Suspense>
  );
};

export default RootRouter;
