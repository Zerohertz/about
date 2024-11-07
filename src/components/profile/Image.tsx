import { PropsWithChildren } from "react";

import Image from "next/image";

function _Image({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-end text-center">
      <Image className="img-fluid rounded" width={320} height={320} src={src} alt="Profile" />
    </div>
  );
}

export default _Image;
