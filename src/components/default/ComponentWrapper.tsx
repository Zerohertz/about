import { FC } from "react";

import { Language } from "@/components/default/Language";
import Payload from "@/components/default/Payload";

type Component<T> = (props: { payload: T; language: Language }) => JSX.Element;

const ComponentWrapper = <T extends Payload>(
  WrappedComponent: Component<T>,
): FC<{ payload: T; language: Language }> => {
  const Wrapper: FC<{ payload: T; language: Language }> = ({ payload, language }) => {
    if (payload?.disabled) {
      return null;
    }
    return <WrappedComponent payload={payload} language={language} />;
  };
  return Wrapper;
};

export default ComponentWrapper;
