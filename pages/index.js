import { useState } from 'react'
// CUSTOM
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import SkillPanel from '../src/components/SkillPanel';
// CONTEXT
import SkillsTreeContext from '../src/context/SkillsTreeContext';
import SkillsPathContext from '../src/context/SkillsPathContext';
// UTILS
import { skillTree } from '../src/utils/constants';
import { convertTreeFormat } from '../src/utils/utils';
// GEIST UI
import { Grid } from '@geist-ui/react'

export default function Home({ initialTree, initialPath }) {
  const [skills, setSkills] = useState(initialTree);
  const [skillsPath, setSkillsPath] = useState(initialPath);

  return (
    <SkillsTreeContext.Provider value={{ skills, setSkills }}>
      <SkillsPathContext.Provider value={{ skillsPath, setSkillsPath }}>
        <Grid.Container gap={2}>
          <Header />
          <Sidebar />
          <SkillPanel />
        </Grid.Container>
      </SkillsPathContext.Provider>
    </SkillsTreeContext.Provider>
  )
}

export async function getStaticProps() {
  const calcPathFromTree = () => ["Java", "Build Tools"]
  const skillsPath = calcPathFromTree();
  const convertedFormat = convertTreeFormat(skillTree);
  
  // Add uuid for every node
  return {
    props: {
      initialTree: convertedFormat,
      initialPath: skillsPath
    }
  }
}