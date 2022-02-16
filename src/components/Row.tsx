interface Props {
  label: string;
  children: React.ReactNode;
}

function Row({ label, children }: Props) {
  return (
    <div className="row">
      <div className="row__label-box">
        <span className="row__label-box__label">{label}</span>
      </div>
      <div className="row__value">{children}</div>
    </div>
  );
}

export default Row;
