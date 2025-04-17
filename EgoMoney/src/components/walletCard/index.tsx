import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SolanaIcon from '../../assets/svg/solana.svg';
import { Colors } from '../styles';
import { iOSUIKit } from 'react-native-typography';

export const WalletCard: React.FC = () => {
const title = 'wallet';
const Icon = SolanaIcon;
const handleWalletPress = () => {
}
  return (
	<View style={styles.walletCard}>
	<Text style={styles.chainTitle}>Solana</Text>
	<Text style={styles.address}>2SKGX...2NsaTa</Text>
	<Text style={styles.totalBalanceTitle}>TOTAL ASSET BALANCE:</Text>
	<Text style={styles.balanceUSD}>$10,456.21</Text>
	<Text style={styles.balanceToken}>78.11 SOL</Text>
	<View style={styles.iconContainer}>
	<Icon width={60} height={60} fill={Colors.primaryColors.white} />
	</View>
	</View>
  );
};

const styles = StyleSheet.create({
	walletCard: {
	backgroundColor: Colors.primaryColors.black,
	width: '95%',
	height: '90%',
	alignSelf: 'flex-start',
	borderRadius: 12,
	},
	iconContainer:{
	position: 'absolute',
	top: 15,
	right: 15,
	},
	chainTitle:{
	   ...iOSUIKit.title3EmphasizedObject,
	    fontSize: 28,
	    lineHeight: 28,
	    marginTop: 24,
	    marginBottom: 6,
	    marginLeft: 18,
	    color: Colors.primaryColors.silver,
	    textAlign: 'left',
	},
	address:{
		...iOSUIKit.caption2EmphasizedObject,
		fontSize: 18,
		lineHeight: 18,
		marginTop: 0,
		marginBottom: 12,
		marginLeft: 18,
		color: Colors.primaryColors.silver,
		textAlign: 'left',
	},
	totalBalanceTitle:{
		...iOSUIKit.largeTitleEmphasizedObject,
		fontSize: 14,
		lineHeight: 18,
		marginTop: 9,
		marginLeft: 18,
		color: Colors.primaryColors.gray,
		textAlign: 'left',
	},
	balanceUSD:{
		...iOSUIKit.largeTitleEmphasizedObject,
		fontSize: 42,
		lineHeight: 42,
		marginTop: 8,
		marginLeft: 18,
		color: Colors.primaryColors.silver,
		textAlign: 'left',
	},
	balanceToken:{
		...iOSUIKit.largeTitleEmphasizedObject,
		fontSize: 18,
		lineHeight: 18,
		marginTop: 9,
		marginLeft: 18,
		color: Colors.primaryColors.egoGold,
		textAlign: 'left',
	},
      });
