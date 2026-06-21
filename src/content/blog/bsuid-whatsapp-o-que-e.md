---
title: "BSUID no WhatsApp: o que é e o que muda no seu atendimento"
description: "BSUID é o novo identificador da Meta para a API do WhatsApp e já está em vigor. Entenda o que é, o que muda no seu CRM — e por que a Kora já está preparada."
date: 2026-06-14
category: "WhatsApp API"
author: "Equipe Kora"
image: "/blog/images/bsuid-whatsapp-kora.webp"
tags: ["whatsapp api", "bsuid", "meta", "integração", "crm", "atendimento"]
---

Se a sua empresa atende ou vende pelo WhatsApp, há uma sigla nova que você precisa conhecer: **BSUID**. E não é previsão para o futuro: essa mudança da Meta **já está em vigor** e mexe com algo que todo sistema de atendimento dava como certo — o número de telefone como "RG" do cliente.

A boa notícia vem antes de tudo: **se você atende pela Kora, já está protegido.** Nós nos adiantamos e a plataforma já opera com o BSUID. Ainda assim, vale entender o que está acontecendo — porque isso afeta diretamente **histórico de conversas, CRM e integrações**.

<div class="not-prose my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6 flex gap-4 items-start">
  <span style="background:#10b981;color:#fff" class="shrink-0 inline-flex size-9 rounded-full items-center justify-center">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </span>
  <div>
    <p class="font-bold" style="color:#065f46">A Kora já está preparada para o BSUID</p>
    <p class="text-sm mt-1" style="color:#047857">A atualização já está valendo, e a Kora já adaptou tudo nos bastidores. Se você atende pela Kora, seus contatos e seu histórico continuam intactos — você não precisa fazer absolutamente nada.</p>
  </div>
</div>

## O que é o BSUID (Business Scoped User ID)?

**BSUID** significa *Business Scoped User ID* — em português, algo como "identificador de usuário no escopo do negócio". É um **código único** que a Meta passa a usar para representar cada usuário do WhatsApp dentro da API Business, **complementando (e, aos poucos, substituindo) o número de telefone** como forma de identificar com quem você está conversando.

Na prática: até agora, quando uma mensagem chegava, sua plataforma sabia quem era o cliente pelo **número**. Daqui pra frente, a referência confiável passa a ser o **BSUID**.

## Por que a Meta criou o BSUID?

A resposta curta é **privacidade**. A Meta está caminhando para um WhatsApp onde a pessoa pode **conversar com empresas sem expor o número de telefone**, e está liberando **usernames** (nomes de usuário) como forma de contato. Com isso, o número deixa de ser um identificador estável e universal — alguém pode ocultá-lo, ou te procurar só pelo username.

Ou seja: amarrar o cliente ao número de telefone vira terreno movediço. O BSUID resolve isso dando um identificador próprio, pensado para essa nova realidade.

## Como o BSUID funciona na prática

Alguns pontos técnicos que importam:

- **Formato:** o BSUID segue o padrão `{código do país}.{até 128 caracteres}`.
- **Escopo por negócio:** ele é único **dentro do seu portfólio de negócios**, e não globalmente. O mesmo cliente pode ter BSUIDs diferentes em empresas diferentes (de novo: privacidade).
- **Estabilidade:** o BSUID **se mantém** se a pessoa trocar o username, mas **é regenerado** se ela trocar o número de telefone.
- **Nos webhooks:** ele aparece nos eventos (com campos de origem e destino). E atenção: o campo do **número (`from`) pode vir vazio** quando o usuário opta por ocultar o telefone.
- **Exceção:** templates de **autenticação** (aqueles códigos de verificação) ainda exigem o número de telefone.

<div class="not-prose my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
  <p class="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Exemplo de BSUID</p>
  <code style="background:#0f172a;color:#7dd3fc;display:inline-block;padding:.5rem .8rem;border-radius:.5rem;font-size:.95rem">BR.13491208655302741918</code>
  <p class="text-sm text-slate-600 mt-3">Leitura: <strong>{código do país}</strong>.<strong>{até 128 caracteres}</strong> — único por portfólio de negócios.</p>
</div>

## O cronograma: já está em andamento

Isto não é "vem aí" — já começou. A implementação do BSUID **teve início em março de 2026** e segue ao longo do ano, com os **usernames** sendo liberados **a partir de junho de 2026**. Durante a transição, a Meta oferece o **Livro de Contatos** (Contact Book) para relacionar os contatos antigos (por número) com a nova identificação.

Ou seja: quem usa a API precisa estar pronto **agora** para conviver com os dois mundos. A Kora acompanha esse calendário desde o início e já ajustou a operação.

## O que muda no seu atendimento e no seu CRM

Aqui está o ponto que realmente importa para o negócio. **Todo sistema que identifica o cliente pelo número** — CRM, planilha, integração caseira — corre o risco de **perder a rastreabilidade** se não se adaptar. Os sintomas seriam clássicos e dolorosos:

- conversas que "não reconhecem" o cliente que já te falou antes;
- histórico que se perde quando a pessoa muda de número ou oculta o telefone;
- integrações customizadas que quebram porque esperavam um número e receberam um campo vazio.

Em um [CRM para WhatsApp](/blog/crm-para-whatsapp-guia-completo) bem feito, cada conversa carrega valor, etapa e histórico — e isso só continua funcionando se a base de identificação acompanhar a mudança da Meta.

## A Kora já resolveu isso por você

Aqui não tem "vamos nos adaptar". A Kora **já está adaptada** ao BSUID — a mudança já está em vigor e, para quem atende pela plataforma, ela passou despercebida. De propósito.

Isso acontece porque, na Kora, o histórico do cliente fica amarrado ao **contato dentro do sistema** — com o card no [funil do CRM](/recursos/crm-whatsapp), as conversas do [multiatendimento](/recursos/multiatendimento-whatsapp) e os agendamentos —, e **não a um número solto** que a Meta pode trocar ou ocultar. Com o BSUID em cena, a plataforma faz o trabalho pesado nos bastidores; para você, o cliente continua sendo o mesmo, com a mesma ficha e o mesmo histórico.

Traduzindo: a parte técnica é com a gente. **A sua parte continua sendo o relacionamento e a gestão.**

## Checklist: como se preparar

Para quem mantém integração própria com a API:

1. **Mapeie** todos os lugares onde você usa o número como chave do cliente.
2. **Comece a armazenar o BSUID** como identificador principal, mantendo o número como dado secundário.
3. **Trate campos vazios** — não assuma que o número sempre virá preenchido.
4. **Teste os webhooks** com os novos campos antes da virada.
5. **Use o Livro de Contatos** da Meta para a transição dos contatos existentes.

Para a maioria das empresas, porém, a melhor preparação é mais simples: **operar numa plataforma oficial que cuide disso por você.**

## Conclusão

O BSUID é a Meta deixando o WhatsApp mais privado — e, de quebra, lembrando todo mundo de que apostar só no número de telefone como identidade do cliente ficou arriscado. A mudança **já está valendo**. Quem usa uma plataforma séria na API oficial já atravessou essa virada sem sentir; quem depende de gambiarra vai sentir. **Na Kora, isso já está resolvido — hoje.**

<div class="not-prose my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 text-center">
  <p class="text-xl font-bold" style="color:#0f172a">Atenda na API oficial — com o BSUID já resolvido pra você.</p>
  <p class="text-sm text-slate-600 mt-1.5">Demonstração gratuita, sem compromisso.</p>
  <a href="/recursos/multiatendimento-whatsapp" style="background:#004add;color:#fff" class="mt-5 inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm no-underline">Ver o atendimento no WhatsApp oficial →</a>
</div>
