import type { ReactNode } from "react";
import { mockNotifications } from "../mock/notifications";
import { NotificationContext } from "./notificationContextDef";

export function NotificationProvider({ children }: { children: ReactNode }) {
  const notifications = mockNotifications;

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
}