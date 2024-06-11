### CONTROLTECH ADMIN

Desenvolvido em Angular, Controltech-Admin é a interface gráfica em ambiente web para um gerenciamento de Ativos e Softwares de maneira intuitíva e flexível 

## Cenários 
Link video youtube : https://www.youtube.com/watch?v=T25SOe8wn1M

# Cenário: Usuário cadastra Software e insere informações corretas

 
    Given um usuário que deseja cadastrar um software
    And todas as informações estão corretas
    And seleciona Tipo de Ativo : Software
    When o usuário clicar em cadastrar ativo
    Then o sistema deve cadastrar o software 
    And informar usuário que o software foi cadastrado
    And fechar componente de formulário

# Cenário: Usuário cadastra Software que já existe


    Given um usuário que deseja cadastrar um software
    And o software já foi cadastrado
    When o usuário clicar em cadastrar ativo
    Then o sistema deve identificar que já houve cadastro 
    And informar usuário houve um erro ao cadastrar software
    And recarregar componente de formulário

# Cenário: Usuário cadastra Ativo fisico sem Responsavel


    Given um usuário que deseja cadastrar um Ativo Fisico
    And seleciona Tipo de Ativo : Ativo Fisico
    And não seleciona Usuário Responsável
    When clicar em cadastrar ativo
    Then o sistema deve informar que não é possivel cadastrar sem um responsável
    And sistema deve ''focar'' no campo de Responsável para usuário selecionar

## Pré-requisitos

Antes de iniciar, verifique se você tem o seguinte instalado em sua máquina:

- Node.js (versão 17 ou superior)
- npm (Node Package Manager)
- Angular CLI

## Instalação

Siga estas etapas para configurar e executar a aplicação localmente:

1. **Clone o repositório:**
git clone https://github.com/FelipeCherry3/admin-controltech.git

2. **Navegue até o diretório da aplicação:**
3. cd admin-controltech
4. **Instale as dependências do projeto:**
5. npm install
6.  **Inicie o servidor de desenvolvimento:**
7.  ng serve
8.  **Abra seu navegador e vá para:**
9.  http://localhost:4200/


## Contato

Para dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

- [Felipe elias](mailto:224475@facens.br)
- [Caio Augusto](mailto:224120@facens.br)
- [Gabriel Yamaya](mailto:212065@facens.br)
- [Henrique Módolo](mailto:223865@facens.br)
- [Luiz Gustavo](mailto:223608@facens.br)

