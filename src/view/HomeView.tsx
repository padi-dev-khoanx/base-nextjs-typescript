import Link from "next/link";
import { routerConstant } from "../constant/routerConstant";


const HomeView = ({ data }: any) => {
  return (
    <div>
        <Link href={routerConstant.event.index}
        >
          <div>
            Event Archive
          </div>
          </Link>
    </div>
  );
};

export default HomeView;
