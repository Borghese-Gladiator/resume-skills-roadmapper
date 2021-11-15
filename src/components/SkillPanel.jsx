import { useContext } from "react";
import SkillsPathContext from "../context/SkillsPathContext";
import { Grid, Card } from '@geist-ui/react';

const nonBreakingSpaceChar = '\u00A0'

export default function SkillPanel() {
  const { skillsPathArr, setSkillsPathArr } = useContext(SkillsPathContext);
  return (
    <Grid xs={24} md={12}>
      {
        skillsPathArr.map((val, idx) => <span key={`skills_path_${idx}`}>{(idx ? `${nonBreakingSpaceChar}> ` : '') + val}</span>)
      }
    </Grid>
  )
}