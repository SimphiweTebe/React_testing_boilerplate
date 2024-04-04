import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', ()=> {
  beforeEach(()=> {
    render(<App />)
  })

  it('renders with no issues', ()=> {
    expect(screen.getByTestId('app')).toBeTruthy()
    expect(screen.getByRole('heading', { level: 1})).toBeInTheDocument()
    expect(screen.getByText(/Hello world/i)).toBeInTheDocument()

    screen.debug()
  })
})