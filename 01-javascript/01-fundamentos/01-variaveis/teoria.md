# Variáveis

Variáveis são espaços reservados para armazenar valores ou dados que podem ser usados e manipulados ao longo do programa.

## Tipos de Declarações de Variáveis em JavaScript

### 1. `var`
- Declara uma variável com **escopo global** ou **local** se declarada dentro de uma função.
- É a forma mais antiga de declaração de variáveis em JavaScript, porém hoje é **menos recomendada** devido a possíveis problemas de escopo e reatribuição inesperada.

### 2. `let` (Introduzido no ES6)
- Declara uma variável com **escopo de bloco** (isto é, a variável só existe dentro do bloco `{}` onde foi declarada).
- Permite que o valor seja alterado ao longo do programa, o que a torna ideal para variáveis que podem mudar.

### 3. `const` (Introduzido no ES6)
- Declara uma variável com **escopo de bloco**.
- O valor não pode ser reatribuído, tornando-a ideal para **constantes** ou para tipos que não devem mudar de referência, como objetos e arrays.

> **Nota:** É uma boa prática utilizar `const` sempre que possível, pois ajuda a evitar mudanças indesejadas no valor das variáveis. Use `let` somente quando precisar alterar o valor. O uso de `var` é desencorajado, exceto para compatibilidade com navegadores muito antigos.