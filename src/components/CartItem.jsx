export default function CartItem({ item, onRemove }) {
    return (
        <div className="cartItem">
            <span>{item.name}</span>
            <span>${Number(item.price).toFixed(2)}</span>

            <button onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </div>
    );
}
