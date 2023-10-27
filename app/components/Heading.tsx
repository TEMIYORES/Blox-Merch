type headingType = {
  title: string;
  center?: boolean;
};
const Heading = ({ title, center }: headingType) => {
  return (
    <div className={`${center && "text-center"}`}>
      <h1 className="font-bold text-2xl">{title}</h1>
    </div>
  );
};

export default Heading;
