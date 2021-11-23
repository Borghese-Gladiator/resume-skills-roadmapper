// CONTEXT
import { useContext } from "react";
import SkillsObjectContext from "../context/SkillsObjectContext";
// GEIST UI
import { Grid, Tree } from '@geist-ui/react';

export default function Sidebar({ skillTree, setSkillTree }) {
  const { skillsObj, setSkillsObj } = useContext(SkillsObjectContext);
  const handleNodeClick = (path) => {
    console.log(path);
    console.log(skillTree);
    /*
    // skillTree is a list of Tree objects
    const skillKeys = path.split("/")
    const node = skillTree.find((val, idx) => {
      const { name } = val;
      if (name === skillKeys[0]) {
        return val;
      }
    });
    let desc = ""
    for (key of skillKeys) {
      desc = "desc" in node ? : node[]
    }
    // desc: !== null ? : "",
    */
    
    const pathArr = path.split("/");
    const name = pathArr[pathArr.length - 1]

    setSkillsObj({
      ...skillsObj,
      name: name,
      pathArr: pathArr
    });
  }

  return (
    <Grid xs={24} md={12}>
      <Tree onClick={handleNodeClick} value={skillTree} />
    </Grid>
  )
}