import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {

  console.log(videos);

  return (
    <Stack direction='row' flexWrap='wrap'
          justifyContent='start' alignItems='start' gap={2}>
          {videos.map((video, idx) => (
              <Box key={idx}>
                {video.id.videoId && <VideoCard video={video} />}
                {/* {video.id.videoId && <ChannelCard channelDetail={video} />} */}
            </Box>
          ))}
    </Stack>
  )
}

export default Videos
