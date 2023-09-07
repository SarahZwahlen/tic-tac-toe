import DevCard from "./devCard";

const Footer = () => {
  const natachaData = {
    name: "Natacha Bourgain",
    ppUrl: "https://avatars.githubusercontent.com/u/126149427?v=4",
    repoUrl: "https://github.com/Bourgain-N",
    githubTag: "Bourgain-N",
    linkedIn: "https://www.linkedin.com/in/natacha-bourgain-a12914264/",
  };

  const sarahData = {
    name: "Sarah Zwahlen",
    ppUrl: "https://avatars.githubusercontent.com/u/122228917?v=4",
    repoUrl: "https://github.com/SarahZwahlen",
    githubTag: "SarahZwahlen",
    linkedIn: "https://www.linkedin.com/in/sarah-zwahlen-8bb858156/",
  };

  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
      <div className="credits">
        <p className=" display playerX">
          La meilleure application de morpion créée par Natacha et Sarah
        </p>
        <div className="greatings">
          <DevCard devData={natachaData} />
          <div className="messages">
            <p className=" display2">Merci Professeur Sarah</p>
            <p className=" display2">T'es un super padawan Natacha</p>
          </div>
          <DevCard devData={sarahData} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
