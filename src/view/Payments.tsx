import React from 'react';

const Payments = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.UI.getFormData().then((res: any) => {
      console.log('res:::', res);
      const transaction = { ...res, pay_type: 'Card', id: 1, access_id: 24 }; // cần access_id và id xem thêm tại docs https://docs.fincode.jp/js#tag/Webhook_/operation/postWebhooksIdNotification
      window.finCode.payments(transaction, (status: any, response: any) => {
        console.log('status::::', status);
        console.log('response::::', response);
      });
    });
  };
  return (
    <div>
      <form
        id='fincode-form'
        style={{ margin: 50, padding: 20, height: '100%' }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div id='fincode'></div>
        <button id='submit'>
          <span>Click here</span>
        </button>
      </form>
    </div>
  );
};

export default Payments;
