export const footerProps = () => {
  const newYear = new Date();
  const mounts = Object.values(MOUNTHS)
  const newMount = mounts[newYear.getMonth()];
  return `GTC Kyiv ${newMount} ${newYear.getFullYear()}`;
};

export enum MOUNTHS {
  Jan = "Jan",
  Feb = "Feb",
  Mar = "Mar",
  Apr = "Apr",
  May = "May",
  Jun = "Jun",
  Jul = "Jul",
  Aug = "Aug",
  Sep = "Sep",
  Oct = "Oct",
  Nov = "Nov",
  Dec = "Dec",
}
