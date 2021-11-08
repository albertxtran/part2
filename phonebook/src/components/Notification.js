const Notification = ({ message, error }) => {
  console.log("message: ", message);
  console.log("error: ", error);
  if (message === null) {
    return null;
  }

  return (
    <div>
      {message !== undefined && (
        <div className={error ? "error" : "success"}>{message}</div>
      )}
    </div>
  );
};

export default Notification;
