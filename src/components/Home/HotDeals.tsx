import { Button, Card, CardBody, CardText, CardTitle, Col, List, Row } from 'reactstrap';
import ctaBannerBg from '../../assets/images/cta-banner-bg.svg';
import ctaBannerImg from '../../assets/images/cta-banner-image.svg';
import hotDealCard1 from '../../assets/images/hot-deal-card-1.jpg';
import hotDealCard2 from '../../assets/images/hot-deal-card-2.jpg';
import tennisBallIcon from '../../assets/images/tennis-ball-icon.svg';
import racquetIcon from '../../assets/images/racquet-icon.svg';

import HotDealCard from './HotDealCard';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  className?: string;
};

const hotDeals = [
  {
    img: hotDealCard1,
    badgeName: 'Tennis',
    badgeIcon: tennisBallIcon,
    name: 'Sunset Tennis Club',
  },
  {
    img: hotDealCard2,
    badgeName: 'Padel',
    badgeIcon: racquetIcon,
    name: 'Ocean Breeze Padel Club',
  },
  {
    img: hotDealCard2,
    badgeName: 'Padel',
    badgeIcon: racquetIcon,
    name: 'Ocean Breeze Padel Club',
  },
];

export default function HotDeals({ className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    breakpoints: { '(min-width: 1200px)': { active: false } },
  });

  const onSelect = useCallback(() => {
    if (emblaApi) setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  function goToSlide(index: number) {
    setActiveIndex(index);
    emblaApi?.scrollTo(index);
  }
  return (
    <>
      <Row className={'hot-deals-container ' + className}>
        <Col xxl={3}>
          <Card className="cta-banner-card rounded-24 position-relative overflow-hidden text-white p-2 border-0">
            <CardBody className="mb-xxl-5 pb-xxl-5">
              <CardTitle tag="h2" className="fw-semibold">
                Ready to Play?
                <br /> Sign Up Today!
              </CardTitle>
              <CardText className="mt-4">
                Day or night, your game is just a click away—sign up now!
              </CardText>

              <List type="unstyled" className="mt-4 d-flex flex-column gap-2">
                <li>
                  <i className="bi bi-check-circle-fill me-2" /> Instant Court Booking
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2" /> Challenge & Compete
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2" /> Play Anytime, Anywhere
                </li>
              </List>

              <Button className="mt-3 mb-xxl-5 rounded-pill bg-white text-black fw-semibold px-3 py-2">
                Sign Up
              </Button>
            </CardBody>
            <img src={ctaBannerBg} alt="" className="bg-icon end-0 bottom-0" />
            <img src={ctaBannerImg} alt="" className="bg-icon end-0 bottom-0" />
          </Card>
        </Col>

        <Col xxl={9} className="d-flex flex-column mt-xxl-0 mt-4">
          <div className="hot-deals d-flex justify-content-between align-items-center rounded-4 px-3 py-2 mb-4 text-white fw-semibold">
            <div className="fs-4">
              <i className="bi bi-fire me-2" />
              Hot Deals
            </div>
            <div className="fs-md d-flex gap-lg-2 flex-lg-row flex-column align-items-end">
              <span> Remaining Time</span> <span> 12 :00 : 28</span>
            </div>
          </div>

          <Row className="flex-fill d-none d-xl-flex">
            {hotDeals.map((hotDeal, index) => (
              <Col md={4} key={index}>
                <HotDealCard {...hotDeal} />
              </Col>
            ))}
          </Row>

          <div className="embla d-xl-none" ref={emblaRef}>
            <div className="embla__container">
              {hotDeals.map((deal, index) => (
                <div key={index} className="embla__slide">
                  <HotDealCard {...deal} />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center gap-2 mt-3">
              {hotDeals.map((_, index) => (
                <div
                  key={index}
                  role="button"
                  className={`pagination-dot rounded-pill ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <div className="d-none d-xl-flex gap-3 justify-content-end mt-3">
        <Button className="hot-deals-nav-btn rounded-circle fs-4 bg-gray border-0 left-btn">
          <i className="bi bi-arrow-left" />
        </Button>

        <Button className="hot-deals-nav-btn rounded-circle fs-4 bg-gray border-0 right-btn active">
          <i className="bi bi-arrow-right" />
        </Button>
      </div>
    </>
  );
}
