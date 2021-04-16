import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import userEvent from '@testing-library/user-event'

//components
import SearchBox from '../SearchBox/SearchBox'

test('[SearchBox] sanity check, searchbox component renders without errors', async () => {
  render(
    <RecoilRoot>
      <SearchBox placeholder='test name' />
    </RecoilRoot>
  )
})

test('[SearchBox] takes custom placeholder prop', async () => {
  render(
    <RecoilRoot>
      <SearchBox placeholder='test name' />
    </RecoilRoot>
  )

  const testPlaceholder = await screen.findByPlaceholderText(/test NAME/i)
  expect(testPlaceholder).toBeInTheDocument()
})

test('[SearchBox] aria label exists', async () => {
  render(
    <RecoilRoot>
      <SearchBox placeholder='test name' />
    </RecoilRoot>
  )

  const ariaLabel = await screen.findByLabelText(/Search Box Text Field/i)
  expect(ariaLabel).toBeInTheDocument()
})

test('[SearchBox] submitted searchbox text renders on {enter}', async () => {
  const testNameProp = 'testname'

  const search = render(
    <RecoilRoot>
      <SearchBox name={testNameProp} />
    </RecoilRoot>
  )

  const searchFrom = document.querySelector(`#${testNameProp}`)
  userEvent.type(searchFrom, 'entered search box text {enter}')

  const displayText = await screen.findByText(/entered search box text/i)
  expect(displayText).toBeInTheDocument()
  
})
