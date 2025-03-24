import { Badge, Button, Card, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import findPlayerImg from '../../assets/images/find-player.jpeg';
import cellSignalIcon from '../../assets/images/cell-signal-low-gray-icon.svg';
import tennisBallIcon from '../../assets/images/tennis-ball-gray-icon.svg';

type Props = {
  className?: string;
  available?: boolean;
};

export default function FindPlayerCard({ className, available }: Props) {
  return (
    <Card
      className={
        'find-player-card rounded-24 d-flex flex-column p-3 align-items-start gap-2' +
        (className ? ` ${className}` : '')
      }
    >
      <div className="find-player-card-img pb-2 w-100">
        <img
          src={findPlayerImg}
          alt="find-player"
          width="100%"
          height="100%"
          className="rounded-24 object-fit-cover"
        />
      </div>

      <Badge
        className={
          'rounded-pill px-3 py-2 fw-semibold ' + (available ? 'available' : 'unavailable')
        }
      >
        {available ? 'Available' : 'Unavailable'}
      </Badge>

      <div className="fw-semibold fs-5">James R.</div>
      <div className="text-gray">123 Beach Ave, Miami, FL</div>
      <div className="d-flex gap-2 text-gray">
        <img src={cellSignalIcon} alt="" />
        Beginner
        <img src={tennisBallIcon} alt="" className="ms-2" />
        Tennis
      </div>

      <Button outline className="rounded-pill bg-green fw-semibold w-100 text-black mt-2">
        View Profile
      </Button>
    </Card>
  );
}
