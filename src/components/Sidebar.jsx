// CONTEXT
import { useContext } from "react";
import SkillsPathContext from "../context/SkillsPathContext";
// GEIST UI
import { Grid, Tree } from '@geist-ui/react';

export default function Sidebar({ skillTree, setSkillTree }) {
  const { skillsPathArr, setSkillsPathArr } = useContext(SkillsPathContext);
  const handleNodeClick = (path) => {
    setSkillsPathArr(path.split("/"));
  }

  return (
    <Grid xs={24} md={12}>
      <Tree onClick={handleNodeClick} value={skillTree} />
    </Grid>
  )
}