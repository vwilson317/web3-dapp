module.exports = {
  contracts_build_directory: "../app/contracts",
  networks: {
    loc_devui_devui: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.18"
    }
  }
};
