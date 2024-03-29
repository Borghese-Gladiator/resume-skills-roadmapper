import { useContext } from "react";
import SkillsObjectContext from "../context/SkillsObjectContext";
import { Grid, Text, Tag } from '@geist-ui/react';

const nonBreakingSpaceChar = '\u00A0'

export default function SkillPanel() {
  const { skillsObj, setSkillsObj } = useContext(SkillsObjectContext);
  const { name, pathArr, desc } = skillsObj;
  const description = desc === "" ? "No description yet" : desc;
  return (
    <Grid xs={24} md={12} style={{ flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        {
          pathArr.map((val, idx) =>
            <Text h3 key={`skills_path_${idx}`}>{(idx ? `${nonBreakingSpaceChar}> ` : '')}
              <Tag type="success">{val}</Tag>
            </Text>
          )
        }
      </div>
      <Text h3>{name}</Text>
      <Text p>{description}</Text>
    </Grid>
  )
}