import { PushNotification as TPushNotification } from "../api/pushNotification/PushNotification";

export const PUSHNOTIFICATION_TITLE_FIELD = "id";

export const PushNotificationTitle = (record: TPushNotification): string => {
  return record.id?.toString() || String(record.id);
};
