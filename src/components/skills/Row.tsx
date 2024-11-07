import { PropsWithChildren } from "react";
import { Badge, Col, Row } from "reactstrap";

import Item from "@/components/skills/Item";
import Skill from "@/components/skills/Skill";

function _Row({ skill, index }: PropsWithChildren<{ skill: Skill; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ""}
      <Row>
        <Col sm={12} md={3} className="text-md-end">
          <h4 className="gray">{skill.category}</h4>
        </Col>
        <Col sm={12} md={9}>
          {createCalculatedSkillItems(skill.items)}
        </Col>
      </Row>
    </div>
  );
}

function createCalculatedSkillItems(items: Item[]) {
  const layer = 3;
  const splitPoint = Math.ceil(items.length / layer);
  const list: Item[][] = [];
  for (let i = 0, splitAfter = splitPoint; i < layer; i += 1, splitAfter += splitPoint) {
    list.push(items.slice(splitAfter - splitPoint, i === layer - 1 ? undefined : splitAfter));
  }

  return (
    <Row>
      <Col className="d-md-none mt-2" xs={12}>
        <ul>
          {items.map((skill, skillIndex) => {
            return (
              <li key={skillIndex.toString()}>
                {createBadge(skill.level)}
                {skill.title}
              </li>
            );
          })}
        </ul>
      </Col>
      {list.map((skills, index) => {
        return (
          <Col className="d-none d-md-block" md={4} xs={12} key={index.toString()}>
            <ul>
              {skills.map((skill, skillIndex) => {
                return (
                  <li className="mb-1" key={skillIndex.toString()}>
                    {createBadge(skill.level)}
                    {skill.title}
                  </li>
                );
              })}
            </ul>
          </Col>
        );
      })}
    </Row>
  );
}

function createBadge(level?: Item["level"]) {
  if (!level) {
    return "";
  }

  const color = (() => {
    switch (level) {
      case 3: {
        return "primary";
      }
      case 2: {
        return "secondary";
      }
      case 1:
      default: {
        return "light";
      }
    }
  })();

  return (
    <span>
      <Badge pill color={color}>
        {level}
      </Badge>{" "}
    </span>
  );
}

export default _Row;
