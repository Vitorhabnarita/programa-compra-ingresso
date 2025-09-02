# 🎟️ e-Ticket - Sistema de Compra de Ingressos

## 📜 Sobre o Projeto

Este projeto é uma simulação da interface de compra de ingressos para um evento, desenvolvido para aprofundar e praticar conceitos de lógica de programação com JavaScript puro (Vanilla JS), com foco em gerenciamento de estoque e validação de dados.

A aplicação permite ao usuário selecionar um tipo de ingresso (Pista, Cadeira Superior ou Cadeira Inferior), especificar a quantidade desejada e efetuar a "compra". O sistema valida a transação em tempo real, verificando se a quantidade solicitada está disponível em estoque e atualizando os valores remanescentes.

---

### ✨ Funcionalidades Implementadas

* **Seleção de Ingresso e Quantidade:** Campos de formulário para o usuário escolher o tipo de ingresso e a quantidade.
* **Gerenciamento de Estoque:** O código controla a quantidade disponível para cada tipo de ingresso, subtraindo os valores a cada compra bem-sucedida.
* **Validação de Estoque:** Antes de confirmar a compra, o sistema verifica se a quantidade desejada é menor ou igual ao estoque disponível, exibindo um alerta de erro caso contrário.
* **Validação de Entrada do Usuário:** A aplicação impede a compra caso a quantidade seja um número inválido (zero, negativo ou não numérico), garantindo a robustez do sistema.
* **Melhora da Experiência do Usuário (UX):**
    * O campo de quantidade é limpo automaticamente após cada compra, facilitando a próxima interação.
    * A tecla "Enter" aciona a função de compra, assim como clicar no botão, tornando a navegação mais fluida.
    * As mensagens de erro são claras, informando qual tipo de ingresso está indisponível.

---

### 💻 Tecnologias Utilizadas

* HTML5
* CSS3
* **JavaScript (Vanilla JS)**

---

### 🚀 Lições Aprendidas

Este projeto foi um excelente exercício para entender o fluxo completo de uma transação simples: **coleta de dados -> validação -> processamento -> atualização da interface**. A parte mais desafiadora e instrutiva foi construir a lógica condicional (`if/else`) para tratar os diferentes cenários (compra bem-sucedida vs. falha por falta de estoque ou entrada inválida). A implementação de validações robustas no início da função (`return` antecipado) se mostrou uma prática fundamental para escrever um código mais limpo e seguro.

*(O HTML e o CSS foram fornecidos como base para o desafio. Minha responsabilidade foi desenvolver todo o arquivo `js/app.js` para implementar as funcionalidades e a interatividade da página.)*
