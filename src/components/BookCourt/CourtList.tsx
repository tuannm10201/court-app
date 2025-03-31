import { Col, Row } from 'reactstrap';
import hotDealCard1 from '../../assets/images/hot-deal-card-1.jpg';
import tennisBallIcon from '../../assets/images/tennis-ball-icon.svg';
import HotDealCard from '../Home/HotDealCard';
import Map from '../Common/Map';
import BottomSheet from './BottomSheet';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

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

type Props = {
  showMap: boolean;
  className?: string;
};

export default function CourtList({ showMap, className }: Props) {
  const [locSelected, setLocSelected] = useState<number | null>(null);

  const showBottomSheet = useMediaQuery('max', 'xl');

  return (
    <Row className={'' + (className ? ` ${className}` : '')}>
      {showMap ? (
        <>
          <Col xxl={7} xl={6} className="d-none d-xl-block">
            <Row>
              <Col xxl={4} xl={6}>
                <HotDealCard {...hotDeals[0]} />
              </Col>
              <Col xxl={4} xl={6}>
                <HotDealCard {...hotDeals[1]} />
              </Col>
              <Col xxl={4} className="d-none d-xxl-block">
                <HotDealCard {...hotDeals[2]} />
              </Col>
            </Row>
          </Col>

          <Col xxl={5} xl={6}>
            <div className="map-container w-100 h-100 rounded-24 overflow-hidden">
              <Map locSelected={locSelected} setLocSelected={setLocSelected} />
            </div>
          </Col>

          {showBottomSheet && <BottomSheet locSelected={locSelected} />}
        </>
      ) : (
        <>
          {hotDeals.map((deal, index) => (
            <Col className="mt-4" xxl={3} xl={4} key={index}>
              <HotDealCard {...deal} />
            </Col>
          ))}
          {hotDeals.map((deal, index) => (
            <Col className="mt-4" xxl={3} xl={4} key={index}>
              <HotDealCard {...deal} />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
}
