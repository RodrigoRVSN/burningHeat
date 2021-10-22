import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import * as AuthSession from "expo-auth-session";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

interface AuthContextData {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
    error?: string;
  };
  type?: string;
};

const CLIENT_ID = "918a3103201fdec7baba";
const SCOPE = "read:user";
const USER_STORAGE = "@mobile:user";
const TOKEN_STORAGE = "@mobile:token";

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {
      setIsSigningIn(true);

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

      const authSessionResponse = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;
      if (
        authSessionResponse.type === "success" &&
        authSessionResponse.params.error !== "access_denied"
      ) {
        const authResponse = await api.post("/authenticate", {
          code: authSessionResponse.params.code,
        });
        const { user, token } = authResponse.data as AuthResponse;

        api.defaults.headers.common["Authorization"] = `Bearear ${token}`;
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
        await AsyncStorage.setItem(TOKEN_STORAGE, token);

        setUser(user);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
  }

  useEffect(() => {
    async function loadStorageData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE);
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

      if (userStorage && tokenStorage) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearear ${tokenStorage}`;
        setUser(JSON.parse(userStorage));
      }
    }
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isSigningIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
