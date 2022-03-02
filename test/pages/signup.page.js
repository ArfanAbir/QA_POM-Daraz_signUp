

const Page = require('./page');


class signupPage extends Page {


     signUp(){
        return $('#anonLogin');
    };

    register(){
        return $('.login-other span a');
    };

    phone(){
        return $('//*[@id="container"]/div/div[2]/form/div/div[1]/div[1]/input');
    };

    password(){
        return $('.mod-login-input-password input');
    };
    months(){
        return $("div:nth-child(26) > div > div > ul > li:nth-child(7)");
    };
    day(){
        return $("div:nth-child(26) > div > div > ul > li:nth-child(6)");
    };
    year(){
        return $("div:nth-child(26) > div > div > ul > li:nth-child(27)")
    }

    fullName(){
        return $(".mod-login-input-name.mod-input-name > input[type=text]");
    }

    promotion(){
        return $("div[class='mod-login-receive']");
    };

    submitBtn(){
        return $("div[class='mod-login-btn']");
    };














    open() {
        return super.open('');
    }
}

module.exports = new signupPage();
