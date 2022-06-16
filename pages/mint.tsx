import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  const address = useAddress();

  const connectWithMetamask = useMetamask();

  const nftDropContract = useNFTDrop(
    "0xceB16C77099d0cA0D57996224a8b6Ab52eB6628B"
  );

  async function claimNFT() {
    try {
      const tx = await nftDropContract?.claim(1);
      console.log(tx);
      alert("NFT claimed!");
      router.push(`/stake`);
    } catch (error) {
      console.error(error);
      alert("Error claiming NFT");
    }
  }

  return (
    <>
   <Link href="/"><span style={{display: "flex", paddingTop: "10px", paddingLeft: "10px", cursor: "pointer"}}>back</span></Link> 
    <h1>Mint the NFT from the AirDrop</h1>
    <div className={styles.container}>
        {!address ? (
            <button className={`${styles.mainButton} ${styles.spacerBottom}`} onClick={connectWithMetamask}>
                Connect your Wallet
            </button>
        ): (
            <button className={`${styles.mainButton} ${styles.spacerBottom}`} onClick={() => claimNFT()}>
                Claim An NFT!
            </button>
        )}
    </div>
    </>
  );
};

export default Mint;
