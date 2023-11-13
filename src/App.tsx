import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TasksIcon from '@mui/icons-material/Assignment';
import { Paper } from '@mui/material';


const App = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

      >
        <BottomNavigationAction label="Shopping List" value={-2} icon={<ShoppingBagIcon />} />
        <BottomNavigationAction label="Chat" value={-1} icon={<ChatIcon />} />
        <BottomNavigationAction label="Home" value={0} icon={<HomeIcon />} />
        <BottomNavigationAction label="Budget" value={1} icon={<CurrencyExchangeIcon />} />
        <BottomNavigationAction label="Tasks" value={2} icon={<TasksIcon />} />

      </BottomNavigation>
      </Paper>

  );
}


export default App