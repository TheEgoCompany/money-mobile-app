import React from 'react';
import { View, Text } from 'react-native';
import {Colors} from '../styles/';
import styles from './styles';
import BuyIcon from '../../assets/svg/wallet-buy.svg';
import SellIcon from '../../assets/svg/wallet-sell.svg';
import TradeIcon from '../../assets/svg/exchange.svg';
import InvestIcon from '../../assets/svg/wallet-invest.svg';

interface IRibbonButtonProps {
  title: string;
  type: string;
  iconNameEnabled: string;
  iconNameDisabled: string;
  disabled: boolean;
  onButtonPress?: () => void;
}

const RibbonButton: React.FC<IRibbonButtonProps> = ({ title, disabled, type }: IRibbonButtonProps)=> {
const color = Colors.primaryColors.black;
const colorDisabled = Colors.primaryColors.silver;
  return (
    <View style={styles.container}>
<View style={styles.buttonHolder}>
<View style={styles.buttonCircle}>
{type === 'buy' &&
	<BuyIcon width={40} height={40} fill={Colors.primaryColors.charcoal} />
}
{type === 'sell' &&
	<SellIcon width={40} height={40} fill={Colors.primaryColors.charcoal} />
}
{type === 'swap' &&
	<TradeIcon width={40} height={40} fill={Colors.primaryColors.charcoal} />
}
{type === 'invest' &&
	<InvestIcon width={40} height={40} fill={Colors.primaryColors.charcoal} />
}
</View>
    <Text style={styles.title}>{title}</Text>
    </View>
    </View>
  );
};

export default RibbonButton;
