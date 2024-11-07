import { STAY } from "@/http/config";

export const updateInfo = (payload) =>
  STAY.put("user", payload, {
    headers: {
      Authorization: localStorage.getItem("authToken"),
    },
  });
export const updatePreferences = (payload) =>
  STAY.post("user/update-preference", payload, {
    headers: {
      Authorization: localStorage.getItem("authToken"),
    },
  });
