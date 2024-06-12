# CONTROLTECH ADMIN

Desenvolvido em Angular, Controltech-Admin é a interface gráfica em ambiente web para um gerenciamento de Ativos e Softwares de maneira intuitíva e flexível .

Vídeo AF -> [link](https://www.youtube.com/watch?v=u1PR1I0n8LI)
# Cenários 


## Cenário: Usuário cadastra Software e insere informações corretas

    Given um usuário que deseja cadastrar um software
    And todas as informações estão corretas
    And seleciona Tipo de Ativo : Software
    When o usuário clicar em cadastrar ativo
    Then o sistema deve cadastrar o software 
    And informar usuário que o software foi cadastrado
    And fechar componente de formulário

## Cenário: Usuário cadastra Software que já existe

    Given um usuário que deseja cadastrar um software
    And o software já foi cadastrado
    When o usuário clicar em cadastrar ativo
    Then o sistema deve identificar que já houve cadastro 
    And informar usuário houve um erro ao cadastrar software
    And recarregar componente de formulário

## Cenário: Usuário cadastra Ativo fisico sem Responsavel

    Given um usuário que deseja cadastrar um Ativo Fisico
    And seleciona Tipo de Ativo : Ativo Fisico
    And não seleciona Usuário Responsável
    When clicar em cadastrar ativo
    Then o sistema deve informar que não é possivel cadastrar sem um responsável
    And sistema deve ''focar'' no campo de Responsável para usuário selecionar

## Cenário: Usuário cadastra Ativo fisico corretamente

    Given um usuário que deseja cadastrar um Ativo Fisico
    And seleciona Tipo de Ativo : Ativo Fisico
    And não seleciona Usuário Responsável
    When clicar em cadastrar ativo
    Then o sistema deve cadastrar no banco de dados
    And sistema deve avisar o usuário que o Ativo Fisico foi cadastrado com suceso
    
## Cenário : Usuário cadastra ativo em local de armazenamento com sucesso
 
    Given um usuário que deseja cadastrar um ativo em um local de armazenamento
    And todas as informações estão corretas
    And seleciona Tipo de Local: Armazém
    When o usuário clicar em cadastrar ativo
    Then o sistema deve cadastrar o ativo no local de armazenamento
    And informar o usuário que o ativo foi cadastrado com sucesso
    And fechar componente de formulário
   
## Cenário : Usuário cadastra ativo em local de armazenamento com erro

    Given um usuário que deseja cadastrar um ativo em um local de armazenamento
    And o local de armazenamento não foi selecionado
    When o usuário clicar em cadastrar ativo
    Then o sistema deve informar que o local de armazenamento é obrigatório
    And sistema deve ''focar'' no campo de Local de Armazenamento para usuário selecionar
    
## Cenário :  Usuário cadastra usuário corretamente

    Given um usuário administrador que deseja cadastrar um novo usuário
    And todas as informações estão corretas
    And seleciona Tipo de Usuário: Padrão
    When o administrador clicar em cadastrar usuário
    Then o sistema deve cadastrar o novo usuário
    And informar o administrador que o usuário foi cadastrado com sucesso
    And fechar componente de formulário
    
## Cenário : Usuário cadastra usuário com e-mail já existente

    Given um usuário administrador que deseja cadastrar um novo usuário
    And o e-mail do novo usuário já está cadastrado
    When o administrador clicar em cadastrar usuário
    Then o sistema deve informar que o e-mail já está em uso
    And recarregar componente de formulário para correção

## Cenário : Usuário cadastra categoria corretamente
   
    Given um usuário que deseja cadastrar uma nova categoria
    And todas as informações estão corretas
    And preenche o nome da categoria
    When o usuário clicar em cadastrar categoria
    Then o sistema deve cadastrar a nova categoria
    And informar o usuário que a categoria foi cadastrada com sucesso
    And fechar componente de formulário

## Cenário : Usuário tenta cadastrar categoria sem nome

    Given um usuário que deseja cadastrar uma nova categoria
    And não preenche o nome da categoria
    When o usuário clicar em cadastrar categoria
    Then o sistema deve informar que o nome da categoria é obrigatório
    And sistema deve ''focar'' no campo de nome da categoria para usuário preencher

## Cenário : Usuário cadastra ativo com código de identificação duplicado
 
    Given um usuário que deseja cadastrar um ativo
    And o código de identificação do ativo já está em uso
    When o usuário clicar em cadastrar ativo
    Then o sistema deve informar que o código de identificação já está em uso
    And recarregar componente de formulário para correção

## Cenário : Usuário cadastra ativo com dados incompletos

    Given um usuário que deseja cadastrar um ativo
    And algumas informações obrigatórias não foram preenchidas
    When o usuário clicar em cadastrar ativo
    Then o sistema deve informar que há informações obrigatórias faltando
    And sistema deve ''focar'' no primeiro campo obrigatório não preenchido para o usuário corrigir


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

