const lsTokenKey = process.env.APP_TOKEN_KEY || 'token';

export const lsGetItem = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
  return null;
};

export const lsSetItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const lsRemoveItem = (key: string) => {
  localStorage.removeItem(key);
};

export const lsGetToken = () => {
  return lsGetItem(lsTokenKey);
};

export const lsSetToken = (token: any) => {
  lsSetItem(lsTokenKey, token);
};

export const lsRemoveToken = () => {
  lsRemoveItem(lsTokenKey);
};
