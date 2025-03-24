import { Container } from 'reactstrap';
import Header from '../components/Common/Header';
import Filter from '../components/Home/Filter';
import HotDeals from '../components/Home/HotDeals';
import CourtsNearMe from '../components/Home/CourtsNearMe';
import OpenPlay from '../components/Home/OpenPlay';
import FindPlayers from '../components/Home/FindPlayers';
import SubscribeBanner from '../components/Home/SubscribeBanner';
import Footer from '../components/Common/Footer';

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Header />
      <Container className="mt-3 mb-5">
        <Filter />
        <HotDeals className="mt-5" />
        <CourtsNearMe className="mt-5" />
        <OpenPlay className="mt-5 pt-4" />
        <FindPlayers className="mt-5 pt-4" />
        <SubscribeBanner className="mb-5" />
      </Container>
      <Footer />
    </>
  );
}
