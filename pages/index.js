import { useState } from 'react'
// CUSTOM
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import SkillPanel from '../src/components/SkillPanel';
// CONTEXT
import SkillsPathContext from '../src/context/SkillsPathContext';
// UTILS
import { skillTree } from '../src/utils/constants';
import { convertTreeFormat } from '../src/utils/utils';
// GEIST UI
import { Grid } from '@geist-ui/react'

export default function Home({ initialTree, initialPath }) {
  const [skills, setSkills] = useState(initialTree);
  const [skillsPathArr, setSkillsPathArr] = useState(initialPath);

  return (
    <SkillsPathContext.Provider value={{ skillsPathArr, setSkillsPathArr }}>
      <Grid.Container gap={2} justify="center">
        <Header />
        <Sidebar skillTree={skills} setSkillTree={setSkills} />
        <SkillPanel />
      </Grid.Container>
    </SkillsPathContext.Provider>
  )
}

export async function getStaticProps() {
  const convertedFormat = convertTreeFormat(skillTree);

  // Add uuid for every node
  return {
    props: {
      initialTree: convertedFormat,
      initialPath: ["/"]
    }
  }
}