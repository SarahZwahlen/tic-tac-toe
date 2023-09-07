import githubLogo from "../assets/media/octo-cat.png";
import linkedinLogo from "../assets/media/linkedin-white.png";
const DevCard = ({ devData }) => {
  return (
    <div className="dev-card">
      <img className="dev-pp" src={devData.ppUrl} />
      <div className="dev-infos">
        <h3>{devData.name}</h3>
        <div className="dev-links">
          <img src={githubLogo} className="logo" />
          <a href={`${devData.repoUrl}`}>@{devData.githubTag}</a>
        </div>
        <div className="dev-links">
          <img src={linkedinLogo} className="logo" />
          <a href={`${devData.linkedIn}`}>Par ici</a>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
