import { createContext } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const name = { name : 'sadik'}
    return (
        <div>
           <AuthContext.Provider value={name}>
            {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;