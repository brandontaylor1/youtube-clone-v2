import './App.css'
import { Navbar, SearchFeed, VideoDetail, ChannelDetail, Feed } from './components/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/system'

const App = () => {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000', color: 'white'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/search" element={<SearchFeed />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>  
    )
  }
  
export default App
