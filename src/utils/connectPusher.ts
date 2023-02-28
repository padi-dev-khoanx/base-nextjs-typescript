import Pusher from 'pusher-js';
import { toast } from 'react-toastify';

export const connectPusher = (
  channelName: string,
  eventName: string,
  action: () => void,
  onSubscriptionSucceeded?: () => void,
  onSuccess?: (response: any) => void,
  onError?: () => void,
) => {
  Pusher.logToConsole = true;
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? '9f51d3cd861b06e4258d', {
    cluster: 'ap1',
  });

  const channel = pusher.subscribe(channelName);

  channel.bind('pusher:subscription_succeeded', function () {
    if (onSubscriptionSucceeded) {
      onSubscriptionSucceeded();
    }
  });

  channel.bind(eventName, function (data: any) {
    const response = JSON.parse(data.message);
    action();
    if (response.status === 'success') {
      toast.success(response.message);
      if (onSuccess) {
        onSuccess(response);
      }
    }
    if (response.status === 'error') {
      toast.error(response.message);
      if (onError) {
        onError();
      }
    }
    channel.unbind(eventName);
    pusher.unsubscribe(channelName);
  });
};
