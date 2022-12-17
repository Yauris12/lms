import styled from 'styled-components'
// destop nb60px

const Wrapper = styled.div`
  .grid-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 3rem;
  }

  .card {
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: 0.5rem;
  }
`
export default Wrapper
