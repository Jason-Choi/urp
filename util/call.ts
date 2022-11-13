import { ENDPOINT } from "../config"
import axios from "axios"

export const getRandom = async () => {
  const response = await axios.get(ENDPOINT.getRandom)
  return response.data
}

export const getIndex = async (index: number) => {
  const response = await axios.get(ENDPOINT.getIndex(index))
  return response.data
}

export const deleteIndex = async (index: number) => {
  const response = await axios.get(ENDPOINT.deleteIndex(index))
  return response.status
}

export const submitIndex = async (index: number) => {
  const response = await axios.get(ENDPOINT.submitIndex(index))
  return response.status
}