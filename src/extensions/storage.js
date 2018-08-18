// @flow

export class ReactJSStorage {
  namespace: string;
  constructor(namespace: string = 'global') {
    this.namespace = namespace;
  }
  getItem = (key: string) => {
    return localStorage.getItem(`${this.namespace}:${key}`);
  };
  setItem = (key: string, data: boolean | string | number) => {
    localStorage.setItem(`${this.namespace}:${key}`, data.toString());
  };
  getItemJSON = (key: string) => {
    const item = this.getItem(key);
    if (item) {
      try {
        return JSON.parse(item);
      } catch (err) {
        console.error(err);
        return;
      }
    }
  };
  setItemJSON = (key: string, data: {}) => {
    this.setItem(key, JSON.stringify(data));
  };
  removeItem = (key: string) => {
    localStorage.removeItem(`${this.namespace}:${key}`);
  };
  clear = () => {
    localStorage.clear();
  };
  clearNamespace = () => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        if (key.startsWith(`${this.namespace}:`)) {
          localStorage.removeItem(key);
        }
      }
    }
  };
}
