import { Link } from "react-router-dom";

export default function CartPage({
    products = [],
    cart = [],
    removeFromCart,
    updateQty,
    clearCart,
}) {
    const cartLines = cart
        .map((item) => {
            const product = products.find((p) => p.id === item.id);
            return product ? { ...item, product } : null;
        })
        .filter(Boolean);

    const total = cartLines.reduce(
        (sum, line) => sum + line.product.price * line.qty,
        0
    );

    return (
        <main style={{ padding: "24px" }}>
            <h1>Your Cart</h1>

            {cartLines.length === 0 ? (
                <>
                    <p>Your cart is empty.</p>
                    <Link to="/products">Go to Products</Link>
                </>
            ) : (
                <>
                    <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
                        {cartLines.map((line) => (
                            <div
                                key={line.id}
                                style={{
                                    border: "1px solid #ccc",
                                    padding: "12px",
                                    borderRadius: "8px",
                                }}
                            >
                                <h2 style={{ margin: "0 0 8px 0" }}>{line.product.name}</h2>
                                <p style={{ margin: "0 0 8px 0" }}>
                                    ${line.product.price} ×{" "}
                                    <input
                                        type="number"
                                        min="1"
                                        value={line.qty}
                                        onChange={(e) =>
                                            updateQty(line.id, Number(e.target.value) || 1)
                                        }
                                        style={{ width: "60px" }}
                                    />
                                </p>

                                <button onClick={() => removeFromCart(line.id)}>Remove</button>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ marginTop: "20px" }}>Total: ${total.toFixed(2)}</h2>

                    <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                        <button onClick={clearCart}>Clear Cart</button>
                        <Link to="/products">Keep Shopping</Link>
                    </div>
                </>
            )}
        </main>
    );
}
