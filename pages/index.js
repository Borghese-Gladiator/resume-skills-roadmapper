import { useState } from 'react'
// CUSTOM
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import SkillPanel from '../src/components/SkillPanel';
// CONTEXT
import SkillsObjectContext from '../src/context/SkillsObjectContext';
// UTILS
import { skillTree } from '../src/utils/constants';
import { convertTreeFormat } from '../src/utils/utils';
// GEIST UI
import { Grid } from '@geist-ui/react'

export default function Home({ initialTree }) {
  const [skills, setSkills] = useState(initialTree);
  const [skillsObj, setSkillsObj] = useState({
    pathArr: ["/"],
    name: "Default",
    desc: ""
  });

  return (
    <SkillsObjectContext.Provider value={{ skillsObj, setSkillsObj }}>
      <Grid.Container gap={2} justify="center">
        <Header />
        <Sidebar skillTree={skills} setSkillTree={setSkills} />
        <SkillPanel />
      </Grid.Container>
    </SkillsObjectContext.Provider>
  )
}

export async function getStaticProps() {
  const mySkillTree = {...skillTree};
  const convertedFormat = convertTreeFormat(mySkillTree);

  // Add uuid for every node
  return {
    props: {
      initialTree: convertedFormat,
    }
  }
}