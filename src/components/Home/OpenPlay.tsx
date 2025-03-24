import OpenPlayCard from './OpenPlayCard';

type Props = {
  className?: string;
};

export default function OpenPlay({ className }: Props) {
  return (
    <>
      <div
        className={
          'd-flex justify-content-between align-items-center mb-3' +
          (className ? ` ${className}` : '')
        }
      >
        <h2 className="fw-semibold">Open Play</h2>
        <div className="color-green fs-md fw-semibold">View All</div>
      </div>

      <div className="d-flex gap-4 overflow-x-auto">
        {Array.from({ length: 4 }).map((_, index) => (
          <OpenPlayCard key={index} />
        ))}
      </div>
    </>
  );
}
