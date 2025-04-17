import { ImageStyle, StyleProp } from "react-native";
import { CarouselRenderItem } from "react-native-reanimated-carousel";
import { WalletCard } from "../walletCard";

interface Options {
  rounded?: boolean;
  style?: StyleProp<ImageStyle>;
  chain: string;
}

export const renderItem =
  ({ rounded = false, style, chain }: Options = {}): CarouselRenderItem<any> =>
  ({ index }: { index: number }) => (
    <WalletCard chain={chain} nativeTokenTicker={''}/>
  );
