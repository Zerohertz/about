import { FC } from "react";

import Payload from "@/components/default/Payload";

type Component<T> = (props: { payload: T }) => JSX.Element;

const ComponentWrapper = <T extends Payload>(WrappedComponent: Component<T>): FC<{ payload: T; title?: string }> => {
  const Wrapper: FC<{ payload: T }> = ({ payload }) => {
    if (payload?.disable) {
      return null;
    }
    return <WrappedComponent payload={payload} />;
  };
  return Wrapper;
};

export default ComponentWrapper;
