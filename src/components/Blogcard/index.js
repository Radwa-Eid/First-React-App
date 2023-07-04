import "./blogcard.css";

function Blogcard(props) {
    let {blogImg ,tittle,text}=props;
  return (
    <div className="blogCard">
      <div className="blogImg">
        <img src={blogImg} alt="blog"></img>
      </div>
      <h2 className="blogTittle">{tittle}</h2>
      <div className="blogDetails">
        <span>by Mark Spiker</span>
        <span>.</span>
        <span>Jan 18, 2019</span>
        <span>.</span>
        <span className="blogNews">News</span>
      </div>
      <p className="blogText">{text}</p>
    </div>
  );
}

export default Blogcard;
