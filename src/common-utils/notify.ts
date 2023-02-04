const notify = async (
  title: string,
  recipientId: number,
  senderId: number,
  category: string,
  type: 'app' | 'browser',
  notificationIcon:string
) => {
  const baseUrl = process.env.MSV_NOTIFICATIONS || 'http://localhost:3001';
  const queryString = `
    mutation createNotification {
      createNotification(
        input: {
          notificationTitle: "${title}"
          recipientId: ${recipientId}
          senderId: ${senderId}
          category: "${category}"
          type: "${type}"
          notificationIcon:"${notificationIcon}"
        }
      ) {
        notificationId
        notificationTitle
        category
        type
        senderId
        recipientId
        notificationIcon
      }
    }
  `;

  const result = await fetch(`${baseUrl}/graphql`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ query: queryString })
  });

  const data = result.json();
  return data;
};

export default notify;
