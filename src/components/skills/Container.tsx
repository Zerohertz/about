import { Badge, Col, Row } from "reactstrap";

import Item from "@/components/skills/Item";
import Skill from "@/components/skills/Skill";

const Container = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <div>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <h4 className="gray">{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          <Skills items={skill.items} />
        </Col>
      </Row>
    </div>
  );
};

const Skills = ({ items }: { items: Item[] }) => {
  const layer = 3;
  const splitPoint = Math.ceil(items.length / layer);
  const list: Item[][] = [];
  for (let i = 0; i < layer; i += 1) {
    const start = i * splitPoint;
    const end = i === layer - 1 ? items.length : start + splitPoint;
    list.push(items.slice(start, end));
  }
  return (
    <Row>
      <Col className="d-md-none mt-2" xs={12}>
        <ul>
          {items.map((skill, skillIndex) => (
            <li key={skillIndex.toString()}>
              <SkillBadge level={skill.level} />
              {skill.title}
            </li>
          ))}
        </ul>
      </Col>
      {list.map((skills, index) => (
        <Col className="d-none d-md-block" md={4} xs={12} key={index.toString()}>
          <ul>
            {skills.map((skill, skillIndex) => (
              <li className="mb-1" key={skillIndex.toString()}>
                <SkillBadge level={skill.level} />
                {skill.title}
              </li>
            ))}
          </ul>
        </Col>
      ))}
    </Row>
  );
};

const SkillBadge = ({ level }: { level?: Item["level"] }) => {
  if (!level) return null;
  const color = (() => {
    switch (level) {
      case 3:
        return "primary";
      case 2:
        return "secondary";
      case 1:
      default:
        return "light";
    }
  })();
  return (
    <span>
      <Badge pill color={color}>
        {level}
      </Badge>{" "}
    </span>
  );
};

export default Container;
