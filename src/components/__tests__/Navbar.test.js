import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme/index'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('test Navbar', () => {
  test('sanity', () => {
    expect(2 * 2).toBe(4)
  })
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    )
  })
  test('Navbar has a dashboard option', () => {
    const dashboardOption = screen.getByText(/dashboard/i)
    expect(dashboardOption).toBeInTheDocument()
  })
  test('Navbar contains project name', () => {
    const projectName = screen.getByText(/JR Dev Jobs/i)
    expect(projectName).toBeInTheDocument()
  })
  test('button present with text "sign up"', async () => {
    const button = await screen.findByRole('button', { name: /sign up/i })
    expect(button).toBeInTheDocument()
  })
})
