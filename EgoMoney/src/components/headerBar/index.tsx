import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import styles from './styles';
import UserAvatarButton from '../avatarButton';

interface IHeaderProps {
  highlightTitle?: string;
  title: string;
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
}

const HeaderBar: React.FC<IHeaderProps> = ({ title, highlightTitle }: IHeaderProps)=> {

  const date = moment().format('dddd MMMM Do YYYY');

  return (
    
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
      <Text style={styles.heroTitle}>EGO</Text> 
      <Text style={styles.heroSubtitle}>{title}</Text> 
        </View>
        <View style={styles.avatarContainer}>
          <UserAvatarButton title='@catoshi'/> 
        </View>
      </View>
      
    </View>
  );
};

export default HeaderBar;
