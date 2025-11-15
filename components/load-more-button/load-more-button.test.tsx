import { render, screen } from "@testing-library/react"
import { LoadMoreButton } from "./index"

describe('Load More Button Component', () => {
  it('It renders rotate-icon if isLoading prop is undefined or false', () => {
    render(<LoadMoreButton />)

    expect(
      screen.getByTestId("rotate-icon")
    ).toBeInTheDocument()
  })

  it('It renders spinner if isLoading prop is true', () => {
    render(<LoadMoreButton isLoading={true}/>)

    expect(
      screen.getByTestId("spinner")
    ).toBeInTheDocument()
  })
})