import styled from 'styled-components'
// destop nb60px

const Wrapper = styled.div`
  .title {
    padding-top: 2rem;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 450px;
    height: 400px;
    filter: blur(4px);
    background: #d1ebff;
    /* box-shadow: var(--box-shadow); */
  }
  .swiper-slide-active {
    filter: blur(0px);
    background: #fff;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .testimonial-container {
    width: 100%;
    padding-top: 3rem;

    .container-svg {
      text-align: center;
      font-size: 6rem;
      color: var(--primary);
    }
    .content {
      padding: 2rem;
      text-align: center;
    }

    .img-container {
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    .person-img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      position: relative;
    }

    .name {
      text-align: center;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 15px;
      color: var(--primary);
    }
  }
`
export default Wrapper
