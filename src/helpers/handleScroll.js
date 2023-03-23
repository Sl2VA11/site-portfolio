

const handleScroll = (setIsVisibleNav, scrollTimeout) => {
  const scroll = () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      setIsVisibleNav(true);
    }, 1000);
  };

  window.addEventListener('scroll', scroll);

  scrollTimeout = setTimeout(() => {
    setIsVisibleNav(true);
  }, 1000);
};

export default handleScroll;
