import { ChangeEvent, FormEvent } from "react"
import { useSearch } from "../hooks/useSearch"
import "../styles/nav.css"
import { useNavigate } from "react-router"


export const Search = () => {

const { items, searchText, setSearchText, searchHandler, isLoading } = useSearch()
const navigate = useNavigate()

const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    await searchHandler(searchText)
    console.log("Current items:", items)
    navigate("/search-result")
}


    return (
        <>
        <form id="search-form" onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="search" 
                className="search-input" 
                value={searchText}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>{ setSearchText(e.target.value)}}
            ></input>
            <button type="submit" disabled={isLoading} className="search-btn">{isLoading ? "Searching..." : "Search"}</button>
        </form>
        </>
    )
} 