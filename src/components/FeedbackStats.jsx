function FeedbackStats({ feedbacks }) {
  //claculate the average Rating
  let average = (
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length
  ).toFixed(1);

  return (
    <>
      <div className="feedback-stats">
        <h4>{feedbacks.length} Reviews</h4>
        <h4>Average : {average ? average : "0"}</h4>
      </div>
    </>
  );
}

export default FeedbackStats;
