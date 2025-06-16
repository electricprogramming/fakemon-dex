export function height(meters) {
  const totalInches = meters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}′${inches}″`;
}
export function weight(kg) {
  const pounds = kg * 2.20462;
  return `${pounds.toFixed(1)} lbs`;
}