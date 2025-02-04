# Slideshow de Imagens

Este repositório contém um site que exibe um slideshow de imagens em tela cheia, utilizando Jekyll e hospedado no GitHub Pages. As imagens são exibidas automaticamente a partir do diretório `IMG`, sem a necessidade de atualizar manualmente uma lista de arquivos.

## Estrutura do Repositório

A estrutura básica do repositório é a seguinte:


- **`_config.yml`**: Arquivo de configuração do Jekyll.
- **`index.html`**: Página principal que contém a estrutura do slideshow.
- **`styles.css`**: Arquivo de estilos para o slideshow.
- **`script.js`**: Arquivo JavaScript que controla a lógica do slideshow.
- **`IMG/`**: Diretório que contém as imagens a serem exibidas no slideshow.

## Como Adicionar Novas Imagens

1. **Adicionar Imagens**: Coloque as novas imagens no formato retrato dentro do diretório `IMG/`.

2. **Publicar no GitHub**: Faça commit e push das novas imagens para o repositório no GitHub.

Não é necessário realizar nenhuma configuração adicional ou atualizar listas de arquivos; o site será automaticamente atualizado para incluir as novas imagens no slideshow.

## Personalização

- **Intervalo de Tempo**: Para alterar o tempo de exibição de cada imagem no slideshow, modifique o valor da constante `slideInterval` no arquivo `script.js`. O valor é definido em milissegundos. Por exemplo, para definir um intervalo de 3 segundos:

  ```javascript
  const slideInterval = 3000; // 3 segundos```

**Transições**:As transições entre as imagens são controladas pela propriedade transition no arquivo styles.css. Para personalizar o efeito de transição, ajuste a seguinte classe:

  ```Css
.slide {
    transition: opacity 1s ease-in-out;
    /* Modifique a duração e o tipo de transição conforme desejado */
}
```

