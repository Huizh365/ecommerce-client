import axios from "axios";
import { useState } from "react";
import { SearchItem } from "../types/SearchItem";
import { useNavigate } from "react-router";

export const useSearch = () => {
    const [searchText, setSearchText] = useState<string>("")
    const [items, setItems] = useState<SearchItem[] | null>(null)
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const searchhandler = async (text: string) => {
    try {
        setIsLoading(true)
        setError("")
        
        const response = await axios.get("https://www.googleapis.com/customsearch/v1", {
            params: {
                q: text,
                key: "AIzaSyAqKl1gxuThUX0wnPj_Rk_HYoClyXHhwqI",
                cx: "b73355d65080447a5"
            }
        }) 
        console.log(response.data)

        if (response.data.items === undefined) {
            setError("No search results")
            throw new Error('No search results')
        }

        const searchItems = response.data.items
        setItems(searchItems)
        console.log( searchItems)
        return searchItems

    } catch (error) {
        console.log(error)
        setError("Failed to fetch search result")
    } finally {
        setIsLoading(false)
    }

}


    return {
        searchText,
        setSearchText,
        items,
        error,
        isLoading,
        searchhandler,
        navigate,
        setError

    }
}