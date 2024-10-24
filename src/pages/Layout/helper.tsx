import { COMMON_ROUTES } from "../../router/routesNames";


export const footerProps = () => {
  const newYear = new Date();
  const mounts = Object.values(MOUNTHS)
  const newMount = mounts[newYear.getMonth()];
  return `GTC Kyiv ${newMount} ${newYear.getFullYear()}`;
};



export enum USERCREATETYPE {
  CREATE = "create",
  EDIT = "edit",
}

export enum PRIORITY {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  POSSIBLE = "possible",
}

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

export enum UKRMOUNTS {
  Jan = "Січня",
  Feb = "Лютого",
  Mar = "Березня",
  Apr = "Квітня",
  May = "Травня",
  Jun = "Червня",
  Jul = "Липня",
  Aug = "Серпня",
  Sep = "Вересня",
  Oct = "Жовтня",
  Nov = "Листопада",
  Dec = "Грудня",
}

export enum WEEKDAYS {
  Mon = "Понеділок",
  Tue = "Вівторок",
  Wed = "Середа",
  Thu = "Четвер",
  Fri = "П'ятниця",
  Sat = "Субота",
  Sun = "Неділя",
}

export type DatePattern = {
  mounth: MOUNTHS;
  year: string;
  day: string;
};

export type NewEventData = {
  title?: string;
  description?: string;
  begin: string;
  end: string;
  owner: string | undefined;
  type?: string;
  priority?: PRIORITY;
  id: string;
  photoURL?: string;
};

export enum imageDestination {
  AVATAR = "UsersAvatars/",
  EVENT = "EventsImages/",
}

export type addFileToStorageProps = {
  element: HTMLInputElement;
  userId: string | undefined;
  imagePurpose: imageDestination;
};

