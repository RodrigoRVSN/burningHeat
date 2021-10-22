import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";
import { RectButton } from "react-native-gesture-handler";
import { UserPhoto } from "../UserPhoto";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        {user && (
          <RectButton onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </RectButton>
        )}
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
