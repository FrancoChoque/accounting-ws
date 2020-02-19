exports.index = (req, res) => {
  res.status(200).json({ transactions: req.session.transactions });
};

exports.show = (req, res) => {
  const { id } = req.params;
  const transaction = req.session.transactions.find(each => each.id === id);
  res.status(200).json({ transaction });
};

exports.store = (req, res) => {
  const { transaction } = req.body;
  if (transaction.type === 'debit' && transaction.amount > req.session.user.balance) {
    res.status(400).json({ message: 'Invalid amount' });
    return;
  }
  const amount = transaction.type === 'debit' ? transaction.amount * -1 : transaction.amount;
  req.session.user.balance += amount;
  const newTransaction = {
    ...transaction,
    id: Math.floor(Math.random() * 1000001),
    effectiveDate: new Date().toISOString(),
  };
  req.session.transactions.push(newTransaction);
  res.status(200).json({});
};
