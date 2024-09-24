import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(null);

const AuthDispatchContext = createContext(null);

export function AuthProvider({ children }) {
  const [Auth, dispatch] = useReducer(
    AuthReducer,
    initialAuth
  );

  return (
    <AuthContext.Provider value={Auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}

function AuthReducer(Auth, action) {
  switch (action.type) {
    case 'update': {
        console.log(Auth, '>>', action)
      return { ...Auth, ...action.payload };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialAuth = {
  user: null,
  token: null,
  // other state properties
};
