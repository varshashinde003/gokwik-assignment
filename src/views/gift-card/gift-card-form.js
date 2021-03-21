const GiftCardForm = ({
  mobile,
  onChangeHandler,
  hasError,
  onGetGiftCardHandler,
}) => {
  return (
    <>
      <p className="my-4">
        You have WON Paytm Gift Card of Rs 200 for{" "}
        <strong>placing the order on Man Matters</strong>
      </p>
      <div className="mobile-input">
        <input
          className="form-control"
          type="text"
          value={mobile || ""}
          name="mobile"
          placeholder="Enter mobile number"
          onChange={onChangeHandler}
          maxLength={10}
          pattern="[0-9]*"
        />
        {hasError ? (
          <p className="text-muted mt-1 font-size-10">
            Enter the mobile number used with Man Matters
          </p>
        ) : null}
        <div className="click-action mt-3">
          <button
            className="btn btn-next"
            disabled={hasError}
            onClick={onGetGiftCardHandler}
          >
            Wow! Get my Paytm Gift Card{" "}
            <i className="fa fa-chevron-right ml-3"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default GiftCardForm;
