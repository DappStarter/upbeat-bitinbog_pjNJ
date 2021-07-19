require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift raise place minor hover beach supply gauge'; 
let testAccounts = [
"0xc28b6564dd1d72dbc04b197a5286f8db5c7cc6a64a789d6b84691f4d10883933",
"0xfe1f866557e9b9eefee4cbe7aafd6a84babb042d2bf3c8c6e66407c2a3562576",
"0xd9cc2602a6b605d5d7975625cccbf20f3f5c0bb28cc86867c4559f9449f90fc5",
"0x55f9e7257bd4e1e3bbe45657933554ee2cae68cab5cf1933f93bc335a0adf7e0",
"0xed29845034666108da36506a814771b08f5c5296a654368f8e3d251f364859e7",
"0xd246e2eee7ba894c5e498c54df2ca0805698639b690cdb22b9cec8865a54bfc2",
"0xb5d614d0e7a4fa8425ceecff55da5796c6b4ce3f88843538056a8224cfd5f2e4",
"0x1bb3c4d37a20e98cb71bd0189e0381bf61dfadb670f766f43c61e047fa08c05c",
"0xa023d7d0a86b0d06460d25f1e75fa3bdf3b8a09f3da9928c3961178d2e9a7734",
"0xe613f42450e189869bd6b94c2dfe464467a48fe375596658f61544b44a17f777"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

