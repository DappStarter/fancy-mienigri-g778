require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strategy regret noble snake guess nation equal genius'; 
let testAccounts = [
"0xb3d69e7eccda18d277047366b9a52c9130e34514556189f8373b858c5b1bd374",
"0x3b8f47ea034fe14e23dad0384ba78c2ae6c4e66cb4223720d1923b547c74dee2",
"0x8041c66daf723ba991b2e803d574da1a5e99441e57790c121dc7dcc8b9b6b15c",
"0x3c85f7fef75860ca649d284a5e31c73a28312d34207d6649f8a7730d6dd74808",
"0x8ce820ccba5dacd98cc784afcea1b20fce6d534cff4f95ffb7b7d285e80573b6",
"0xa4222986e382352fdfaba4cc97669936d9bea952a363af566cab5fa8bb2f8012",
"0x4cc5e9c032e1caedca94f90665c8a85471c6794306050e7ed4edddf885dc9bae",
"0xce7315ef8e6a6a09566e6f1de686f1746d7c0c5407b7f02115967766a7b904c4",
"0xe30d34ef072edc4eb62f3d52f0af22fea65be5be206696feb87d00f746c6b3c9",
"0x8552fe1604bef83ccc337b846ce5f30f27e4678b6c0b1ac029baef643b879d86"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

