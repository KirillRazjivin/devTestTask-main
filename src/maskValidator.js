const maskIsValid = (mask) => {
  if (!mask) 
  return false;
    const validMaskChars = ["*", "A", "a", "1", "#"];

  return validMaskChars.some(char => mask.includes(char));
};

export default maskIsValid;
