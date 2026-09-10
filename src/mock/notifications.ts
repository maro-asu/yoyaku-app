import type { Notification } from "../types/notification";

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    restaurantId: "1789014997149",
    restaurantName: "プリン",
    message: "本日19:00〜のキャンセルが出ました!",
    createdAt: "2025-01-10 15:30",
    availableSlot: "19:00",
  },
];