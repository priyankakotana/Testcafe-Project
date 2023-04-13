fixture('Navigate Example')
.page('https://www.turbify.com/')
 
test('navigate test',async t =>{
      await t
      .navigateTo("https://www.turbify.com/hosting")
      
});