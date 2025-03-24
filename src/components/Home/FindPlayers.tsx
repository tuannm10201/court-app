import FindPlayerCard from './FindPlayerCard';

type Props = {
  className?: string;
};

export default function FindPlayers({ className }: Props) {
  return (
    <>
      <div
        className={
          'd-flex justify-content-between align-items-center mb-3' +
          (className ? ` ${className}` : '')
        }
      >
        <h2 className="fw-semibold">Find Players</h2>
        <div className="color-green fs-md fw-semibold">View All</div>
      </div>

      <div className="d-flex gap-4 overflow-x-auto">
        {Array.from({ length: 4 }).map((_, index) => (
          <FindPlayerCard key={index} available={index % 2 === 0} />
        ))}
      </div>
    </>
  );
}
