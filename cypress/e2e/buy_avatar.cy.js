import * as card_data from "../locators/PB_av/card_data.json"
import * as main_avatar from "../locators/PB_av/entry_data.json"
import * as auth_field from "../locators/PB_av/aut_fields.json"
import * as card_fields from "../locators/PB_av/card_fields.json"

describe ('Покупка аватара', function() {

    it ('Покупка аватара', function() {
    cy.visit ("https://pokemonbattle.ru/login")
    cy.get(auth_field.mail_field).type(main_avatar.login);
    cy.get(auth_field.pass_field).type(main_avatar.password);
    cy.get('.MuiButton-root').click();

    cy.get('.header_card_trainer').click();
    cy.get('.k_mobile > :nth-child(5)').click();
    cy.get('.available > button').first().click();

    cy.get(card_fields.card_number).type(card_data.number);
    cy.get(card_fields.card_exp_field).type(card_data.exp_date);
    cy.get(card_fields.card_cvv_field).type(card_data.cvv);
    cy.get(card_fields.card_name_field).type(card_data.name);
    cy.get(card_fields.pay_btn_field).click();

    cy.get('.style_1_base_input').type(card_data.sms_code);
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
})
})





// Зайти на сайт https://pokemonbattle.ru/login
// Найти поле "почта"
// Ввести правильную почту
// Найти поле "пароль"
// Ввести правильный пароль
// Найти кнопку войти
// Нажать кнопку войти
// Найти кнопку профиль
// Нажать кнопку профиль
// Найти кнопку "смена аватара"
// Нажать кнопку смены аватара
// Выбрать случайный аватар
// Нажать кнопку "купить"
// Найти поле "номер"
// Ввести в поле "номер" карту 4111111111111111
// Найти поле "срок"
// Ввести в поле срок 12/34
// Найти поле "код"
// Ввести в поле код 125
// Найти поле "имя"
// Ввести в поле "имя" VALERY DYMCHENKO
// Найти кнопку "оплатить"
// Нажать кнопку "оплатить"
// Найти поле "код из пуша"
// Ввести в поле "код из пуша" 56456
// Найти кнопку "оплатить"
// Нажать кнопку оплатить
// В окне результата найти фразу "покупка прошла успешно"
// Проверить что видно галку