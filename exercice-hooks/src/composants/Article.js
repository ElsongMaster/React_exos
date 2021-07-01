function Article(props) {
  let tabColor = ["blue", "yellow", "purple", "green", "grey"];
  return (
    <div>
      {props.tabArticle.map((art, index) => (
        <p style={{ textAlign: "center", backgroundColor: tabColor[index] }}>
          {art}
        </p>
      ))}
    </div>
  );
}

export default Article;
