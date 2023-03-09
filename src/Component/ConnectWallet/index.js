import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import img1 from '../../Image/logo.png'
import "./index.css";

const ConectWallet = () => {
  return (
    <div className='bg_we_zax' >
      <Container>
        <Grid container>
          <Grid item lg={8} md={8} sm={8} xs={12} className="we_zax_heading">
            <h1>
              <b>
              BIGGEST AIRDROP OF THE CRYPTO SPACE!
              </b>
            </h1>
            <p>
            MMIT is set to launch one of the biggest airdrops in the crypto world, distributing millions of tokens to participants who perform simple tasks. MMIT is a new blockchain based cryptocurrency that offers secure and transparent financial  transactions. These airdrops provide a great opportunity for cryptocurrency enthusiasts to earn free tokens in the blockchain space. Don't miss out this opportunity to be a part of one of the biggest airdrops of the crypto world. 
            </p>
            {/* <Button  style={{textAlign:'start',display:'block',backgroundColor:'rgb(255,0,0)',color:'white',marginBottom:'20px',borderRadius:'5px'}}>Connect Wallet</Button> */}
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12} className='inventing_img'>
            <img src={img1} alt=''/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ConectWallet;
