describe('First test',()=>{
  let testVariable:any;

  beforeEach(()=>{
    testVariable={}
  })

  it('should return true if a is true',()=>{
    // Arrange the data
    testVariable.a= false;

    //act
    testVariable.a = true;

    //assert
    expect(testVariable.a).toBe(true);
  })
})

// User Service getUser method should return the correct given user

// describe('User Service',()=>{
//   describe('getUser() method',()=>{
//     it('should return the correct given user',()=>{

//     })
//   })
// })
