import {
    Connection,
    SystemProgram,
    Transaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    SendTransactionError,
} from "@solana/web3.js"

const SOLANA_NETWORK = "devnet";

export const getPublicKey = async () => {

    //Si no tiene phantom
    const provider = window?.phantom?.solana;
    const {solana} = window;


    if (!provider?.isPhantom || !solana.isPhantom){
        return {
            succes: false,
            message: "Phantom not installed"
        };
    }

    //cuando si
    let phantom;
    if (provider?.isPhantom) phantom = provider;

    const { publicKey } = await phantom.connect();
    localStorage.removeItem("publicKey")
    localStorage.setItem("publicKey", publicKey.toString());

    return publicKey.toString()

    };


export const getBalance = async (publicKey) => {
    try {
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      );

      const balance = await connection.getBalance(
        new PublicKey(publicKey)
      );

      return (balance / LAMPORTS_PER_SOL);
    } catch (error) {
      return {
        success: false,
        message: "something went wrong"
      }
    }
  }

  export const signOut = async (router) => {
    if (window){
        const { solana } = window;
        window.localStorage.removeItem("publicKey");
        solana.disconnect();
        router.reload(window?.location?.pathname); 

    }

}

export const sendTransaction = async (balance, amount, publicKey, receiver = "Gifb2ZMPNw9c6CAoM1U1ZLTvogAVbbS9qzSrfFJsd7hY") => {
    try {  
      if (balance < amount) {
        return {
            success: false,
            message: "Insufficient funds"
        };
      }
  
      const provider = window?.phantom?.solana;
      const connection = new Connection(
        clusterApiUrl(SOLANA_NETWORK),
        "confirmed"
      );
  
      const fromPubkey = new PublicKey(publicKey);
      const toPubkey = new PublicKey(receiver);
  
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );
  
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = fromPubkey;

      const transactionsignature = await provider.signTransaction(transaction);

      const txid = await connection.sendRawTransaction(
        transactionsignature.serialize()
      );

      const confirmation = await connection.confirmTransaction(txid,{
        commitment: "singleGossip"
      });

      const solanaExplorerLink = `https://explorer.solana.com/tx/${txid}?cluster=${SOLANA_NETWORK}`; //bug

      return {
            success: true,
            message: "Move succesful",
            link: solanaExplorerLink
        }

    } catch (error){
    return {
        succes: false,
        message: "Something went wrong..."
    }
    }
  }

  //nya