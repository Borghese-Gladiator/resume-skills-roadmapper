// CONTEXT
import { useContext } from "react";
import SkillsTreeContext from "../../context/SkillsTreeContext";
import SkillsPathContext from "../../context/SkillsPathContext";
// GEIST UI
import { Tree } from '@geist-ui/react';

export default function Sidebar() {
  const { skills, setSkills } = useContext(SkillsTreeContext);
  const { skillsPathArr, setSkillsPathArr } = useContext(SkillsPathContext);
  const handleNodeClick = (path) => {
    setSkillsPathArr(path.split("/"));
  }
  
  return (
    <Tree onClick={handleNodeClick} value={skills} />
  )
}