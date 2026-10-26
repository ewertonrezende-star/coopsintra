# Mapa Stock – Cooperativa Agrícola de Sintra

Aplicação web (PWA) para gestão de mapas de stock e encomendas das lojas da **Cooperativa Agrícola de Sintra**.

## Acesso

🌐 **[Abrir aplicação](https://ewertonrezende-star.github.io/coopsintra/)**

## O que faz

A aplicação permite à **Central / Compras** publicar dados de stock e vendas e às **lojas** preencher o mapa de encomendas por fornecedor, de forma online e sincronizada.

### Central / Compras
- Criar um novo mapa (gera um código/link)
- Carregar ficheiros de vendas por loja (Artigo, Stock, Vendas)
- Publicar os dados online (Supabase)
- Partilhar o link com as lojas

### Loja
- Entrar com o código do mapa
- Escolher a loja e o fornecedor
- Ver stock do sistema, vendas e calcular previsão de encomenda
- Indicar stock real e alterações
- Guardar online, exportar Excel, imprimir ou enviar por email

## Lojas

| Código | Loja              |
|--------|-------------------|
| AL     | Albarraque        |
| AM     | Arneiro Marinheiro|
| CO     | Colares           |
| MM     | Mem Martins       |
| LC     | Sintra            |
| SA     | Sabugo            |

## Fornecedores (exemplos)

- Ribeiros – Ind. e Com. de Cereais  
- Avenal Petfood  
- Rações Galrão  
- (outros configurados na aplicação)

## Fluxo típico

1. **Central** cria o mapa e carrega os ficheiros de vendas de cada loja  
2. Copia o **link** e envia às lojas  
3. Cada **loja** abre o link, escolhe a loja e o fornecedor  
4. Preenche stock real e encomenda  
5. Guarda online (os dados ficam disponíveis para a central)

## Funcionalidades

- Mapa de stock por fornecedor  
- Cálculo de previsão de encomenda  
- Observações gerais e por artigo  
- Exportação para Excel / CSV  
- Impressão  
- Envio por email  
- **PWA** — pode ser instalada no telemóvel ou tablet  
- Funciona online com sincronização via Supabase  

## Tecnologias

| Tecnologia   | Uso                          |
|--------------|------------------------------|
| HTML / CSS / JS | Interface                 |
| SheetJS      | Leitura de ficheiros Excel   |
| Supabase     | Armazenamento online         |
| Service Worker + Manifest | PWA (instalável) |

## Estrutura do repositório

```
coopsintra/
├── index.html              # Aplicação principal
├── logo-coopsintra.png     # Logótipo
├── manifest.webmanifest    # Configuração PWA
├── sw.js                   # Service Worker
├── icons/                  # Ícones da app (192 / 512)
└── README.md
```

## Como usar (resumo)

1. Abra a aplicação no browser  
2. **Central:** deixe o código vazio para criar um mapa novo → carregue os ficheiros → copie o link  
3. **Loja:** cole o código (ou abra o link) → escolha a loja → selecione o fornecedor → preencha e guarde  

## Contacto

**Cooperativa Agrícola de Sintra**  
[coopsintra.pt](https://coopsintra.pt)
