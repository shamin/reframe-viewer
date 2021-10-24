import { sendMessageToPage } from "../provider/channel";

export const handleReframeEvent = (event) => {
  sendMessageToPage({
    action: "handleReframeEvent",
    reframeEvent: event,
  });
};
