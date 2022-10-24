const addressObject = {
    USDC:"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    ETH:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    USDT:"0xdac17f958d2ee523a2206206994597c13d831ec7",
    DAI:"0x6b175474e89094c44da98b954eedeac495271d0f",
    stETH:"0x06325440d014e39736583c165c2963ba99faf14e",
    CRV:"0x6c3f90f043a72fa612cbac8115ee7e52bde6e490",
    FRAX:"0x853d955acef822db058eb8505911ed77f175b99e",
    WBTC:"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    CARBO:"0xed7e17b99804d273eda67fc7d423cc9080ea8431",
    FPI:"0x5ca135cb8527d76e932f34b5145575f9d8cbe08e",
    ENRH:"0x35bd8472ed2da9eed980e49b8b92ccbcf625adbd",
    sUSD:"0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    LUSD:"0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
    alUSD:"0xbc6da0fe9ad5f3b0d58160288917aa56653660e9",
    renBTC:"0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
    XRPC:"0xd4ca5c2aff1eefb0bea9e9eab16f88db2990c183",
    WISE:"0x66a0f676479cee1d7373f3dc2e2952778bff5bd6",
    USDM:"0xbbaec992fc2d637151daf40451f160bf85f3c8c1",
    FXS:"0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    TUSD:"0x0000000000085d4780b73119b644ae5ecd22b376",
    sBTC:"0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
    EURS:"0xdb25f211ab05b1c97d595516f45794528a807ad8",
    USDP:"0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    ILV:"0x767fe9edc9e0df98e07454847909b5e959d7ca0e",
    LRC:"0xbbcd3e4eb43aa7f3f57286da31333d53b24d0d6a",
    HANU:"0x72e5390edb7727e3d4e3436451dadaff675dbcc0",
    USDD:"0x0c10bf8fcb7bf5412187a595ab97a3609160b5c6",
    BNT:"0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    STG:"0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6",
    CVX:"0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
    sETH:"0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
    MIN:"0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3",
    DOLA:"0x865377367054516e17014ccded1e7d814edc9ce4",
    USX:"0x0a5e677a6a24b2f1a2bf4f3bffc443231d2fdec8",
    UNI:"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    alETH:"0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6",
    MIA:"0x8d52061af43c52204c717d0610ea8f52f955ce0b",
    GOJ:"0xec4a1c7a4e9fdc7cc621b548a931c92bc08a679a",
    agEUR:"0x1a7e4e63778b4f12a199c062f3efdd288afcbce8",
    sETH2:"0xfe2e637202056d30016725477c5da089ab0a043a",
    AVINOC:"0xf1ca9cb74685755965c7458528a36934df52a3ef",
    BUSD:"0x4fabb145d64652a948d72533023f6e7a623c7c53",
    FNK:"0xb5fe099475d3030dde498c3bb6f3854f762a48ad",
    SYN:"0x0f2d719407fdbeff09d87557abb7232601fd9f29",
    LINK:"0x514910771af9ca656af840dff83e8264ecf986ca",
    BBTC:"0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
    OUSD:"0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
    EURT:"0xc581b735a1688071a1746c968e0798d642ede491",
    XCN:"0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18",
    FEI:"0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    ["1INCH"]:"0x111111111117dc0aa78b770fa6a738034120c302",
    KIND:"0xd4a9f6676c4a0cd4bacf28187c47904648496c03",
    YFI:"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
    SHIB:"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    hCRV:"0xb19059ebb43466c323583928285a49f558e572fd",
    USTC:"0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    GUSD:"0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    PAXG:"0x45804880de22913dafe09f4980848ece6ecbaf78",
    mUSD:"0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
    ACR:"0x76306f029f8f99effe509534037ba7030999e3cf",
    BTT:"0xc669928185dbce49d2230cc9b0979be6dc797957",
    PUSd:"0x466a756e9a7401b5e2444a3fcb3c2c12fbea0a54",
    sEUR:"0xd71ecff9342a5ced620049e616c5035f1db98620",
    MLP:"0xe22020f47b7378dfedcedd2c81d4137c22fe1152",
    MC:"0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
    BIT:"0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5",
    TRIBE:"0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
    HEX:"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
    HBTC:"0x0316eb71485b0ab14103307bf65a021042c6d380",
    rETH2:"0x20bc832ca081b91433ff6c17f85701b6e92486c5",
    XAUt:"0x68749665ff8d2d112fa859aa293f07a622782f38",
    wPE:"0xd075e95423c5c4ba1e122cae0f4cdfa19b82881b",
    TSUKA:"0xc5fb36dd2fb59d3b98deff88425a3f425ee469ed",
    BONE:"0x9813037ee2218799597d83d4a5b6f3b6778218d9",
    LDO:"0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    tFXS:"0xadf15ec41689fc5b6dca0db7c53c9bfe7981e655",
}
  