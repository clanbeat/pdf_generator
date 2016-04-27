const status = () => {
  const getFn = (req, res) => {
    res.json({ status: 'OK', timestamp: Date.now() / 1000 | 0 });
  };

  return {
    get: getFn
  };
};

module.exports = status;
