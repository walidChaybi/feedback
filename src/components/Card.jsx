function Card({ children, reverse }) {
  return (
    <div
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "white",
        color: reverse ? "white" : "black",
      }}
      className="card"
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
