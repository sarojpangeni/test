import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function About() {

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);


  const progressRef = React.useRef(() => { });
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress === 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        setProgress(progress + 1);
        if (buffer < 100 && progress % 5 === 0) {
          const newBuffer = buffer + 1 + Math.random() * 10;
          setBuffer(newBuffer > 100 ? 100 : newBuffer);
        }
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div className='bg-white py-16 font-sans text-gray-400 p-10'>
      <h1 className='flex items-center justify-center text-4xl font-bold m-10 text-gray-500'>About</h1>
      <div className='p-10 m-10'>It is an amazng one-page theme with great features that offers an incredible experience. It is easy to install, make changes,
        adapt for your business. A modern design with clean lines and styling for a wide variety of content,
        exactly how a business design should be. You can add as many images as you want to the main header area and turn them into slider.</div>
      <div>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        </Box>
      </div>
    </div>
  )
}

export default About