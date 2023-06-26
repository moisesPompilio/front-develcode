// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatApiErrorMessage = (error: any): string => {
  let message = 'Falha ao comunicar com o servidor';
  if (error.response) {
    if (error.response.data.userMessage) {
      message = error.response.data.userMessage;
    } else if (error.response.data.message) {
      message = error.response.data.message;
    }
  }
  return message;
};
