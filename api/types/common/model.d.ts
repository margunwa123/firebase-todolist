declare function get(): any;

interface Model {
  create: ([propName]: any) => void;
  get: () => any[];
  update: (id: string, [propName]: any) => void;
  delete: (id: string) => void;
}
