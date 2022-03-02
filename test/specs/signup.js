const signupPage = require('../pages/signup.page');


describe('Daraz Test Demo', () => {
    it('should Open The Main Url of Daraz', async () => {
        await signupPage.open();
    });

    it('Should Click The SignUp-Sign In Button', async () => {
        await signupPage.signUp().click();
    });

    it('Should Click The Register Button', async () => {
        await signupPage.register().click();
    });

    it('should Input The Phone Number', async () => {
        const phoneNumber = await signupPage.phone();
        await phoneNumber.setValue("01713086265");
    });


    // it('should demonstrate the dragAndDrop command', async () => {
    //     const elem = await $('#nc_2_n1z')
    //     const target = await $('#nc_2_imgCaptcha')
    
    //     // drag and drop to other element
    //     await elem.dragAndDrop(target)
    
    //     // drag and drop relative from current position
    //     await elem.dragAndDrop({ x: 340, y: 340 })
    // })

    it('Should Input The Password', async () => {
       const password = await signupPage.password();
       await password.setValue("123456");

    });

    it('Should Fill-Up The Birthday', async () => {
        await signupPage.months();
        await signupPage.day();
        await signupPage.year();

    });

    it('Should Input The Full Name', async () => {
       const name = await signupPage.fullName();
       await name.setValue("Arfan Abir");
    });

    it('Should Skip The Promotion Box', async () => {
        await signupPage.promotion().click();
    });

    it('Should Click The Submit Button', async () => {
        await signupPage.submitBtn().click();
    });


});


