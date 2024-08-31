const showingValue = (v: number) => {
  return (
    v === 0 ? "0"
    : v < 0 ? `-${v}`
    : `+${v}`
  );
};
