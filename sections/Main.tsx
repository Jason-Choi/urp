import { useEffect, useState } from "react"
// @mui
import { Button, Container, Grid, Stack } from "@mui/material"
import { styled } from "@mui/material/styles"
// redux
import { getDatas } from "../redux/slices/data"
import { useDispatch, useSelector } from "../redux/store"
import CaptionView from "./CaptionView"
import CSVTable from "./CSVTable"
import Title from "./Title"
import SentenceTypeSelector from "./SentenceTypeSelector"
// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function Main() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const { datas } = useSelector((state: any) => state.data)
  useEffect(() => {
    dispatch(getDatas() as any)
  }, [dispatch])
  const { title, data, raw_caption } = datas

  useEffect(() => {
    if (raw_caption !== undefined) {
      setIsLoading((prev) => !prev)
    }
  }, [raw_caption])

  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Title title={title} />
          </Grid>
          <Grid item md={6}>
            <Stack
              direction="column"
              spacing={3}
              sx={{
                textAlign: "center",
                mb: { xs: 5, md: 10 },
              }}
            >
              <CaptionView caption={raw_caption} />
              
            </Stack>
          </Grid>
          <Grid item md={6}>
            <SentenceTypeSelector />
            {isLoading ? <CSVTable data={data} /> : null}
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  )
}
