const {add,prod}=require('./addprod');

test("testing add 1+2 equalto 3 ",()=>{
    expect(add(1, 2)).toBe(3);
})

test("testing prod 1*2 equal to 2 ",()=>{
    expect(prod(1, 2)).toBe(2);
})
