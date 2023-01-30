export const filterationType = (data) => {
  //
  const { logId, applicationType, applicationId, actionType, date } = data;
  //
  if (logId) {
    return { type: "logId", value: +logId };
  }
  if (applicationType) {
    return {
      type: "applicationType",
      value: applicationType === "-/-" ? null : applicationType,
    };
  }
  if (applicationId) {
    return {
      type: "applicationId",
      value: applicationId === "-/-" ? null : +applicationId,
    };
  }
  if (applicationType) {
    return { type: "actionType", value: actionType };
  }
  if (date) {
    return { type: "creationTimestamp", value: date };
  }
};
