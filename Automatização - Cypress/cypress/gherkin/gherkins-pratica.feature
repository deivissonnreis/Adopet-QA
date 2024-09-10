Feature: Adotar um pet

    Eu, como usuário do Adopet
    Gostaria, de ter acesso a plataforma
    porque, posso escolher o pet que desejo adotar

Background: Login na página Adopet
Given que estou na página de login do Adopet

Scenario: Validando login
When eu colocar meu usuário e senha corretamente
And eu clico no botão login
Then eu estarei logado no sistema do Adopet
But posso escolher o pet para adoção

Scenario: Adotando pet
When estou logado no Adopet
And escolho o pet que quero adotar <nomePet>
Then eu envio mensagem para a adopet
But eu finalizo a adoção

Examples:
    | nomePet | 
    | "Zelda" | 
    | "Lupe" | 
    | "Kold" | 