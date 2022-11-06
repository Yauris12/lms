import styled from 'styled-components'
const Wrapper = styled.div`
  .swiper-slide {
    width: 15%;
  }

  @media (max-width: 1024px) {
    .swiper-slide {
      width: 25%;
    }
    .skeleton-movie {
      width: 25%;
    }
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 35%;
    }
    .skeleton-movie {
      width: 35%;
    }
  }

  .container-img {
    position: relative;
  }
  .course-card {
    display: block;
    width: 100%;
    height: 12rem;
    object-fit: cover;

    background-repeat: no-repeat;
    border-radius: var(--border-radius);
    background-position: center center;
    background-size: cover;
    margin-bottom: 1rem;
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
`

export default Wrapper
