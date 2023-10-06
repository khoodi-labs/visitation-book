const Log = () => {
  const ErrorLog = (msg, data) => {
    console.log(msg);
    console.log(data);
    console.timeLog();
  };

  const InfoLog = (data, data) => {
    console.info(msg);
    console.info(data);
    console.timeLog();
  };

  const stackTrace = (data) => {
    console.stackTrace(data);
    console.timeLog();
  };

  return {
    error: ErrorLog,
    info: InfoLog,
    trace: stackTrace,
  };
};

export default Log;
