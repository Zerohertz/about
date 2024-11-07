import { FC } from "react";

import Payload from "@/components/default/Payload";

type Component<T> = (props: { payload: T; title?: string }) => JSX.Element;

const ComponentWrapper = <T extends Payload>(WrappedComponent: Component<T>): FC<{ payload: T; title?: string }> => {
  const Wrapper: FC<{ payload: T; title?: string }> = ({ payload, title }) => {
    if (payload?.disable) {
      return null;
    }
    return <WrappedComponent payload={payload} title={title} />;
  };
  return Wrapper;
};

export default ComponentWrapper;
