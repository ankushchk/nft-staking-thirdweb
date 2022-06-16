import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  return (
    <>
      <h1 style={{paddingTop: "200px"}}>Welcome Back 🌈</h1>
      <Link href="/mint">
        <button className={styles.navButton}>Mint from AirDrop</button>
      </Link>
      <Link href="/stake">
        <button className={styles.navButton}>Stake NFTs</button>
      </Link>
      <div className={styles.container}>
        {address ? (
          <>
            <button onClick={disconnectWallet} className={styles.btn}>
              Disconnect Wallet
            </button>
            <p className={styles.address}>
              <strong>Your address:</strong> {address}
            </p>
          </>
        ) : (
          <button onClick={connectWithMetamask} className={styles.btn}>
            Connect with Metamask
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
