describe('Pizza Sipariş Formu Testleri', () => {
    it('İsim inputuna metin girilebilir olmalı', () => {
      cy.visit('http://localhost:5173/order');
      cy.get('#name')
        .type('John Doe')
        .should('have.value', 'John Doe');
    });
  
    it('Birden fazla malzeme seçilebilir olmalı', () => {
      cy.visit('http://localhost:5173/order');
      cy.get('input[type="checkbox"]')
        .check(['Pepperoni', 'Sucuk', 'Mısır', 'Ananas']);
      cy.get('input[type="checkbox"]:checked').should('have.length', 4);
    });
  
    it('Form gönderilebilir olmalı', () => {
      cy.visit('http://localhost:5173/order');
  
      cy.get('#name').type('John Doe');
      cy.get('input[name="size"][value="Orta"]').check();
      cy.get('#crust').select('Kalın');
      cy.get('input[type="checkbox"]').check(['Pepperoni', 'Sucuk', 'Mısır', 'Ananas']);
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/success');
      cy.contains('TEBRIKLER!').should('exist');
    });
  });
  