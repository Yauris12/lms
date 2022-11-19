import styled from 'styled-components'
const Wrapper = styled.div`
  main {
    background-color: #1c1d1f;
    color: white;
    height: 30rem;
    padding-top: 3rem;
    position: relative;
  }
  h1 {
    font-size: 3rem;
    width: 70%;
    margin-top: 1px;
  }
  .description {
    font-size: 1.5rem;
    width: 60%;
    margin-bottom: 1rem;
  }

  .courseFloat {
    background-color: white;
    height: 50rem;
    width: 35rem;
    position: absolute;
    color: black;
    border: 1px solid white;
    box-shadow: var(--shadow-3);

    right: 5%;
    top: 2rem;

    .button-init {
      margin-top: 2rem;
      .btn {
        display: block;

        width: 80%;
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }
  }

  .img-container {
    height: 20rem;
    width: 100%;
    background: red;
  }
  .price {
    margin-top: 2rem;
    font-size: 3.5rem;
    font-weight: bold;
    margin-left: 2rem;
  }

  .course-footer {
    margin-left: 2rem;
  }
  .course-content {
    margin-bottom: 3rem;
    h2 {
      font-size: 3.5rem;
      font-weight: bold;
    }

    .lessons {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .icon {
        font-size: 3rem;
      }
      .icon1 {
        font-size: 2rem;
      }
    }
    .lession-container {
      background: #f7f9fa;
      border: 2px solid #d1d7dc;

      width: calc(100% - 38rem);
      .header-lession {
        padding-left: 4rem;
        padding-top: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        gap: 2rem;
        align-items: center;
      }
      .content-lession {
        background: var(--white);
        border-top: 2px solid #d1d7dc;
        height: 100%;
        margin-bottom: 0;
        padding-top: 1rem;

        .flex-lession {
          display: flex;
          justify-content: space-between;
          margin-right: 3rem;
          align-items: center;
          padding: 1.6rem;
          padding-left: 4rem;
        }
        .flex-title {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
      }
    }
  }

  .comment-course {
    h3 {
      font-weight: bold;
      font-size: 3.5rem;
    }

    .flex-comment {
      display: flex;
      gap: 2rem;
      width: calc(100% - 38rem);
      align-items: center;
      padding-bottom: 2rem;
      border-bottom: 1px solid #d1d7dc;
    }
    .wrapper-perfil {
      border-radius: 50%;
      min-width: 50px;
      width: 50px;
      height: 50px;
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--white);
      font-weight: bold;
      font-size: 2.3rem;
    }
    .container-start {
      display: flex;
      gap: 2rem;
    }
  }
`

export default Wrapper
