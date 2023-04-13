import { Selector } from 'testcafe';
  
  const interfaceSelect = Selector('#preferred-interface')
  const interfaceOptions =  interfaceSelect.find('#preferred-interface > option:nth-child(3)');
  const submitbutton = Selector('#submit-button')
  
  fixture("Select element from Dropdownlist")
  .page('https://devexpress.github.io/testcafe/example/');

  test('Select element test',async t=>{
         await t
         .setTestSpeed(0.01)
         .click(interfaceSelect)
         .click(interfaceOptions.withText('Both'))
         .click(submitbutton);

  });
