import { Selector } from 'testcafe';

//it uses standard css selector to locate elements and to select elements on the page,to get their state
//here we are uploading an image from folder
const fileUpload = Selector('#file-upload');
const uploadFileButton = Selector('#file-submit');

fixture('File Upload Fixture')
.page('https://the-internet.herokuapp.com/upload');

test("File Upload test",async t =>{
   await t
   //here we used settestspeed to set the speed or to control the test
   .setTestSpeed(0.01)
   //if we want to upload a file without using additional commands or libraries
   .setFilesToUpload(fileUpload,'../../sspic/sspic.png')
   //if we want to remove the file paths from the specified file upload input then,we use
   .clearUpload(fileUpload)
   .setFilesToUpload(fileUpload,'../../sspic/sspic.png')
   //to click on that button
   .click(uploadFileButton);


});