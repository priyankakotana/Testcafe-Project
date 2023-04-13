import {Selector} from 'testcafe';

fixture('Test structure 1') 
    .page ('https://www.google.com/');

  test('First test in TC', async t => {

    await t.wait(1000)
    //maximizeWindow()
           //here testcode 

  });
  fixture('Test structure 2') 
    .page ('https://www.firefox.com/');

  test('First test in TC', async t => {

    await t.wait(1000)
    //maximizeWindow()
           //here testcode 

  });

  