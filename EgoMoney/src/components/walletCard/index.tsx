import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AvaxIcon from '../../assets/svg/avax-logo.svg';
import BTCIcon from '../../assets/svg/bitcoin-btc-logo.svg';
import SolanaIcon from '../../assets/svg/solana.svg';
import EthereumIcon from '../../assets/svg/ethereum.svg';
import { Colors } from '../styles';
import { iOSUIKit } from 'react-native-typography';
interface IWalletCardProps {
	chain: string;
	chainTitle: string;
	tokenTicker: string;
	chainAddress: string;
	balanceUSD: string;
	balanceNativeToken: string;
	handleButtonPress?: () => void;
      }

export const WalletCard: React.FC<IWalletCardProps> = ({chain, chainTitle, chainAddress, tokenTicker, balanceUSD, balanceNativeToken, handleButtonPress}:IWalletCardProps) => {


const handleWalletPress = () => {
	if(handleButtonPress)
	{
		handleButtonPress()
	}
};
		return (
		      <View style={styles.walletCard}>
		      <Text style={styles.chainTitle}>{chainTitle}</Text>
		      <Text style={styles.address}>{chainAddress}</Text>
		      <Text style={styles.totalBalanceTitle}>TOTAL ASSET BALANCE:</Text>
		      <Text style={styles.balanceUSD}>${balanceUSD}</Text>
		      <Text style={styles.balanceToken}> {balanceNativeToken} {tokenTicker}</Text>
		      <View style={styles.iconContainer}>
		{chain === 'ego_d' &&
		   <Image style={styles.egoIcon} source={require('../../assets/images/EgoRedDollar.png')} />
		   }
		{chain === 'ego_s' &&
		   <Image style={styles.egoIcon} source={require('../../assets/images/EgoGoldDollar.png')} />
		   }
		{chain === 'avax' && 
		      <AvaxIcon width={60} height={60} fill={Colors.primaryColors.white} />
		}
		{chain === 'btc' && 
		      <BTCIcon width={60} height={60} fill={Colors.primaryColors.white} />
		}
		{chain === 'sol' && 
		      <SolanaIcon width={60} height={60} fill={Colors.primaryColors.white} />
		}
		{chain === 'eth' && 
		      <EthereumIcon width={60} height={60} fill={Colors.primaryColors.white} />
		}
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
	egoIcon:{
	width: 75,
	height: 75,
	resizeMode: 'contain',
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
