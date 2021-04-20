import { render, screen } from '@testing-library/react'
import App from '../../App'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  )
})
