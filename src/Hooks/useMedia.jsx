import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    window.addEventListener('resize', changeMatch);
    changeMatch();
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
