import styled from 'styled-components'

export const ActionContainer = styled.div`
  //  padding: 16px;
  // border: 2px solid ${({ theme }) => theme.colors.input};
  border:3px solid #00F666;
  flex-grow: 1;
  flex-basis: 0;
  min-width:300px;
  margin-bottom: 16px;
  font-family:"AlienSolid"
 

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 12px;
    /* max-height: 130px; */
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-right: 0;
    margin-bottom: 0;
    /* max-height: 130px; */
  }
`

export const ActionTitles = styled.div`
  display: flex;
  margin-bottom: 8px;

  
`

export const ActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  
`