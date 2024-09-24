const STORE_KEY = 'user-id';

const setLocalState = (value: number) => {
  localStorage.setItem(STORE_KEY, JSON.stringify(value));
};

const getLocalState = (): number | undefined => {
  const store = localStorage.getItem(STORE_KEY);

  return store ? JSON.parse(store) : undefined;
};

export { setLocalState, getLocalState };
