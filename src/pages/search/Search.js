import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
const Search = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:3001/products?" + searchParams

    const { data: items, error } = useFetch(url)
  
    return (
   
    <div>
    <h1>Resultados disponiveis</h1>
    {error && <p>{error}</p>}    
    <ol className="products">
    {items && 
    items.map((item) => (
        <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R${item.price}</p>
            <p>{item.description}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
        </li>
    ))}
    </ol>
    </div>
  )
}
export default Search
