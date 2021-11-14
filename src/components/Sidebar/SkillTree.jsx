// CONTEXT
import { useContext } from "react";
import SkillsTreeContext from "../../context/SkillsTreeContext";
import SkillsPathContext from "../../context/SkillsPathContext";
// GEIST UI
import { Tree } from '@geist-ui/react';

export default function Sidebar() {
  const { skills, setSkills } = useContext(SkillsTreeContext);
  const { skillsPath, setSkillsPath } = useContext(SkillsPathContext);
  const handleNodeClick = (path) => {
    console.log(path);
    const pathArr = path.split("/")
    setSkillsPath(pathArr)
  }
  
  return (
    <Tree onClick={handleNodeClick} value={skills} />
  )
}