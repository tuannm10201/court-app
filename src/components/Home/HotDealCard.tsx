import { Badge, Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';

type Props = {
  img: string;
  badgeName: string;
  badgeIcon: string;
  name: string;
};

export default function HotDealCard({ img, badgeName, badgeIcon, name }: Props) {
  return (
    <Card className="hot-deal-card h-100 position-relative rounded-24">
      <div className="hot-deal-card-img p-xl-3 p-0 pb-2 overflow-hidden position-relative">
        <img src={img} alt="hot-deal-card" className="rounded-4" />
        <Badge
          className="star-badge rounded-pill position-absolute px-3 py-2 text-black fw-semibold fs-6"
          color="light"
        >
          <i className="bi bi-star-fill star-icon me-1" /> 4.0
        </Badge>
        <Badge className="name-badge rounded-pill position-absolute text-white fs-6 fw-normal d-flex align-items-center gap-2">
          <img src={badgeIcon} alt={badgeName} /> {badgeName}
        </Badge>
      </div>
      <CardBody className="p-3 d-flex flex-column">
        <CardTitle tag="h5" className="fw-semibold">
          {name}
        </CardTitle>
        <CardText className="color-green fw-semibold">
          <i className="bi bi-geo-alt" /> 2.5 miles away
        </CardText>

        <div className="mt-3 d-flex gap-2">
          <div className="shadow-sm w-100 overflow-hidden text-center rounded-12 fw-semibold">
            <div className="card-schedule-heading text-white fs-sm">$20/hr</div>
            <div className="card-schedule-body">10:00 AM</div>
          </div>
          <div className="shadow-sm w-100 overflow-hidden text-center rounded-12 fw-semibold">
            <div className="card-schedule-heading text-white fs-sm">$20/hr</div>
            <div className="card-schedule-body">3:15 PM</div>
          </div>
          <div className="shadow-sm w-100 overflow-hidden text-center rounded-12 fw-semibold">
            <div className="card-schedule-heading text-white fs-sm">$20/hr</div>
            <div className="card-schedule-body">5:00 PM</div>
          </div>
        </div>

        <Button
          color="link"
          className="see-more text-center color-green w-100 mt-auto fw-semibold pb-4 pb-xxl-0"
        >
          See More
        </Button>
      </CardBody>
    </Card>
  );
}
