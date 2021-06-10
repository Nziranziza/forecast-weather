import Footer from 'components/Footer';
import { Typography } from '@material-ui/core';
import Weather from 'components/Weather';

function App() {
  return (
    <div>
      <div style={{ marginBottom: '120px' }} className="container">
        <Typography variant="h2">Weather Forecast</Typography>
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
