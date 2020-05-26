export interface Istate {
  user: {
    name: any;
  };
}

export interface Iprops {
  authUser: (usr: any) => void;
}
