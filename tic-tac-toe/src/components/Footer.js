import DevCard from "./devCard";

const Footer = () => {
  const natachaData = {
    name: "Natacha Bourgain",
    ppUrl: "https://avatars.githubusercontent.com/u/126149427?v=4",
  };

  const sarahData = {
    name: "Sarah Zwahlen",
    ppUrl: "https://avatars.githubusercontent.com/u/122228917?v=4",
  };

  return (
    <footer className="footer">
       <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
      <p className=" display playerX">
        La meilleure application créée par Natacha et Sarah
      </p>
      <DevCard devData={natachaData} />
      <p className=" display2">Merci Professeur Sarah</p>
      <p className=" display2">T'es un super padawan Natacha</p>

      <DevCard devData={sarahData} />
    </footer>
  );
};
export default Footer;
