import { Link }  from 'react-router-dom'
//import { useFetch } from '../../hooks'

const Home = () => {
    const url = 'http://'
    const {data: items, loading, error} = useFetch(url)
     return (
        <div>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ol className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{products.name}</h2>
                        <p>R${products.price}</p>
                        <p>{products.description}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default Home