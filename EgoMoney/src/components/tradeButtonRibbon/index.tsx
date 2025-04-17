import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import RibbonButton from '../ribbonButton';
interface ITradeButtonRibbonProps {
  title: string;
  type: string;
  iconNameEnabled: string;
  iconNameDisabled: string;
  disabled: boolean;
  onButtonPress?: () => void;
}

const TradeButtonRibbon: React.FC<ITradeButtonRibbonProps> = ({ title, disabled }: ITradeButtonRibbonProps)=> {
  return (
    <View style={styles.container}>
	<RibbonButton 
	title={'buy'} 
	type={'buy'}
	iconNameEnabled={''} 
	iconNameDisabled={''} 
	disabled={false}/>
	<RibbonButton 
	title={'swap'} 
	type={'swap'}
	iconNameEnabled={''} 
	iconNameDisabled={''} 
	disabled={false}/>
	<RibbonButton 
	title={'sell'} 
	type={'sell'}
	iconNameEnabled={''} 
	iconNameDisabled={''} 
	disabled={false}/>
	<RibbonButton 
	title={'invest'} 
	type={'invest'}
	iconNameEnabled={''} 
	iconNameDisabled={''} 
	disabled={false}/>
    </View>
  );
};

export default TradeButtonRibbon;