const regex = /(\d{2})(\d{2})/;
export function formatDate(date) {
  return date.replace(regex, "$1/$2");
}
