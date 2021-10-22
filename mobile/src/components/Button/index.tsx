import React from "react";
import { ActivityIndicator, ColorValue, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../theme";

type Props = RectButtonProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  isLoading?: boolean;
};

export function Button({
  color,
  title,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <RectButton style={[styles.button, { backgroundColor }]} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.BLACK_PRIMARY} />
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </RectButton>
  );
}
