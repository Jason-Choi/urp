import { Suspense, useEffect, useMemo, useState } from "react"
// @mui
import { Button, Container, Grid, Stack } from "@mui/material"
import { styled } from "@mui/material/styles"
// redux
import CaptionView from "./CaptionView"
import CSVTable from "./CSVTable"
import Title from "./Title"
import SentenceTypeSelector from "./SentenceTypeSelector"
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil"
import { dataState } from "../states/data"
import caption2Object from "../util/caption2Object"
import axiosInstance from "../util/axios"
import csv2Object from "../util/csv2Object"
import { Data } from "../types"
// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

export default function Main() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useRecoilState(dataState)

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get("/api/randomproduct")
        const responseData = response.data
        const caption = caption2Object(responseData.raw_caption)
        const table = csv2Object(responseData.data)

        if (caption === undefined || table === undefined) return

        const data: Data = {
          index: responseData.statista_index,
          title: responseData.title,
          unit: responseData.axis_title,
          caption,
          table,
        }
        console.log(data)
        setData(data)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  useEffect(() => {
    if (data.caption.length > 0) setIsLoaded(true)
  }, [data])




  return (
    <>
      {isLoaded ? (
        <StyledRoot>
          <Container>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Title title={data.title} />
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
                  <CaptionView />
                </Stack>
              </Grid>
              <Grid item md={6}>
                <SentenceTypeSelector />
                <CSVTable />
              </Grid>
            </Grid>
          </Container>
        </StyledRoot>
      ) : (
        <div>loading...</div>
      )}
    </>
  )
}
