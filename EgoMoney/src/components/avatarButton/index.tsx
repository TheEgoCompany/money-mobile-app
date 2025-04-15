import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

interface IAvatarButtonProps {
  title?: string;
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
}

const UserAvatarButton: React.FC<IAvatarButtonProps> = ({ title }: IAvatarButtonProps)=> {

  return (
    <View style={styles.container}>
       <Image style={styles.image} source={{uri:'https://media.mutualart.com/Images/2021_09/17/16/162503295/2913540c-4319-4449-ae2f-cee07b6af16a.Jpeg'}}/>
    <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default UserAvatarButton;
