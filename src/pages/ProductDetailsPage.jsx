import { Link, useParams } from "react-router-dom";

export default function ProductDetailsPage({ products = [], addToCart }) {
    const { id } = useParams();
    const productId = Number(id);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <main style={{ padding: "24px" }}>
                <h1>Product not found</h1>
                <Link to="/products">Back to Products</Link>
            </main>
        );
    }

    return (
        <main style={{ padding: "24px" }}>
            <Link to="/products">← Back to Products</Link>

            <h1 style={{ marginTop: "12px" }}>{product.name}</h1>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>

            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </main>
    );
}
