import { memo, useState } from "react";
import { Tooltip } from "reactstrap";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getLocalizedText, MultiLanguageText } from "@/utils/MultiLanguage";

import { Language } from "@/types/language";

const ToolTip = ({ content, language }: { content: MultiLanguageText; language: Language }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  if (!content) {
    return null;
  }
  return (
    <small>
      <FontAwesomeIcon className="icon" icon={faQuestionCircle} id="skill-tooltip" />
      <Tooltip placement="right" target="skill-tooltip" isOpen={tooltipOpen} toggle={toggle}>
        {getLocalizedText(content, language)}
      </Tooltip>
    </small>
  );
};

export default memo(ToolTip);
