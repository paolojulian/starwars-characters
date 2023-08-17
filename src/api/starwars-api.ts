import API from "@/config/api"
import apiClient from "@/lib/api-client"
import { Pager } from "@/types/pager"
import { StarwarsCharacter } from "@/types/starwars"

export const fetchStarwarsCharacters = async () => {
  try {
    const response = await apiClient<Pager<StarwarsCharacter>>(API.starwars, {
      method: 'GET',
    })
    return response.data;
  } catch (e) {
    // add an error handler
    throw e
  }
}