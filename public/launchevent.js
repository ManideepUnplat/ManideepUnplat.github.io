function onNewMessageComposeHandler(event) {
    setSubject(event);
  }
  function onNewAppointmentComposeHandler(event) {
    setSubject(event);
  }
  function setSubject(event) {
    Office.context.mailbox.item.subject.setAsync(
      "Set by an event-based add-in!",
      {
        "asyncContext": event
      },
      function (asyncResult) {
        if (asyncResult.status !== Office.AsyncResultStatus.Succeeded) {
          console.error("Failed to set subject: " + JSON.stringify(asyncResult.error));
        }
        asyncResult.asyncContext.completed();
      });
  }
  
  if (Office.context.platform === Office.PlatformType.PC || Office.context.platform == null) {
    Office.actions.associate("onNewMessageComposeHandler", onNewMessageComposeHandler);
    Office.actions.associate("onNewAppointmentComposeHandler", onNewAppointmentComposeHandler);
  }