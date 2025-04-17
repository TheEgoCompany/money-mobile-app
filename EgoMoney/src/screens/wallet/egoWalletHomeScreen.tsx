import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../components/headerBar';
import {WalletCard} from '../../components/walletCard';
import SolanaIcon from "../../assets/svg/solana.svg";
import { Colors } from '../../styles/colors';
import { WalletCarousel } from '../../components/walletCarousel';
import RibbonButton from '../../components/ribbonButton';
import TradeButtonRibbon from '../../components/tradeButtonRibbon';

export const EgoWalletHomeScreen: React.FC = () => {
const title = 'wallet';
const Icon = SolanaIcon;
const handleWalletPress = () => {
}
  return (
    <View style={styles.container}
    >
<HeaderBar
    highlightTitle = {'EGO'}
      title = {title}
      showBackButton = {false}
      />
      <View style={styles.walletContainer}>
	<WalletCarousel/>
	</View>
	<TradeButtonRibbon
	title={'Buy'}
	type={''}
	iconNameEnabled={''}
	iconNameDisabled={''}
	disabled={false}/>
      </View>
  );
};

const styles = StyleSheet.create({
	container: {
	flex: 1,
	alignContent: 'center',
	},
	text: {
		textAlign: 'center',
		width: '100%',
	},
	walletContainer:{
	alignSelf: 'center',
	justifyContent: 'center',
	marginTop: 10,
	paddingLeft: 0,
	paddingTop: 5,
	height: 260,
	width: '100%',
	},
      });
