import { Button, Stack } from "@mui/material"
import { blue, brown, green, grey, orange, pink, purple, red } from "@mui/material/colors"

const SentenceTypeSelector = () => {
  return (
    <>
      <Stack direction="row" flexShrink={0} justifyContent="space-between" mb={4}>
        <Button variant="contained" style={{ backgroundColor: blue[500] }}>1 Overview</Button>
        <Button variant="contained" style={{ backgroundColor: orange[500] }}>2 Describe</Button>
        <Button variant="contained" style={{ backgroundColor: green[500] }}>3 Compare</Button>
        <Button variant="contained" style={{ backgroundColor: red[500] }}>4 Trend</Button>
      </Stack>
      <Stack direction="row" flexShrink={0} justifyContent="space-between">
        <Button variant="contained" style={{ backgroundColor: brown[500] }}>5 Context and Background</Button>
        <Button variant="contained" style={{ backgroundColor: pink[500] }}>6 Connected Sentence</Button>
        <Button variant="contained" style={{ backgroundColor: grey[500] }}>7 None</Button>
      </Stack>
    </>
  )
}

export default SentenceTypeSelector