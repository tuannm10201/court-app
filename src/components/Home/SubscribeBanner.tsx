import { Button, Card, Form, Input } from 'reactstrap';

type Props = {
  className?: string;
};

export default function SubscribeBanner({ className }: Props) {
  return (
    <Card
      inverse
      className={
        'subscribe-banner rounded-24 overflow-hidden border-0 position-relative' +
        (className ? ` ${className}` : '')
      }
    >
      <div className="overlay w-100 h-100">
        <div className="texture w-100 h-100"></div>
      </div>
      <div className="position-absolute d-flex flex-column align-items-center text-center p-3">
        <h1 className="subscribe-title fw-semibold">
          Book Faster, Play More! <br /> Stay ahead with alerts
        </h1>
        <p className="subscribe-subtext mt-3">
          Ready, set, play! Lock in your court for your next game now
        </p>

        <Form className="subscription-container d-flex mt-4 gap-3 justify-content-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="input-field rounded-pill text-white border-0 outline-none flex-grow-1"
            required
          />
          <Button
            type="submit"
            className="subscribe-button fw-semibold rounded-pill bg-white border-0 text-black px-4"
          >
            Subscribe
          </Button>
        </Form>
      </div>
    </Card>
  );
}
