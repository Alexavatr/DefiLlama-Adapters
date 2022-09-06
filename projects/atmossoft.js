const { sumUnknownTokens } = require('./helper/unknownTokens')


async function bsc(timestamp, ethBlock, chainBlocks) {
  const pools = [{
    'pool2Address': '0xaF18cde26fdd22561df2a02958CbA092f41875d8',
    'pairToken': 'bsc:0x55d398326f99059ff775485246999027b3197955',
    'stakingContract': '0x282FFbE782F903340A14955649032302e8020b9C'
  }, {
    'pool2Address': '0xdf825e486d9d15848a36c113b7725d7923e886a4',
    'pairToken': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    'stakingContract': '0xa65d60e8a71dBDbb14B6eE7073522546FE73CFE4'
  }];

  const tokensAndOwners = pools.map(i => ([i.pool2Address, i.stakingContract]))
  const coreAssets = pools.map(i => i.pairToken)

  return sumUnknownTokens({ tokensAndOwners, coreAssets, chain: 'bsc', block: chainBlocks.bsc })
};
async function ftm(timestamp, ethBlock, chainBlocks) {
  const pools = [{
    'pool2Address': '0x662db0c6fa77041fe4901149558cc70ca1c8e874',
    'pairToken': '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
    'stakingContract': 'f043f876d3d220acce029ca76c9572f0449e5e71'
  }];
  const tokensAndOwners = pools.map(i => ([i.pool2Address, i.stakingContract]))
  const coreAssets = pools.map(i => i.pairToken)

  return sumUnknownTokens({ tokensAndOwners, coreAssets, chain: 'fantom', block: chainBlocks.fantom })
};

module.exports = {
  misrepresentedTokens: true,
  fantom: {
    tvl: async () => ({}),
    pool2: ftm,
  },
  bsc: {
    pool2: bsc
  },
};