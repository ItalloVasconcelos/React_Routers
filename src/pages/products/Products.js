import { Link, useParams } from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'

const Products = () => {

    const { id } = useParams()
    const url = 'http://localhost:3001/products/' + id
    const { data: products, loading, error } = useFetch(url)
    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {!loading && products && (
                <div>
                    <h3>Produto: {products.name}</h3 >
                    <p>R${ products.price }</p>
                    {console.log(products.name)}
                    <Link to={`/products/${products.id}/info`}>Mais informações</Link>
                </div>
                
            )}
        </div>
    )
}

export default Products