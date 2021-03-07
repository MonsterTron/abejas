let TEST = 56; // 97 - testnet, 56 - mainnet
let VERSION = '2.5';

// TODO: contracts settings
let NETWORK_ADDRESSES = {
	'testnet': '0x3f3BD4a34e00Ac2EfFCb81600893a942501E6F8b',
	'mainnet': '0x184401930AC416DF0Af999AeE4148E84b94932df',
};
let NETWORK_CREATE_CONTRACT_BLOCK = {
	'testnet': 6568380,
	'mainnet': 5183002,
};
let ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"bee","type":"uint256"}],"name":"BeeUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"bee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"}],"name":"BeesBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"users","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BonusPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"medal","type":"uint256"}],"name":"MedalAwarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"quality","type":"uint256"}],"name":"QualityUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferrerPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"honeyReward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"waxReward","type":"uint256"}],"name":"RewardCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"UserAddedToBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawed","type":"event"},{"inputs":[],"name":"ADMIN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BEES_COUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BEES_LEVELS_PRICES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BEES_MONTHLY_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"BEES_PRICES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BONUS_PERCENTS_PER_WEEK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BONUS_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"COINS_PER_BNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FIRST_BEE_AIRDROP_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HONEY_DISCOUNT_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BEES_PER_TARIFF","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MEDALS_COUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MEDALS_POINTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"MEDALS_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"QUALITIES_COUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"QUALITY_HONEY_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"QUALITY_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENT_PER_LEVEL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_POINT_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUPERBEE_PERCENT_UNLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUPER_BEE_BUYER_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUPER_BEE_INDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRON_BEE_INDEX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonus","outputs":[{"internalType":"uint256","name":"threadPaid","type":"uint256"},{"internalType":"uint256","name":"lastPaidTime","type":"uint256"},{"internalType":"uint256","name":"numberOfUsers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bee","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"buyBees","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collect","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"collectMedals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"instantBalance","outputs":[{"internalType":"uint256","name":"balanceHoney","type":"uint256"},{"internalType":"uint256","name":"balanceWax","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payRepresentativeBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"playerBees","outputs":[{"internalType":"uint256[8]","name":"","type":"uint256[8]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"uint256","name":"registeredDate","type":"uint256"},{"internalType":"bool","name":"airdropCollected","type":"bool"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"balanceHoney","type":"uint256"},{"internalType":"uint256","name":"balanceWax","type":"uint256"},{"internalType":"uint256","name":"points","type":"uint256"},{"internalType":"uint256","name":"medals","type":"uint256"},{"internalType":"uint256","name":"qualityLevel","type":"uint256"},{"internalType":"uint256","name":"lastTimeCollected","type":"uint256"},{"internalType":"uint256","name":"unlockedBee","type":"uint256"},{"internalType":"uint256","name":"totalDeposited","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawed","type":"uint256"},{"internalType":"uint256","name":"referralsTotalDeposited","type":"uint256"},{"internalType":"uint256","name":"subreferralsCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"referrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"retrieveBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superBeeUnlocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBeesBought","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bee","type":"uint256"}],"name":"unlock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"updateQualityLevel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"userBonusEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"userBonusPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"userRegisteredForBonus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

let NETID = { 'mainnet': 56, 'testnet': 97 };
let NETID_BYINT = {
	'56': 'mainnet',
	'97': 'testnet',
};

let CONTRACT_ADDRESS = NETWORK_ADDRESSES[NETID_BYINT[TEST]];
let NETWORK = NETID_BYINT[TEST];
let CREATE_CONTRACT_BLOCK = NETWORK_CREATE_CONTRACT_BLOCK[NETID_BYINT[TEST]];

let NETWORK_URL = NETWORK + ".";
if(NETWORK == "mainnet"){
	NETWORK_URL = "";
}

let INFURA_URL = `https://bsc-dataseed.binance.org/`; //`https://data-seed-prebsc-1-s1.binance.org:8545/`;
//let web3infura = new Web3(new Web3.providers.HttpProvider(INFURA_URL));
let provider = new ethers.providers.JsonRpcProvider(INFURA_URL);

let COOKIE_NAME = 'storage';

let GOOGLE_API_KEY = "AIzaSyBUElPObpXXoIQEXuZm9r1qBkMs0YaEjjo";//"AIzaSyBr6_I6kzr8a52ixpxHCO0WrYmtlxHD154", "AIzaSyAdhoVexRaBv5xn1JfeDjM-UyYEpIqqU5U";
let GOOGLE_SPREASHEET_ID = "1gKRTDQYE7Jjid2DSnlNwTqmKxEB6dsIpp-W1vcQMoW4";
let GOOGLE_SHEET_TAB_NAME = "Responds";
let GOOGLE_SPREASHEET_ID_LANG = "1-0q-QhIZIQF9B3PatAty9iIY_NaRlaWl0J6ugc6_olQ";
let GOOGLE_SHEET_TAB_NAME_LANG = "Phrases";

let UTILITY_URL = 'https://bnbhives.biz/utils';

//let CONTRACT = new web3infura.eth.Contract(ABI, CONTRACT_ADDRESS);
let CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

/* ----- init variables ----- */
let total_invest = 0;
let total_withdraw = 0;

let unlockBeePrice = [];
let waxEqual1eth = 250000;
let honeyEqual1eth = 250000;
let isGetBeeMonthlyPercentsAndPrices = false;
let bee_monthly_percents = [];
let bee_levels_prices = [];
let isGetMedalsPoints = false;
let medals_points = [];
let medals_rewards = [];
let isGetQualityHoneyPercentsAndPrices = false;
let quality_honey_percents = [];
let quality_prices = [];
let isGetFirstBeeAirdropAmount = false;
let first_bee_airdrop_amount;
let ref = "0x0DC36111DFBF8f49EFB845eE2242698F47bCE393";
let reflink;

let storage = {};
let isStorageLoad = false;
try {
	storage = JSON.parse(localStorage.getItem(COOKIE_NAME));
} catch(err){
	console.log("ERROR", "No access to localStorage");
}
if(storage == null){
	storage = {};
}
if(storage['contract'] != CONTRACT_ADDRESS || storage['version'] != VERSION){
	storage = {};
	storage['contract'] = CONTRACT_ADDRESS;
	storage['version'] = VERSION;
	localStorage.setItem(COOKIE_NAME, JSON.stringify(storage));
}
isStorageLoad = true;

function getStorage(){
	return storage;
}

$.get('https://sheets.googleapis.com/v4/spreadsheets/' + GOOGLE_SPREASHEET_ID +
          '/values/' + GOOGLE_SHEET_TAB_NAME + '!A1:L200' + 
          '?key=' + GOOGLE_API_KEY, 
    function(data, result){
        if(result != "success"){
            console.log("ERROR", "get_google", err);
        } else {
        	ref = data.values[1][4];
        }
    });

getCoinsPerEth(CONTRACT).then(data => {
	waxEqual1eth = data.waxEqual1eth;
	honeyEqual1eth = data.honeyEqual1eth;
	$('#ethToWax').html(format_number(waxEqual1eth));
	$('#waxToEth').html(format_number(honeyEqual1eth));
}, error => { console.log("ERROR", "getCoinsPerEth", error); });

getMedalsPoints(CONTRACT).then(data => {
	medals_points = data.medals_points;
	medals_rewards = data.medals_rewards;
	isGetMedalsPoints = true;
}, error => { console.log("ERROR", "getMedalsPoints", error); });

getBeeMonthlyPercents(CONTRACT).then(data => {
	bee_monthly_percents = data.bee_monthly_percents.map(p => Number.parseInt(p));
	bee_levels_prices = data.bee_levels_prices;
	unlockBeePrice = data.unlockBeePrice;
	isGetBeeMonthlyPercentsAndPrices = true;

	for(let i = 0; i < bee_monthly_percents.length; i++){
		$('#bees_percent_level_'+(i+1)).html(bee_monthly_percents[i]);
	}
}, error => { console.log("ERROR", "getBeeMonthlyPercents", error); });

getQualityHoneyPercents(CONTRACT).then(data => {
	quality_honey_percents = data.quality_honey_percents;
	quality_prices = data.quality_prices;
	isGetQualityHoneyPercentsAndPrices = true;
}, error => { console.log("ERROR", "getQualityHoneyPercents", error) }); 

getFirstBeeAirdropAmount(CONTRACT).then(data => {
	first_bee_airdrop_amount = data.first_bee_airdrop_amount;
	isGetFirstBeeAirdropAmount = true;

	$('[name="first_bee_airdrop_amount"]').html(first_bee_airdrop_amount);
}, error => { console.log("ERROR", "getFirstBeeAirdropAmount", error); });

/* ----- global statistic ----- */
$('[name="link_contract_address"]').attr('href', 'https://'+NETWORK_URL+'bscscan.com/address/'+CONTRACT_ADDRESS+'#code');

getGlobalStatistic();

function getGlobalStatistic(){
	let total_invest_cursor = false;
	CONTRACT.totalDeposited().then(data => {
		total_invest = data / Math.pow(10,18);
		if(total_invest_cursor){
			$('.total_invest').html(format_number(total_invest+total_withdraw, 2));
		} else {
			total_invest_cursor = true;
		}
	}).catch(error => {
		console.log("ERROR", "web3infura.totalDeposited", error);
	});

	CONTRACT.totalPlayers().then(data => {
		$('.total_players').html(format_number(data));
	}).catch(error => {
		console.log("ERROR", "web3infura.totalPlayers", error);
	});

	CONTRACT.totalBeesBought().then(data => {
		$('.total_bee_bought').html(format_number(data));
	}).catch(error => {
		console.log("ERROR", "web3infura.totalBeesBought", error);
	});

	CONTRACT.totalWithdrawed().then(data => {
		total_withdraw = data / Math.pow(10,18);
		$('.total_withdraw').html(format_number(total_withdraw, 2));
		if(total_invest_cursor){
			$('.total_invest').html(format_number(total_invest+total_withdraw, 2));
		} else {
			total_invest_cursor = true;
		}
	}).catch(error => {
		console.log("ERROR", "web3infura.totalWithdrawed", error);
	});

	setTimeout(function getHiveLeader() {
    $.get(UTILITY_URL + '/rating?account=' + ref, (data, result) => {
        if(result != "success") {
          console.log("ERROR", "/rating", ref, err);
        } else {
          $('.hive_leader').html(format_number(data.hive_leader));
        }
    });

    setTimeout(getHiveLeader, 3000);
  }, 0);
}
