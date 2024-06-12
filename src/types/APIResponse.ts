import { Message } from "@/models/User";
export interface APIResponse {
  success: Boolean;
  message: String;
  isAcceptringMessage?: Boolean;
  messages?: Message[];
}
