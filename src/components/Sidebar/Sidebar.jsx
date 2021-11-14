import SkillTree from './SkillTree';
import { Grid, Card } from '@geist-ui/react';

export default function Sidebar() {
  return (
    <Grid xs={24} md={12}>
      <SkillTree />
    </Grid>
  )
}