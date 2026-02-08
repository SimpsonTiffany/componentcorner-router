import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../ProductCard'

describe('ProductCard', () => {
    const mockProduct = {
        id: 1,
        name: 'Test Product',
        price: 25,
    }

    test('renders product info and Add to Cart button', () => {
        const mockAddToCart = vi.fn()

        render(
            <MemoryRouter>
                <ProductCard
                    product={mockProduct}
                    addToCart={mockAddToCart}
                    onAddToCart={mockAddToCart}
                />
            </MemoryRouter>
        )

        expect(screen.getByText(/test product/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
    })

    test('calls addToCart when button is clicked', async () => {
        const user = userEvent.setup()
        const mockAddToCart = vi.fn()

        render(
            <MemoryRouter>
                <ProductCard
                    product={mockProduct}
                    addToCart={mockAddToCart}
                    onAddToCart={mockAddToCart}
                />
            </MemoryRouter>
        )

        await user.click(screen.getByRole('button', { name: /add to cart/i }))
        expect(mockAddToCart).toHaveBeenCalled()
    })
})
