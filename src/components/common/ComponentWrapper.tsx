import { FC, PropsWithChildren } from "react";

import Payload from "@/components/common/Payload";

type Component<T> = (props: PropsWithChildren<{ payload: T }>) => JSX.Element;

const ComponentWrapper = <T extends Payload>(WrappedComponent: Component<T>): FC<PropsWithChildren<{ payload: T }>> => {
  const Wrapper: FC<PropsWithChildren<{ payload: T }>> = ({ payload }) => {
    if (payload?.disable) {
      return null;
    }
    return <WrappedComponent payload={payload} />;
  };
  return Wrapper;
};

export default ComponentWrapper;
