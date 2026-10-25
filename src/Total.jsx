function Total({ billAmount, tip }) {
  return (
    <div>
      <p>{`You Pay $${billAmount} ($${billAmount} + $${tip}tip)`}</p>
    </div>
  );
}

export default Total;
