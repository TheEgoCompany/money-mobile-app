import { window } from './sizes';
import { renderItem } from './render-item';
import * as React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { Text, View } from 'react-native';
import { WalletCard } from '../walletCard';
 
export const TestItems =
[
	{
	chain: 'ego_d',
	chainTitle: 'EGO Checking Acc.',
	tokenTicker: '$EGOd',
	chainAddress: '00XFA...007jb',
	balanceUSD: '12,256.52',
	balanceNativeToken: '12,256.52',
	},
	{
	chain: 'ego_s',
	chainTitle: 'EGO Saving Acc',
	tokenTicker: 'EGO',
	chainAddress: '5pFwq...4NaNf',
	balanceUSD: '1,969,456.21',
	balanceNativeToken: '10,000',
	},
	{
	chain: 'avax',
	chainTitle: 'Avalanche',
	tokenTicker: 'AVAX',
	chainAddress: '3eFaa...RX1fa',
	balanceUSD: '24,012.05',
	balanceNativeToken: '1,334',
	},
    {
        chain: 'sol',
	chainTitle: 'Solana',
	tokenTicker: 'SOL',
	chainAddress: '2SKGX...2NsaTa',
	balanceUSD: '10,456.21',
	balanceNativeToken: '78.11',
    },
    {
	chain: 'eth',
	chainTitle: 'Ethereum',
	tokenTicker: 'ETH',
	chainAddress: '1fDES...2a3vb',
	balanceUSD: '51,000.05',
	balanceNativeToken: '42.82',
    },
    {
	chain: 'btc',
	chainTitle: 'Bitcoin',
	tokenTicker: 'BTC',
	chainAddress: '00f1...3Af5ta',
	balanceUSD: '356,959.05',
	balanceNativeToken: '5.59',
},
];

export const WalletCarousel: React.FC = () => {

	const progress = useSharedValue<number>(0);
 
	return (
			<Carousel
				autoPlayInterval={2000}
				data={TestItems}
				height={258}
				loop={true}
				pagingEnabled={true}
				snapEnabled={true}
				width={window.width}
				style={{
					width: window.width,
				}}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 50,
				}}
				onProgressChange={progress}
				renderItem={({ index }) => (
					<WalletCard 
						chain={TestItems[index].chain}
						tokenTicker={TestItems[index].tokenTicker}
						chainTitle={TestItems[index].chainTitle}
						chainAddress={TestItems[index].chainAddress}
						balanceUSD={TestItems[index].balanceUSD}
						balanceNativeToken={TestItems[index].balanceNativeToken}
					/>    )}
			/>
	);
};
