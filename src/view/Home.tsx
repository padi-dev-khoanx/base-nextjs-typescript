import React from "react";
import { toast } from "react-toastify";
import ButtonCommon from "../components/common/ButtonCommon";
import InputCommon from "../components/common/InputCommon";
import useTrans from "../hooks/useTrans";

const Dashboard = () => {
  const trans = useTrans();
  return (
    <div className="flex items-center flex-wrap space-x-4">
      <span className="text-red-400">{trans.home.title}</span>
      <ButtonCommon isDisable={true}>Disable</ButtonCommon>
      <ButtonCommon isLoading={true}>Loading</ButtonCommon>
      <ButtonCommon onClick={() => console.log("hello")}>Normal</ButtonCommon>
      <InputCommon placeholder="Custom input" />
    </div>
  );
};

export default Dashboard;
