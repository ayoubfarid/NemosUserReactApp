 export class AppColor {
  static primary = "#333F62";
  static lightBackground = "#ECEDF1";
  static lightBrown="#F2E2A3";
  static darkBrown="#B2A574";
  static green="#6AA66C";
  static yellow="#EDAF4A";
  static red="#ED4A4A";
}

export const  formatDate=(inputDateString) => {
  const date = new Date(inputDateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
