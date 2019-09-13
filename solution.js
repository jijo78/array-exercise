const processingHandler = resolved =>
  new Promise(resolve => {
    setTimeout(() => resolve(resolved), 2000);
  });

const errorHandler = async error => {
  const errorCodes = {
    NO_STOCK: { title: 'Error page', message: 'No stock has been found' },
    INCORRECT_DETAILS: { title: 'Error page', message: 'Incorrect details have been entered' },
    null: { title: 'Error page', message: null },
    undefined: { title: 'Error page', message: null }
  };
  const response = await errorCodes[error];
  return processingHandler(response);
};

const successHandler = async success => {
  const successCode = {
    success: { title: 'Order complete', message: null }
  };
  const response = await successCode[success];
  return processingHandler(response);
};

const getProcessingPage = data => {
  let resultObject = {};
  data.forEach(el => {
    if (el.state === 'success') {
      const successResult = successHandler(el.state);
      resultObject = successResult;
    }

    if (el.state === 'error') {
      const errorResult = errorHandler(el.errorCode);
      resultObject = errorResult;
    }
  });

  return resultObject;
};


export default getProcessingPage;
