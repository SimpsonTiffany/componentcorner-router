import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="productCard">
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="productCard__description">
                {product.description}
            </p>

            <p>${Number(product.price).toFixed(2)}</p>

            <button
                className="productCard__button"
                onClick={() => {
                    console.log("Button clicked:", product);
                    onAddToCart(product);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
}


