import * as data from "../locators/login_qa/qa_default_data.json"
import * as main from "../locators/login_qa/main.json"
import * as result from "../locators/login_qa/result_page.json"
import * as recovery from "../locators/login_qa/recovery_password_page.json"

describe ('Проверка авторизации', function () {
   
   beforeEach('Начало теста', function () {
      cy.visit('https://login.qa.studio');
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
   });

   afterEach('Конец теста', function () {
      cy.get(result.result_exit).should('be.visible');
      cy.get(result.result_header).should('be.visible')
   });


    it('Верный логин и верный пароль', function () {
         cy.get(main.mail_field).type (data.login);
         cy.get(main.password_field).type (data.password);

         cy.get(main.enter_btn).click();
         cy.get(result.result_header).contains('Авторизация прошла успешно');
   })

     it('Верный логин и неверный пароль', function () {
        cy.get(main.mail_field).type (data.login);
        cy.get(main.password_field).type (data.incorrect_password);

        cy.get(main.enter_btn).click();
        cy.get(result.result_header).contains('Такого логина или пароля нет');;
   })

     it('Неверный логин и верный пароль', function () {
      cy.get(main.mail_field).type (data.incorrect_login);
      cy.get(main.password_field).type (data.password);

      cy.get(main.enter_btn).click();
      cy.get(result.result_header).contains('Такого логина или пароля нет');
   })

   it('Валидация @', function () {
      cy.get(main.mail_field).type (data.login_without_dog);
      cy.get(main.password_field).type (data.password);
  
      cy.get(main.enter_btn).click();
      cy.get(result.result_header).contains('Нужно исправить проблему валидации');
  })

     it('Восстановление пароля', function () {
        cy.get(main.forgot_btn).click();
        cy.get(recovery.recovery_mail_field).type(data.login);
        cy.get(recovery.recovery_send_btn).click();
        cy.get(result.result_header).contains('Успешно отправили пароль на e-mail');
   })

     it('Проверка регистра', function () {
      cy.get(main.mail_field).type ('GerMan@Dolnikov.ru');
      cy.get(main.password_field).type (data.password);

      cy.get(main.enter_btn).click();
      cy.get(result.result_header).contains('Авторизация прошла успешно').should('be.visible');
      cy.get('.success__image').should('be.visible')
    })

})