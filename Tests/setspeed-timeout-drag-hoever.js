fixture("Set page timeout Fixture")
    .page('https://devexpress.github.io/testcafe/example/')


     test.skip('Set Page Timeout test',async t =>{
      await t

       //here we used settestspeed to set the speed or to control the test
    .setTestSpeed(0.01)
        //here we used to don't need to wait until the page is loaded
   // .setPageLoadTimeout(20)
        //if we want to navigate the test from one to another page/site
    .navigateTo('https://google.com');
        });
 

//here it is used to drag the element like from one point to another using testcafe
     test.only('Drag Testcase',async t =>{
await t
.setTestSpeed(0.01)
.click('#tried-test-cafe')
.drag('#slider > span',450,0,{offsetX:10,offsetY:10});
 });


//here it is used to hoever the element ,no need to click that element
     test('hoever test',async t =>{
        await t
        .setTestSpeed(0.01)
        .hoever('#populate');

     });