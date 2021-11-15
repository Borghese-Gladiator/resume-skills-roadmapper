import { Grid, Card, Text } from '@geist-ui/react';

export default function Header() {
  return (
    <Grid xs={24}>
      <Card shadow width="100%" height="50px">
        <Text h4>
          Resume Skill Tree
        </Text>
      </Card>
    </Grid>
  )
}