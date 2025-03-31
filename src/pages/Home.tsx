import HomeFilter from '../components/Home/HomeFilter';
import HotDeals from '../components/Home/HotDeals';
import CourtsNearMe from '../components/Home/CourtsNearMe';
import OpenPlay from '../components/Home/OpenPlay';
import FindPlayers from '../components/Home/FindPlayers';
import SubscribeBanner from '../components/Home/SubscribeBanner';

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <HomeFilter />
      <HotDeals className="mt-5" />
      <CourtsNearMe className="mt-5" />
      <OpenPlay className="mt-5 pt-4" />
      <FindPlayers className="mt-5 pt-4" />
      <SubscribeBanner className="mb-5" />
    </>
  );
}
