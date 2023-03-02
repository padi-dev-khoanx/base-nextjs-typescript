import { SellerHeader } from "@/src/components/seller/common/SellerHeader";
import { ArtistSellerItem } from "@/src/components/seller/artist/ArtistSellerItem";
import { useLoading } from "@/src/hooks/useLoading";
import { Artist } from "@/src/type/artist.type";
import { routerConstant } from "@/src/utils/constant/routerConstant";
import Router from "next/router";

export const ListArtist = () => {
  const data: any = {
    data: {
      items: [
        {
          id: 1,
          name: "22",
        },
      ],
    },
  };
  const isLoading = false;
  useLoading(isLoading);
  const listGroup = data?.data?.items;
  console.log("listGroup", listGroup);
  return (
    <>
      <SellerHeader
        title="Artist"
        buttonRightBlueText="Thêm mới"
        buttonRightBlue={() => Router.push(routerConstant.seller.artist_create)}
      />
      <div>
        <div className="mr-[38px] ml-1">
          {listGroup?.map((artist: Artist) => (
            <ArtistSellerItem key={artist.id} data={artist} />
          ))}
        </div>
      </div>
    </>
  );
};
