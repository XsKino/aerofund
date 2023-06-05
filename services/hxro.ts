import * as web3 from '@solana/web3.js';
import * as sdk from '@hxronetwork/parimutuelsdk';
import { PublicKey } from '@solana/web3.js';

export const makeBet = async (
  // Gather the necessary data for creating a store
  userWallet: sdk.WalletSigner | web3.Keypair, // User's wallet
  marketPubkey: PublicKey, // Market public key
  size: string, // Protocol fee in basis points
  side: sdk.PositionSideEnum // Settlement fee in basis points
) => {
  const config = sdk.DEV_CONFIG;
  const rpc = web3.clusterApiUrl('devnet');
  const connection = new web3.Connection(rpc, 'confirmed');

  const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection);
  let transactionId = '';
  try {

    transactionId = await parimutuelWeb3.placePosition(
      userWallet,
      marketPubkey,
      parseFloat(size) * (10 ** 9 / 1),
      side,
      Date.now()
    );
    if (transactionId) {
      console.log(`Transaction: ${transactionId}`);
      return true;
    }else{
        return false;
    }
  } catch (error:any) {
    console.error(`Transaction failed! ${error.message}`, transactionId);
    return false;
  }
};
export const createStore = async (
  userWallet: sdk.WalletSigner | web3.Keypair, // Obtén la cartera del usuario
  marketPubkey: PublicKey, // Especifica la clave pública del mercado
  // Especificar los detalles del parimutuel
  marketOpen: number, // Especifica el momento en que el parimutuel se abre
  timeWindowStart: number, // Especifica el momento en que comienza la ventana de tiempo
  marketClose: number
) => {
  // Place the bet
 try {
    const config = sdk.DEV_CONFIG;
    const rpc = web3.clusterApiUrl('devnet');
    const connection = new web3.Connection(rpc, 'confirmed');
  
    const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection);

    const status = await sdk.sendCreateParimutuelTransaction.call(
        parimutuelWeb3,
        userWallet,
        marketPubkey,
        marketOpen,
        timeWindowStart,
        marketClose
      );
      return status;
 } catch (error) {
    console.log(error);
    return false;
    
 }
};
