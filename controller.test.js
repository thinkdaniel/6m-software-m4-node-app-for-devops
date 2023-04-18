const targetFn = require("./controller");

describe("the print function", () => {
  // standard best practice
  // pre test clean up
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should respond with 'Hello world!'", () => {
    const mockReq = {};
    const mockRes = {
      send: jest.fn(),
    };

    targetFn(mockReq, mockRes);
    expect(mockRes.send).toHaveBeenCalledWith("Hello world!"); // If you change this value, the test will fail.
  });
});
