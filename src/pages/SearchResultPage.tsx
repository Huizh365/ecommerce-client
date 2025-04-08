import { useSearch } from "../hooks/useSearch"


export const SearchResultPage = () => {
    const { items, error, isLoading } = useSearch()
    console.log("Current items in SearchResultPage:", items)

    if (!items || items.length === 0) return <p>No results found.</p>

    return (
        <>
        <div className="search-result">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {items.map((item) => (
                <div className="result-item" key={item.link}>
                    <section className="result-img-container">
                        {item.pagemap.cse_thumbnail && (
                            <img src={item.pagemap.cse_thumbnail[0].src} className="result-img" alt={item.title}/>
                        )}
                    </section>
                    <section className="result-text">
                        <h3>{item.title}</h3>
                        <p>{item.snippet}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" >Check Details</a>

                    </section>
                </div>
            ))}
        </div>        
        </>
    )
}