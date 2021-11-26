import { useToasts, Grid, Card, Text, Button } from '@geist-ui/react';

export default function Header() {
  const [toasts, setToast] = useToasts()
  const click = () => setToast({ text: 'Resume Skill Tree shows essential skills in a web UI instead of tossing it all in a Google Docs.' })
  return (
    <Grid xs={24}>
      <Card type={"success"} shadow width="100%" height="50px">
        <Text h4>
          Resume Skill Tree{" "}
          <Button type="success" ghost auto scale={0.7} onClick={click}>Desc</Button>
        </Text>
      </Card>
    </Grid>
  )
}