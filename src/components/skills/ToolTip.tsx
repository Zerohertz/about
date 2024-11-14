import { useState } from "react";
import { Tooltip } from "reactstrap";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToolTip = ({ content }: { content: string }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  if (!content) {
    return null;
  }
  return (
    <small>
      <FontAwesomeIcon className="icon" icon={faQuestionCircle} id="skill-tooltip" />
      <Tooltip placement="right" target="skill-tooltip" isOpen={tooltipOpen} toggle={toggle}>
        {content}
      </Tooltip>
    </small>
  );
};

export default ToolTip;
