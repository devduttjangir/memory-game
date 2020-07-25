import Game from "../Game";
import { GitContext } from "../../ContextProvider";
import React from "react";
import Repo from "../Repo/Repo";
import Sample from "../Sample/Sample";
import SampleFun from "../Sample/SampleFun";

const title = {
  title: "Git Repos",
  description: "Git Repo with contextHook",
};

const Root = () => (
  <>
    <GitContext.Provider value={title}>
      <Repo />
      {/* <Sample /> */}
      <SampleFun />
    </GitContext.Provider>
  </>
);
export default Root;
