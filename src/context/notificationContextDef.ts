import { createContext } from "react";
import type { Notification } from "../types/notification";

export type NotificationContextType = {
  notifications: Notification[];
};

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);