import './App.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <Box component="form" noValidate autoComplete='off'>
      <div className="container_white">
        <div className="container_padding">
          <h3 className="container_title">Back to your digital life</h3>
          <p className="container_para">Choose one of the option to go</p>
          <div className="input_card">
            <TextField className="input" id="outlined-basic" label="Email" variant="outlined" />
            <TextField className="input" id="outlined-basic" label="Password" type="password" variant="outlined" />
          </div>
          <div className="line">
            <p className="line_para">Or continue with</p>
          </div>
          <div className="social_card">
            <div className="google">
              <img src="./google.png" alt="google_img" className="social_img" />
            </div>
            <div className="meta">
              <img src="./meta.png" alt="meta_img" className="social_img" />
            </div>
            <div className="apple">
              <img src="./apple.png" alt="apple_img" className="social_img" />
            </div>
          </div>
          <div className="card_button">
            <button class="btn_login">Log in</button>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default App
