describe('Teste API', ()=>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZDFmNDc1NS1lNWQxLTQxYTctYWNkMi0zZThmZmI0NjNhZmEiLCJhZG9wdGVyTmFtZSI6IkFuYSBKdWxpYSIsImlhdCI6MTcyMTY3NzgxNSwiZXhwIjoxNzIxOTM3MDE1fQ.olX0PzE91Vr7N8zMxtGDuYXZNtwlF0QXgmc4wNpPwsU`

    it('Testando a API', () => {
        cy.request({
            method:'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/9d1f4755-e5d1-41a7-acd2-3e8ffb463afa',
            headers: {authorization}
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('msg')
        })
    })
})