import { ENDPOINT } from "../config"
import axios from "axios"
import { FetchData } from "../types"

export const getRandom = async () => {
  const response = await axios.get(ENDPOINT.getRandom)
  const data: FetchData =  response.data
  return data
}

export const getIndex = async (index: number) => {
  const response = await axios.get(ENDPOINT.getIndex(index))
  const data: FetchData =  response.data
  return data
}

export const deleteIndex = async (index: number) => {
  const response = await axios.get(ENDPOINT.deleteIndex(index))
  return response.status
}

export const submitIndex = async (index: number) => {
  const response = await axios.get(ENDPOINT.submitIndex(index))
  return response.status
}