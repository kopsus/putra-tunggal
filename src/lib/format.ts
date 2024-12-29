const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long", // Full weekday name (e.g., "Kamis")
    day: "2-digit", // Day of the month (e.g., "19")
    month: "long", // Full month name (e.g., "September")
    year: "numeric", // Full year (e.g., "2024")
  }).format(date);
};

export { formatIDR, formatDate };
