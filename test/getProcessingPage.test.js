import getProcessingPage from '../solution';

describe('getProcessingPage function', () => {
  it('should return with correct object and message is state is equal to error', async () => {
    const result = getProcessingPage([{ state: 'processing' }, { state: 'error' }]);
    await expect(result).resolves.toEqual({ title: 'Error page', message: null });
  });

  it('should return  with correct object is state is equal to success', async () => {
    const result = getProcessingPage([{ state: 'processing' }, { state: 'success' }]);
    await expect(result).resolves.toEqual({ title: 'Order complete', message: null });
  });

  describe('getProcessingPage errorCode', () => {
    it('should return message null if errorCode is undefined ', async () => {
      const result = getProcessingPage([{ state: 'processing' }, { state: 'error' }]);
      await expect(result).resolves.toEqual({
        title: 'Error page',
        message: null
      });
    });

    it('should return message null if errorCode is null ', async () => {
      const result = getProcessingPage([
        { state: 'processing' },
        { state: 'error', errorCode: null }
      ]);
      await expect(result).resolves.toEqual({
        title: 'Error page',
        message: null
      });
    });

    it('should return the right error message if errorCode key "NO_STOCK" is present', async () => {
      const result = getProcessingPage([
        { state: 'processing' },
        { state: 'error', errorCode: 'NO_STOCK' }
      ]);
      await expect(result).resolves.toEqual({
        title: 'Error page',
        message: 'No stock has been found'
      });
    });

    it('should return the right error message if errorCode key "INCORRECT_DETAILS" is present', async () => {
      const result = getProcessingPage([
        { state: 'processing' },
        { state: 'error', errorCode: 'INCORRECT_DETAILS' }
      ]);
      await expect(result).resolves.toEqual({
        title: 'Error page',
        message: 'Incorrect details have been entered'
      });
    });
  });
});
