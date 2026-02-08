import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import CartItem from '../CartItem'

describe('CartItem', () => {
    const sampleItem = {
        id: 1,
        name: 'Cart Product',
        quantity: 2,
        price: 10,
    }

    test('renders item info (name and quantity)', () => {
        render(
            <MemoryRouter>
                <CartItem item={sampleItem} removeFromCart={() => { }} />
            </MemoryRouter>
        )

        expect(screen.getByText(/cart product/i)).toBeInTheDocument()
        expect(screen.getByText(/2/)).toBeInTheDocument()
    })

    test('calls remove when remove button is clicked', async () => {
        const user = userEvent.setup()
        const mockRemove = vi.fn()

        render(
            <MemoryRouter>
                <CartItem item={sampleItem} removeFromCart={mockRemove} />
            </MemoryRouter>
        )

        const removeBtn = screen.getByRole('button', { name: /remove/i })
        await user.click(removeBtn)

        expect(mockRemove).toHaveBeenCalled()
    })
})
