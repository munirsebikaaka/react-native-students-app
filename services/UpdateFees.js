export const updateFeesPaymentsHandler = (
  setSelectedStudent,
  feesPayments,
  setFeesPayments,
) => {
  const amount = +feesPayments;
  if (!amount) return;
  setSelectedStudent((student) => ({
    ...student,
    feesAmount: student.feesAmount + amount,
  }));
  setFeesPayments("");
};
