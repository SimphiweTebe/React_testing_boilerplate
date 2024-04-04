import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', ()=> {
  beforeEach(()=> {
    render(<App />)
  })

  it('renders with no issues', ()=> {
    screen.debug()
  })
})