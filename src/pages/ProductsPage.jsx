
import { Link } from "react-router-dom";

export default function ProductsPage({ products = [], addToCart }) {
    return (
        <main style={{ padding: "24px" }}>
            <h1>Products</h1>

            <div style={{ marginTop: "16px", display: "grid", gap: "16px" }}>
                {products.map((p) => (
                    <div
                        key={p.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "16px",
                            borderRadius: "8px",
                        }}
                    >
                        <h2 style={{ margin: "0 0 8px 0" }}>{p.name}</h2>
                        <p style={{ margin: "0 0 8px 0" }}>{p.description}</p>
                        <p style={{ margin: "0 0 12px 0", fontWeight: "bold" }}>
                            ${p.price}
                        </p>

                        <div style={{ display: "flex", gap: "12px" }}>
                            <Link to={`/products/${p.id}`}>View Details</Link>
                            <button onClick={() => addToCart(p.id)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
