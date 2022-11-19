import styled from 'styled-components'
const Wrapper = styled.div`
  padding-top: 2rem;

  .flex-courses {
    display: flex;
    gap: 2rem;
  }
  .filters {
    flex-basis: 27rem;
  }

  .listView {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .course {
      display: flex;
      gap: 3rem;
    }
  }

  .container-img {
    min-width: 28rem;
    height: 15rem;
    object-fit: cover;
  }
`

export default Wrapper
