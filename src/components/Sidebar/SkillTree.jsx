import { useContext } from "react";
import SkillsTreeContext from "../../context/SkillsTreeContext";
import { Tree } from '@geist-ui/react';

const handleNodeClick = (path) => console.log(path)

export default function Sidebar() {
  const { skills, setSkills } = useContext(SkillsTreeContext);
  return (
    <Tree onClick={handleNodeClick} value={skills} />
  )
}