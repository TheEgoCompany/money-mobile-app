import { FC } from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import { ThemeType } from '../../styles/theme';
import { Colors } from '../styles/';

const WalletCardContainer = styled(MotiView)<{
  theme: ThemeType;
  hideBackground: boolean;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, hideBackground }) =>
    hideBackground ? 'transparent' : theme.colors.lightDark};
  border-radius: ${(props) => props.theme.borderRadius.large};
  height: 75px;
  padding: ${(props) => props.theme.spacing.medium};
  padding-left: 20px;
  padding-right: 27.5px;
  width: 100%;
  opacity: 0.95;
`;

const Spacer = ({ width = 16 }) => <View style={{ width }} />;

const width = Dimensions.get('window').width * 0.6;
const WalletCardSkeleton: FC<{ hideBackground?: boolean }> = ({
  hideBackground,
}) => {
  return (
    <WalletCardContainer
      transition={{
        type: 'timing',
      }}
      hideBackground={hideBackground ? hideBackground : false}
    >
      <Skeleton
        colors={[
          Colors.primaryColors.silver,
	Colors.primaryColors.charcoal,
          Colors.primaryColors.charcoal,
          Colors.primaryColors.silver,
        ]}
        radius="round"
        height={35}
        width={35}
      />
      <Spacer />
      <Skeleton
        height={35}
        colors={[
		Colors.primaryColors.silver,
		Colors.primaryColors.charcoal,
		Colors.primaryColors.charcoal,
		Colors.primaryColors.silver,
        ]}
        width={width}
      />
      <Spacer />
      <Skeleton
        height={35}
        colors={[
		Colors.primaryColors.silver,
		Colors.primaryColors.charcoal,
		Colors.primaryColors.charcoal,
		Colors.primaryColors.silver,
        ]}
        width={35}
      />
    </WalletCardContainer>
  );
};

export default WalletCardSkeleton;
