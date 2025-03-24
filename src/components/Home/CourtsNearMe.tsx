import { Col, Row } from 'reactstrap';
import HotDealCard from './HotDealCard';
import hotDealCard1 from '../../assets/images/hot-deal-card-1.jpg';
import tennisBallIcon from '../../assets/images/tennis-ball-icon.svg';
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
    img: hotDealCard1,
    badgeName: 'Tennis',
    badgeIcon: tennisBallIcon,
    name: 'Sunset Tennis Club',
  },
  {
    img: hotDealCard1,
    badgeName: 'Tennis',
    badgeIcon: tennisBallIcon,
    name: 'Sunset Tennis Club',
  },
  {
    img: hotDealCard1,
    badgeName: 'Tennis',
    badgeIcon: tennisBallIcon,
    name: 'Sunset Tennis Club',
  },
];

export default function CourtsNearMe({ className }: Props) {
  const [emblaRef] = useEmblaCarousel({
    breakpoints: { '(min-width: 1200px)': { active: false } },
  });

  return (
    <>
      <div
        className={
          'd-flex justify-content-between align-items-center mb-3' +
          (className ? ` ${className}` : '')
        }
      >
        <h2 className="fw-semibold">Courts Near Me</h2>
        <div className="color-green fs-md fw-semibold">View All</div>
      </div>

      <Row className="d-none d-xl-flex">
        {hotDeals.map((deal, index) => (
          <Col xxl={3} xl={4} key={index} className={index === 3 ? 'd-none d-xxl-block' : ''}>
            <HotDealCard {...deal} />
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
      </div>
    </>
  );
}
