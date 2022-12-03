import styled from 'styled-components'
// destop nb60px

const Wrapper = styled.header`
  height: 60px;
  border-bottom: 1px solid var(--color-gris);
  box-shadow: var(--shadow-1);
  .nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 20rem;
  }
  .user-radius {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: black;
    width: 40px;
    height: 40px;
    color: #fff;
  }
  .search-bar {
    width: 50rem;
    border: 1px solid black;
    height: 3rem;
    border-radius: var(--border-radius);
  }

  input {
    border: none;
    background: transparent;
    outline: none;
  }

  .button-init {
    display: flex;
    gap: 1.5rem;
  }
  .search-bar {
    position: relative;
    height: 3.5rem;

    padding-top: 0.5rem;
    .icon {
      position: absolute;
      font-size: 17px;
      margin-left: 3px;
    }
    .input-search {
      width: 95%;
      margin-left: 5%;
    }
  }
`
export default Wrapper
