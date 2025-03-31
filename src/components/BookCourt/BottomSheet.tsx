import { useState } from 'react';
import { Drawer } from 'vaul';
import HotDealCard from '../Home/HotDealCard';
import hotDealCard1 from '../../assets/images/hot-deal-card-1.jpg';
import { LOCATIONS } from '../../data/fake-data';

const snapPoints = ['130px', '500px', 1];

type Props = {
  locSelected: number | null;
};

export default function BottomSheet({ locSelected }: Props) {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);

  if (locSelected) {
    const locationName = LOCATIONS.find((loc) => loc.id === locSelected)!.name;
    return (
      <Drawer.Root open dismissible={false} modal={false}>
        <Drawer.Portal>
          <Drawer.Content className="vaul-drawer pt-0 selected-card-in-map shadow-none position-fixed bg-white top-0 start-0 end-0 px-3 py-3 bg-transparent">
            <Drawer.Title className="d-none" />
            <Drawer.Description className="d-none" />
            <HotDealCard img={hotDealCard1} name={locationName} distanceBadge />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Drawer.Root
      open
      dismissible={false}
      modal={false}
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      disablePreventScroll
    >
      <Drawer.Portal>
        <Drawer.Content className="vaul-drawer position-fixed bg-white top-0 start-0 end-0">
          <Drawer.Title className="vaul-title mt-2">
            <div className="gray-bar rounded-pill mx-auto"></div>
          </Drawer.Title>
          <div className="px-3 mt-1">
            <Drawer.Description className="text-center">
              <span className="fw-semibold"> 142</span> clubs/courts found,{' '}
              <span className="fw-semibold"> 139</span> with availability
            </Drawer.Description>

            <div className="map-locations-container overflow-y-auto d-flex flex-column gap-3">
              {LOCATIONS.map((loc) => (
                <HotDealCard
                  key={loc.id}
                  img={hotDealCard1}
                  name="Sunset Tennis Club"
                  distanceBadge
                />
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
