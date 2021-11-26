import { useState } from 'react'
import Head from "next/head";
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
      <Head>
        <title>Resume Skill Tree</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Resume Skill Tree shows essential skills in a web UI instead of tossing it all in a Google Docs." />
      </Head>
      <main style={{ minHeight: "100vh", background: "#EEEEEE", overflowY: "hidden" }}>
        <Grid.Container gap={2}>
          <Header />
          <Sidebar skillTree={skills} setSkillTree={setSkills} />
          <SkillPanel />
        </Grid.Container>
      </main>
    </SkillsObjectContext.Provider>
  )
}

export async function getStaticProps() {
  const mySkillTree = { ...skillTree };
  const convertedFormat = convertTreeFormat(mySkillTree);

  return {
    props: {
      initialTree: convertedFormat,
    }
  }
}