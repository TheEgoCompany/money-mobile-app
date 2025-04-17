import React from 'react';
import { StyleSheet, View, ListRenderItem, Falsy, RecursiveArray, RegisteredStyle, StyleProp, TextStyle, ViewStyle  } from 'react-native';
import HeaderBar from '../../components/headerBar';
import { Colors } from '../../styles/colors';
import { WalletCarousel } from '../../components/walletCarousel';
import TradeButtonRibbon from '../../components/tradeButtonRibbon';
import { Tabs, MaterialTabBar, MaterialTabItemProps, TabBarProps } from 'react-native-collapsible-tab-view';
import { AnimateStyle } from 'react-native-reanimated/lib/typescript/Animated';
import { iOSUIKit } from 'react-native-typography';


const HEADER_HEIGHT = 120
const MIN_HEADER_HEIGHT = -30

const DATA = [0, 1, 2, 3, 4]
const identity = (v: unknown): string => v + ''

const tabBar = (props: React.JSX.IntrinsicAttributes & TabBarProps<string> & { scrollEnabled?: boolean; indicatorStyle?: Falsy | AnimateStyle<ViewStyle> | RegisteredStyle<AnimateStyle<ViewStyle>> | RecursiveArray<Falsy | AnimateStyle<ViewStyle> | RegisteredStyle<AnimateStyle<ViewStyle>>>; TabItemComponent?: ((props: MaterialTabItemProps<string>) => React.ReactElement) | undefined; getLabelText?: ((name: string) => string) | undefined; style?: StyleProp<ViewStyle>; contentContainerStyle?: StyleProp<ViewStyle>; tabStyle?: StyleProp<ViewStyle>; labelStyle?: Falsy | AnimateStyle<TextStyle> | RegisteredStyle<AnimateStyle<TextStyle>> | RecursiveArray<Falsy | AnimateStyle<TextStyle> | RegisteredStyle<AnimateStyle<TextStyle>>>; activeColor?: string; inactiveColor?: string; keepActiveTabCentered?: boolean; }) => (
	<MaterialTabBar
	  {...props}
	  indicatorStyle={{
	backgroundColor: Colors.egoGold
	  }}
	  activeColor={Colors.egoGold}
	  labelStyle = {
		{
		...iOSUIKit.subheadEmphasizedObject,
		fontSize: 18,
		}
	    }
	/>
      );
const Header = () => {
  return (
  <View style={styles.header}>

	<TradeButtonRibbon
	title={'Buy'}
	type={''}
	iconNameEnabled={''}
	iconNameDisabled={''}
	disabled={false}/>
</View>
)}
export const EgoWalletHomeScreen: React.FC = () => {

	const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
		return (
		  <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
		)
	      }, [])

const title = 'wallet';

  return (
    <View style={styles.container}
    >
<HeaderBar
    highlightTitle = {'EGO'}
      title = {title}
      showBackButton = {false}
      />
    <Tabs.Container
    renderTabBar={tabBar}
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
      minHeaderHeight={MIN_HEADER_HEIGHT}
    >
      <Tabs.Tab name="Transactions" label="Transactions">
        <Tabs.FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={identity}
        />
      </Tabs.Tab>
      <Tabs.Tab name="Assets" label="Assets">
        <Tabs.ScrollView>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Collections" label="Collections">
        <Tabs.ScrollView>
          <View style={[styles.box, styles.boxA]} />
          <View style={[styles.box, styles.boxB]} />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
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
	marginTop: 50,
	marginBottom: 30,
	paddingLeft: 0,
	paddingTop: 5,
	height: 260,
	width: '100%',
	},
	box: {
		height: 250,
		width: '100%',
	      },
	      boxA: {
		backgroundColor: 'white',
	      },
	      boxB: {
		backgroundColor: '#D8D8D8',
	      },
	      header: {
		height: HEADER_HEIGHT,
		width: '100%',
	      },
      });
