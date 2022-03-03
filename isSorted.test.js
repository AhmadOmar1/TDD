const { isSorted }  = require("./isSorted");

describe("testing isSorted", () => {
  test(" to be a function", () => {
    expect(typeof isSorted).toBe("function");
  });

  test("to return boolean", () => {
    expect(typeof isSorted()).toBe("boolean");
  });

  test("empty array [] to return true" , ()=>
  {
        expect(isSorted([],0)).toBe(true);
  })
  test("ascending array of length 1 to return true" , ()=>
  {
        expect(isSorted([20],1)).toBe(true);
  })
  test("ascending array of length 2 to return true" , ()=>
  {
        expect(isSorted([1,2],2)).toBe(true);
  })

  test("test ascending array sorted to return true" , ()=>
  {
        expect(isSorted([1,2,3],3)).toBe(true);
  })
  

  
  test("test descending array sorted to return true" , ()=>
  {
        expect(isSorted([3,2,1],3)).toBe(true);
  })

    test("test randommed array sorted to return false" , ()=>
  {
        expect(isSorted([8,1,7,6],4)).toBe(false);
  })
});
