const DevCard = ({ devData }) => {
  return (
    <div className="dev-card">
      <h3>{devData.name}</h3>
      <img src={devData.ppUrl} />
    </div>
  );
};

export default DevCard;
