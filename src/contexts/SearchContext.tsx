import { createContext, ReactNode, useState } from "react"
import { SearchItem } from "../types/SearchItem"
import axios from "axios"

type SearchContextType = {
    searchText: string
    setSearchText: (text: string) => void
    items: SearchItem[] | null
    isLoading: boolean
    error: string
    searchHandler: (text:string) => Promise<void>
}

const SearchContext = createContext<SearchContextType | null>(null)

export const SearchProvider = ({children}: {children:ReactNode}) => {
    const [searchText, setSearchText] = useState<string>("")
    const [items, setItems] = useState<SearchItem[] | null>(null)
    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    
    const searchHandler = async (text: string) => {
        try {
            setIsLoading(true)
            setError("")
            
            const response = await axios.get("https://www.googleapis.com/customsearch/v1", {
                params: {
                    q: text,
                    key: import.meta.env.VITE_GOOGLE_KEY,
                    cx: import.meta.env.VITE_GOOGLE_CX
                }
            }) 
            console.log(response.data)
    
            if (response.data.items === undefined) {
                throw new Error('No search results')
            }
    
            setItems(response.data.items)
    
        } catch (error) {
            console.log(error)
            setError("Failed to fetch search result")
        } finally {
            setIsLoading(false)
        }  
    }
return (
    <SearchContext.Provider 
        value={{ searchText, setSearchText, items, isLoading, error, searchHandler }}>
        {children}
    </SearchContext.Provider>
)
}

export default SearchContext
