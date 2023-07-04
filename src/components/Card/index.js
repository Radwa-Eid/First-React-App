import './card.css'
function Card(props) {
  let  {icon,caption,number}=props;
  return (
    <div className="card">
      <div className="row cardcontent">
        <span className="icon">{icon}</span>
        <span className="caption">{caption}</span>
        <span className="number">
          <span>{number}</span>
        </span>
      </div>
    </div>
  );
}
export default Card;