import styled from 'styled-components'

export const ActionContainer = styled.div`
  padding: 16px;
  // border: 2px solid ${({ theme }) => theme.colors.input};
  box-shadow: 0px 0px 1px #00f666, 0px -1px 3px #00f666;
  flex-grow: 1;
  flex-basis: 0;

  margin: 5px;
  ${({ theme }) => theme.mediaQueries.lg} {
    min-width: 350px;
  }
`

export const ActionTitles = styled.div`
  display: flex;
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
