export type AuthInitialState = {
    userData: null | UserData,
    isLoggedIn: boolean,
       isLoading: boolean,
       isError: null | boolean,	
       token:null | string,
       isRefreshing: boolean,
}

export type UserData = {
    name: string,
    email: string,
}

export type LoginThunkInput = {
    email: string,
    password: string,
}

export type LoginThunkOutput = {
    user: UserData,	
    token: string,
}


export type RegisterThunkInput = {
    email: string,
    password: string,
    name: string,
    
}



