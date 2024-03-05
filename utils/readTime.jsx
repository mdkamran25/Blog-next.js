export const readTime = (text, wordsPerMinute) => {
  const words = text.split(/\s+/).length;
  const minutes = words / wordsPerMinute;

  return Math.ceil(minutes);
};
