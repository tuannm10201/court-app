import { Badge, Button, Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import openPlayImg from '../../assets/images/open-play-img.jpg';
import avatar1 from '../../assets/images/open-play-avatar-1.jpg';
import avatar2 from '../../assets/images/open-play-avatar-2.jpg';
import avatar3 from '../../assets/images/open-play-avatar-3.jpg';
import cellSignal from '../../assets/images/cell-signal-low-icon.svg';

type Props = {
  className?: string;
};

const avatars = [avatar1, avatar2, avatar3];

export default function OpenPlayCard({ className }: Props) {
  return (
    <Card
      inverse
      className={
        'open-play-card rounded-24 overflow-hidden position-relative' +
        (className ? ` ${className}` : '')
      }
    >
      <CardImg
        alt="Open play overlay"
        src={openPlayImg}
        className="rounded-4 object-fit-cover"
        height={390}
      />
      <Badge className="open-play-badge rounded-pill position-absolute text-white fw-semibold d-flex align-items-center px-3 pb-2 pt-1">
        <img src={cellSignal} alt="cell-signal" width={20} height={20} />{' '}
        <span className="mt-1"> Easy</span>
      </Badge>
      <CardImgOverlay className="overlay pb-4 d-flex flex-column mt-auto justify-content-end align-items-start">
        <CardTitle tag="h4" className="fw-semibold">
          Casual Tennis Meetup
        </CardTitle>
        <CardText>Sunset Tennis Club</CardText>
        <CardText className="d-flex align-items-center gap-2">
          Fri, Feb 16 <i className="bi bi-circle-fill dot" /> 1h 30m
        </CardText>

        <div className="avatar-group mb-3 mt-2">
          {avatars.map((src, index) => (
            <div key={index} className="avatar-item" style={{ left: `${index * 20}px` }}>
              <img src={src} alt="avatar" width={24} height={24} className="object-fit-cover" />
            </div>
          ))}
          <div
            className="avatar-item extra fw-semibold text-white fs-sm"
            style={{ left: `${avatars.length * 20}px` }}
          >
            +1
          </div>
        </div>

        <Button
          outline
          className="border-light-gray fw-semibold rounded-pill bg-white text-black px-3 mt-4"
        >
          Join Now
        </Button>
      </CardImgOverlay>
    </Card>
  );
}
