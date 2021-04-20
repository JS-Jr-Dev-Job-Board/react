import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Footer from '../Footer/Footer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme/index'

describe('testing Footer', () => {
  test('that project name is present', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )
    const projectName = await screen.findByText(/career shock/i)
    expect(projectName).toBeInTheDocument()
  })
  test('that company name is present', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )
    const companyName = await screen.findByText(/code shock/i)
    expect(companyName).toBeInTheDocument()
  })
  test('that year is current year', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )
    const date = new Date() //get the current date
    const year = date.getFullYear() //take the year
    const asdf = new RegExp(`${year}`) //turn the year into RegExp
    const yearRendered = await screen.findByText(asdf) //find by regex
    expect(yearRendered).toBeInTheDocument() //expect the present year to be in footer
  })
})
