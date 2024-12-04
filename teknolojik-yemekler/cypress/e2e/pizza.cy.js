/* eslint-disable no-undef */
describe('Pizza Sipariş Formu Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order');
  });

  it('İsim inputuna metin girilebilir olmalı', () => {
    cy.get('#name')
      .type('John Doe')
      .should('have.value', 'John Doe');
  });

  it('Birden fazla malzeme seçilebilir olmalı', () => {
    cy.get('input[type="checkbox"]')
      .check(['Pepperoni', 'Sucuk', 'Mısır', 'Ananas']);
    cy.get('input[type="checkbox"]:checked').should('have.length', 4);
  });

  it('Boyut seçimi yapılabilir olmalı', () => {
    cy.get('input[name="size"][value="M"]').check().should('be.checked');
  });

  it('Hamur seçimi yapılabilir olmalı', () => {
    cy.get('#crust')
      .select('İnce')
      .should('have.value', 'İnce');
  });

  it('Malzeme seçildiğinde toplam fiyat doğru hesaplanmalı', () => {
    const toppingPrice = 5.0;
    const basePrice = 85.5;

    cy.get('input[type="checkbox"]')
      .check(['Pepperoni', 'Sucuk', 'Mısır'])
      .then(() => {
        const expectedToppingPrice = toppingPrice * 3;
        const expectedTotalPrice = basePrice + expectedToppingPrice;
        cy.contains(`${expectedToppingPrice.toFixed(2)}₺`).should('exist');
        cy.contains(`${expectedTotalPrice.toFixed(2)}₺`).should('exist');
      });
  });

  it('Adet artırıldığında toplam fiyat doğru hesaplanmalı', () => {
    const toppingPrice = 5.0;
    const basePrice = 85.5;
  
    cy.get('input[type="checkbox"]').check(['Pepperoni', 'Sucuk']);
  
    cy.get('button').contains('+').click().click();
  
    cy.contains('span', '3').should('exist');
  
    const expectedPrice = ((basePrice + toppingPrice * 2) * 3).toFixed(2);
    cy.contains(`${expectedPrice}₺`).should('exist');
  });
  
  

  it('Form eksik doldurulduğunda gönderilememeli', () => {

    cy.get('#name')
      .type('John Doe')
      .should('have.value', 'John Doe');
      cy.get('#crust')
      .select('İnce')
      .should('have.value', 'İnce');
    cy.get('button[type="submit"]').click();
  
    cy.get('.form-error')
      .should('exist')
      .and('contain.text', 'Lütfen pizza boyutunu seçiniz.');
  });
  

  it('Form doğru doldurulduğunda başarıyla gönderilmeli', () => {

    cy.intercept('POST', '**/api/pizza', {
      statusCode: 200,
      body: { success: true },
    }).as('postOrder');
  
    cy.get('#name').type('John Doe');
    cy.get('input[name="size"][value="L"]').check();
    cy.get('#crust').select('Kalın');
    cy.get('input[type="checkbox"]').check(['Pepperoni', 'Sucuk', 'Mısır','Jalapeno']);
  
    cy.get('button[type="submit"]').click();
  
    cy.wait('@postOrder').its('response.statusCode').should('eq', 200);
  
    cy.url().should('include', '/success');
  
    cy.contains('SİPARİŞ ALINDI').should('exist');
    cy.contains('John Doe').should('exist');
    cy.contains('L').should('exist');
    cy.contains('Kalın').should('exist');
    cy.contains('Pepperoni, Mısır, Sucuk, Jalapeno').should('exist');
  });
  
  
});
