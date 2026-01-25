
export class DashboardTable{
	Name?: string;
	Icon?: string;
	Price?: string;
	h24?: string;
	MarketCap?: string;
	CMGRMonth?: string;
	Exchange?: string;
}

export const DashboardTableData: DashboardTable[] = [
	{ Name: 'Ethereum', Icon:'cf cf-eth tx-22', Price:'$966.61', h24:'-6%', MarketCap:'$95,270,125,036', CMGRMonth:'22.62% / 29', Exchange:'Transfer Now'},
	{ Name: 'Bitcoin', Icon:'cf cf-btc tx-22 text-orange', Price:'$10513.00', h24:'-7%', MarketCap:'$179,470,305,923', CMGRMonth:'8.11% / 57', Exchange:'Transfer Now'},
	{ Name: 'NEM', Icon:'cf cf-xem fs-20 text-teal', Price:'$1547.00', h24:'-11%', MarketCap:'$26,720,210,956', CMGRMonth:'21.30% / 6', Exchange:'Transfer Now'},
	{ Name: 'Ripple', Icon:'cf cf-xrp tx-22 text-primary', Price:'$1.2029', h24:'-11%', MarketCap:'$47,649,145,657', CMGRMonth:'10.85% / 53', Exchange:'Transfer Now'},
	{ Name: 'Litecoin', Icon:'cf cf-ltc fs-20 text-muted', Price:'$173.86', h24:'-7%', MarketCap:'$9,670,920,267', CMGRMonth:'6.87% / 57', Exchange:'Transfer Now'},
	{ Name: 'Dash', Icon:'cf cf-dash tx-22 text-purple', Price:'$0.935049', h24:'-11%', MarketCap:'$8,415,440,999', CMGRMonth:'26.99% / 33', Exchange:'Transfer Now'}
]