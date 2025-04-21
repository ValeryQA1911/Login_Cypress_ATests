<h2>UI Автотесты с использованием Cypress</h2>

> **Статус проекта:**
> 
> В открытом доступе🟢: https://login.qa.studio/


## Цель проекта и описание:
Автоматизировать часть проверок с помощью Cypress, ускорить регресс

## Какие тест-кейсы автоматизировал:
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Авторизация с неверным логином и верным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля

## Детали реализации:

1. Использованы хуки beforeEach и afterEach
![image](https://github.com/ValeryQA1911/atests_cypress/blob/main/static/hooks.png)

2. Переменные данные для авторизации вынесены в отдельный файл
![image](https://github.com/ValeryQA1911/atests_cypress/blob/main/static/data_var.png)

3. Каждая из страниц описана в формате объекта с локаторами
![image](https://github.com/ValeryQA1911/atests_cypress/blob/main/static/locators.png)

## Как запустить через Cypress UI:
1. Скачать проект и открыть в терминале
2. Перейти в директорию проекта
3. Перейти в папку locators > login_qa > qa_default_data.json
4. Заменить заглушки в значениях на реальные
5. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
6. В терминале в папке с проектом запустить npm `npm i`
7. В терминале в папке с проектом запустить npm `npx cypress open`
8. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
9. Выбрать спеку login.qa

Ожидаемый результат: отчет об успешном прохождении тестов

![image](https://github.com/ValeryQA1911/Login_Cypress_ATests/blob/main/static/login_done.png)
