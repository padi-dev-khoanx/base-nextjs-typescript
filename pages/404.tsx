import {Error} from "@/src/components/common/Error";

export default function Page404() {
  return (
    <Error
      errorNumber={404}
      errorTitle={'Page Not Found'}
      errorDesc={'アクセスしようとしたページは表示できませんでした'}
    />
  );
}
