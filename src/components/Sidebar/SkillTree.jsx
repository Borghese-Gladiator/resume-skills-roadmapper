import { useContext } from "react";
import SkillsTreeContext from "../../context/SkillsTreeContext";
import { Tree } from '@geist-ui/react';

function Item({ title, children }) {
  if (children.length !== 0) {
    return (
      <Tree.Folder name={title}>
        {children.map((item, idx) => <Item key={idx} {...item} />)}
      </Tree.Folder>
    )
  } else {
    return (
      <Tree.File name={title} />
    )
  }
}

const handleNodeClick = (path) => console.log(path)

export default function Sidebar() {
  const { skills, setSkills } = useContext(SkillsTreeContext);
  return (
    <Tree onClick={handleNodeClick}>
      {skills.map((item, index) => <Item key={index} {...item} />)}
    </Tree>
  )
}