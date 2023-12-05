describe("Servers test (with setup and tear-down", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should append server table body with new row on updateServerTable', function() {
    submitServerInfo();
    updateServerTable();
    
    expect(serverTbody.innerHTML).toContain("Alice");
    expect(serverTbody.innerHTML).toContain("$0");
  })

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = "";
    serverId = 0;
    allServers = {};
  });
});