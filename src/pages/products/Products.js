import { useParams } from "react-router-dom"
import { useFetch } from '../../hooks'

const Products = () => {

    const { id } = useParams()
    const url = 'http://'
    const { data: products, loading, error } = useFetch(url)
    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {products && (
                <div>
                    <h1>{products.name}</h1>
                    <p>R${products.price}</p>
                </div>
            )}
        </div>
    )
}

export default Products