import styled from 'styled-components'
// destop nb60px

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  form {
    min-width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input-container {
    padding: 2rem;
    border: 1px solid black;
  }
  .input {
    border: none;
    outline: none;
    margin-left: 3px;
    font-size: 1.5rem;
    width: 90%;
  }
  .input-btn {
    font-size: 1.5rem;
    min-width: 30rem;
    border: 1px solid black;
    padding: 2rem;
    text-align: center;
    margin-right: 0;
    outline: none;
  }

  svg {
    font-size: 1.5rem;
  }
`
export default Wrapper
