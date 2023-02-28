import type { NextPage } from "next";
import { useSetRecoilState } from "recoil";
import { currentMenuItemState } from "../../../../../src/recoil/sellerSidebarRecoilState";
import { useEffect } from "react";
import { LayoutSeller } from "src/components/layouts/LayoutSeller";
import { SellerShowPackView } from "@/src/view/pack/SellerShowPackView";

const SellerPack: NextPage = () => {
  const setCurrentMenuItem = useSetRecoilState(currentMenuItemState);
  useEffect(() => {
    setCurrentMenuItem("pack");
  }, []);

  return (
    <LayoutSeller title="Show packs">
      <SellerShowPackView />
    </LayoutSeller>
  );
};

export default SellerPack;
