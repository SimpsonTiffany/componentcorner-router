import { render } from '@testing-library/react'
import HomePage from '../HomePage'

describe('HomePage', () => {
    test('renders without crashing', () => {
        const { container } = render(<HomePage />)
        expect(container).toBeTruthy()
    })
})

