import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../../components/headerBar';
import {WalletCard} from '../../components/walletCard';
import SolanaIcon from "../../assets/svg/solana.svg";
import { Colors } from '../../styles/colors';

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
	<WalletCard/>
	</View>
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
	paddingLeft: 20,
	paddingTop: 5,
	height: 260,
	width: '100%',
	},
      });
