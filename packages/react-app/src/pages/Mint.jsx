import { Box, styled, Button } from "@mui/material";
import { Helmet } from "react-helmet";
import { TitleFont } from "../components/Font/TitleFont";
import { APP_TITLE, PAGE_TITLE_MINT } from "../utils/constants";
// import { ContentFont } from '../components/Font/ContentFont';

import Mintgif from "../assets/img/tvpunks-second-gif.gif";
import { useState } from "react";
// import Web3 from 'web3';
import { parseEther } from "@ethersproject/units";
import { ETH_VAL } from "../constants";

export const Mint = ({ contract, signer, remainTokenCount }) => {
  const [amount, setAmount] = useState(ETH_VAL);
  const [mintCount, setMintCount] = useState(1);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [minting, setMinting] = useState(false);

  const _decreaseMintCount = () => {
    if (mintCount == 1) return;
    setMintCount(mintCount - 1);
  };

  const _increaseMintCount = () => {
    if (mintCount == 20) return;
    setMintCount(mintCount + 1);
  };

  const mintNftHandler = async () => {
    setMinting(true);
    try {
      const mintFunction = contract.connect(signer)["mint"];
      const hash = await mintFunction(mintCount, {
        value: parseEther((amount * mintCount).toString()),
      });
      await hash.wait();
      setMinting(false);
    } catch (e) {
      setMinting(false);
      console.log(e);
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <Button
        onClick={connectWalletHandler}
        variant="contained"
        sx={{
          border: "7px solid #626262",
          background: "transparent",
          borderRadius: "3rem",
          padding: "0px 40px",
        }}
      >
        <TitleFont fontWeight="bold" size={50} color="#626262">
          Connect Wallet
        </TitleFont>
      </Button>
    );
  };
  const mintNftButton = () => {
    return (
      <Button
        onClick={mintNftHandler}
        variant="contained"
        sx={{
          border: "7px solid #626262",
          background: "transparent",
          borderRadius: "3rem",
          padding: "0px 40px",
        }}
      >
        <TitleFont fontWeight="bold" size={50} color="#626262">
          Mint
        </TitleFont>
      </Button>
    );
  };

  // const _connectWallet = async () => {
  //   const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  //   const accounts = await web3.eth.requestAccounts();
  //   setAccount(accounts[0]);
  // }

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_MINT} | {APP_TITLE}
        </title>
      </Helmet>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            p: 3,
            paddingBottom: 0,
            paddingTop: 3,
            position: "relative",
          }}
        >
          <CenterImgWrapper>
            <img src={Mintgif} alt="mint-gif" />
          </CenterImgWrapper>
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            onClick={() => {
              _decreaseMintCount();
            }}
            variant="contained"
            sx={{
              border: "7px solid #626262",
              background: "transparent",
              borderRadius: "10px",
              padding: "0px 40px",
            }}
          >
            <TitleFont fontWeight="bold" size={50} color="#626262">
              -
            </TitleFont>
          </Button>
          <TitleFont fontWeight="bold" size={50} color="#626262">
            {mintCount}
            {/* {remainTokenCount} */}
          </TitleFont>

          <Button
            onClick={ _increaseMintCount}
            variant="contained"
            sx={{
              border: "7px solid #626262",
              background: "transparent",
              borderRadius: "10px",
              padding: "0px 40px",
            }}
          >
            <TitleFont fontWeight="bold" size={50} color="#626262">
              +
            </TitleFont>
          </Button>
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {currentAccount ? mintNftButton() : connectWalletButton()}
        </Box>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            pb: 2,
          }}
        >
          <TitleFont fontWeight="bold" size={30} color="#626262">
            Mint Price : 0.03 ETH
          </TitleFont>
        </Box>
      </Box>
    </>
  );
};

const CenterImgWrapper = styled("div")`
  @media (max-width: 991px) {
    display: none;
  }

  img {
    width: 425px;
  }
`;
