import {Error} from "@/src/components/common/Error";

export default function Page500() {
  return (
    <Error
      errorNumber={500}
      errorTitle={'Internal Server Error'}
      errorDesc={'アクセスしようとしたページは表示できませんでした'}
    />
  );
}
