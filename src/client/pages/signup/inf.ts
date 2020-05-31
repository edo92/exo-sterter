export interface Istate {
    user: {
        name: any;
    };
}

export interface Iprops {
    handleCreateUser: (usr: any) => void;
    client: any;
}
