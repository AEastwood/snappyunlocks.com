export function validateIMEI(imei) {
  if (!imei || typeof imei !== 'string') {
    return false;
  }

  const cleanIMEI = imei.replace(/[-\s]/g, '');
  if (!/^\d{15}$/.test(cleanIMEI)) {
    return false;
  }

  const digits = cleanIMEI.split('').map(Number);
  const sum = digits.reduce((acc, digit, index) => {
    const isOddFromRight = (digits.length - index - 1) % 2 === 1;
    if (isOddFromRight) {
      const doubled = digit * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
    return acc + digit;
  }, 0);

  return sum % 10 === 0;
}
