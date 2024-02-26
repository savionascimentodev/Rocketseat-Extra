# Crawling and Indexing

## 3 Estágios do Google

1.  **Crawling**
2.  **Indexing**
3.  **Serving**

O **Crawling** é quando o robô do Google procura na internet por textos, imagens e vídeos. Ele começa procurando por novas páginas que estão entrando na internet.

O **Indexing** é quando o algoritmo do Google observa o conteúdo das páginas, como título, imagens e vídeos, a localização e decide se a página será indexada.

O **Serving** é quando o Google entrega os resultados da pesquisa para o usuário, levando em consideração fatores como localização e tipo de dispositivo. É importante entender esses estágios para compreender como o robô e o algoritmo do Google trabalham.

## Rendering

**O robô precisa interpretar o JavaScript como se fosse HTML para entender o conteúdo da página. O Crawler pode encontrar páginas que não estão completamente renderizadas, ou seja, construídas principalmente com JavaScript.** Isso requer uma fila de renderização antes que o conteúdo possa ser indexado. Vou mostrar duas estratégias para entender melhor o Rendering. Também vou falar sobre frameworks como Vue, Angular e React, que são usados para criar aplicações SPA. Além disso, vou mencionar ferramentas como Next.js, Astro e Wordpress, que ajudam na renderização prévia no servidor. Essas estratégias podem ser úteis para melhorar o processo de indexação pelo Google.

## URL

Uma URL é um **localizador de recursos único**, como uma página HTML, um arquivo JavaScript, uma imagem ou um vídeo.
É importante entender que as **URLs** não devem conter caracteres especiais ou espaços, sendo convertidas para o formato ASCII válido.
Ao criar uma URL, é **recomendado** que ela seja simples, descritiva e contenha palavras relevantes. Além disso, é importante considerar a transformação para UTF-8 e evitar práticas ruins, como o uso de caracteres especiais, underscores e espaços. Problemas comuns podem surgir quando não há um padrão na estrutura da URL, como a presença de muitos parâmetros de pesquisa.

Para resolver esses problemas, é necessário criar uma estrutura de URL organizada e inteligível, bloquear o acesso a URLs problemáticas no arquivo robots.txt e evitar o uso de IDs de sessão nas URLs. Também é importante considerar o uso de certificados SSL para encriptar os dados e transformar o HTTP em HTTPS.
O Google considera URLs com e sem www como diferentes, portanto, é recomendado adicionar todas as versões no Search Console e trabalhar com redirecionamentos canônicos para evitar conteúdo duplicado.

## Links

Os links devem ser **claros** e **explicativos**, utilizando o atributo **"title"** ou o texto alternativo da imagem para fornecer informações sobre a página de destino.
É recomendado usar **textos simples e concisos**, evitando frases genéricas como "clique aqui". Além disso, discutimos sobre links internos, que ajudam o Google a entender a estrutura do seu site, e links externos, que estabelecem confiança e relevância. Também mencionamos a tag "nofollow" para qualificar links externos e evitar que sejam seguidos pelo robô do Google.

## Sitemap

**É um arquivo que lista todas as páginas do seu site.** Ele ajuda os mecanismos de busca a encontrar e indexar seu site de forma eficiente. O Sitemap é útil para comunicar páginas novas, fornecer informações detalhadas sobre o conteúdo do site e é especialmente recomendado para sites grandes e complexos. Existem várias maneiras de criar um Sitemap, incluindo o uso de geradores online ou ferramentas como o Screaming Frog. Recomendamos o uso do xml-sitemaps.com
se você não tiver uma ferramenta que já crie o Sitemap para você.

## Robots.txt

**O robots.txt permite definir permissões e restrições para os bots de busca. É importante ressaltar que o robots.txt não impede que as páginas sejam indexadas pelo Google, mas pode ser usado para bloquear arquivos específicos, como áudio, imagem, vídeo, scripts ou CSS.** No entanto, é preciso ter cuidado ao bloquear esses arquivos para não afetar a funcionalidade das páginas. O arquivo robots.txt deve ser criado na raiz do site, seguindo algumas regras simples. É possível definir diretivas para diferentes user-agents, como o Googlebot, e especificar quais URLs são permitidas ou negadas. **É importante lembrar que o robots.txt funciona apenas no domínio principal e não nos subdomínios. Além disso, pode haver uma demora de até 24 horas para que as alterações no arquivo sejam refletidas.**

## Block Indexing

**Essa estratégia permite que solicitemos ao Google que remova uma página dos resultados de busca.** No entanto, é importante lembrar que essa estratégia não funcionará se a página estiver bloqueada no arquivo "robots.txt". A implementação é simples, basta adicionar uma meta tag com o nome "robots" e o conteúdo "noindex". Isso funciona para todos os crawlers. Também é possível adicionar outras estratégias, como "nofollow", para evitar que os links dentro da página sejam seguidos.

## Canonicalization

**A canonicalização é o processo de determinar qual é a URL verdadeira para o Google, quando há páginas duplicadas ou conteúdo duplicado**. Isso pode acontecer quando há páginas com argumentos de filtro de busca, páginas com HTTP e HTTPS, ou versões de teste que ficaram online. O Google determina a URL canônica, mas podemos ajudar indicando qual é a página verdadeira. Podemos fazer isso através de redirecionamentos e do uso do atributo "relation canonical" no HTML. É importante sempre referenciar a URL canônica ao compartilhar conteúdo e evitar informações divergentes. O Google dará preferência ao HTTPS e considerará as páginas sugeridas no sitemap como canônicas.

## Redirects

**O redirecionamento é uma forma de informar ao Google que uma determinada URL não está mais disponível e foi movida para outro local.** Existem três etapas para configurar o redirecionamento: via servidor, através de respostas HTTP; através de meta tags no código HTML da página; e via JavaScript. Recomenda-se utilizar o redirecionamento via servidor, pois é mais eficiente. Dependendo da ferramenta que você está utilizando, existem outras opções disponíveis. Como programadores, é importante entendermos essas técnicas para implementar o redirecionamento corretamente.

## Structured Data

**Essa é uma forma de ajudar o Google a entender o tipo de conteúdo do seu site e como ele deve ser apresentado nos resultados de pesquisa.** Você pode criar dados estruturados usando ferramentas como WebCode.tools e search.google.com/test/rich-results. O schema.org é uma comunidade aberta que fornece diretrizes e documentação para ajudar na criação desses dados. Você pode testar seus dados estruturados usando a URL ou o snippet de código no schema.org. Lembre-se de sempre atualizar-se sobre as melhores práticas e usar as ferramentas disponíveis para facilitar o processo.

## Sitelinks

**Os Sitelinks são links agrupados que aparecem nos resultados de busca do Google para ajudar os usuários a encontrar informações com mais eficiência.** O Google utiliza um algoritmo de agrupamento de links para exibir esses Sitelinks. Eles são indexados e aparecem quando são úteis para o usuário. **Algumas melhores práticas para ter Sitelinks incluem ter títulos e cabeçalhos relevantes e compactos, uma estrutura lógica de fácil navegação e evitar conteúdo repetitivo.** O Google também dá a dica de que é possível remover um Sitelink removendo a página ou utilizando a estratégia de noindex.
