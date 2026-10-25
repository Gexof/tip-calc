function Bill({ billAmount, onSetBillAmount }) {
  const handleOnChange = (e) => {
    onSetBillAmount(Number(e.target.value));
  };

  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" value={billAmount} onChange={handleOnChange} />
    </div>
  );
}

export default Bill;
