
import { FormControl, MenuItem, Select} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>covid 19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option two</MenuItem>
          <MenuItem value="worldwide">Option three</MenuItem>
          <MenuItem value="worldwide">Option four</MenuItem>
        </Select>
      </FormControl>
      {/*Header*/}
       {/* Title + Select input dropdown field */}

       {/* InfoBoxs */}
       {/* InfoBoxs */}
       {/* InfoBoxs */}

       {/* Table */}
       {/* Graph */}

        {/* Map */}
    </div>
  );
}

export default App;
