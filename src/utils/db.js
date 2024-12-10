const savedProviders = new Set();

const getSavedProviders = async () => Array.from(savedProviders);

const toggleProvider = async (provider) => {
  if (savedProviders.has(provider)) {
    savedProviders.delete(provider);
  } else {
    savedProviders.add(provider);
  }
};

module.exports = { getSavedProviders, toggleProvider };
