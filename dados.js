    let dados = [
    {
        titulo: "Restaurante",
        descricao: "Estabelecimento comercial onde refeições são preparadas e servidas aos clientes.",
        link: "https://pt.wikipedia.org/wiki/Restaurante",
    },
    {
        titulo: "Cafeteria",
        descricao: "Estabelecimento que serve café, bebidas quentes e lanches rápidos.",
        link: "https://pt.wikipedia.org/wiki/Caf%C3%A9_(restaurante)"
    },
    {
        titulo: "Barbearia",
        descricao: "Local especializado em cortes de cabelo e barba, voltado geralmente para o público masculino.",
        link: "https://pt.wikipedia.org/wiki/Barbearia"
    },
    {
        titulo: "Loja de Roupas",
        descricao: "Estabelecimento que vende roupas e acessórios de moda.",
        link: "https://pt.wikipedia.org/wiki/Loja_de_roupas"
    },
    {
        titulo: "Farmácia",
        descricao: "Estabelecimento onde se comercializam medicamentos e outros produtos de saúde.",
        link: "https://pt.wikipedia.org/wiki/Farm%C3%A1cia"
    },
    {
        titulo: "Supermercado",
        descricao: "Grande loja de autosserviço que vende uma vasta gama de produtos alimentícios e domésticos.",
        link: "https://pt.wikipedia.org/wiki/Supermercado"
    },
    {
        titulo: "Padaria",
        descricao: "Estabelecimento que produz e vende pães, bolos e outros produtos de confeitaria.",
        link: "https://pt.wikipedia.org/wiki/Padaria"
    },
    {
        titulo: "Academia de Ginástica",
        descricao: "Local onde se pratica atividades físicas com o objetivo de melhorar a saúde e o condicionamento físico.",
        link: "https://pt.wikipedia.org/wiki/Academia_(gin%C3%A1stica)"
    },
    {
        titulo: "Salão de Beleza",
        descricao: "Estabelecimento que oferece serviços de beleza, como cortes de cabelo, manicure, pedicure e tratamentos estéticos.",
        link: "https://pt.wikipedia.org/wiki/Sal%C3%A3o_de_beleza"
    },
    {
        titulo: "Pet Shop",
        descricao: "Estabelecimento que comercializa produtos e oferece serviços para animais de estimação.",
        link: "https://pt.wikipedia.org/wiki/Pet_shop"
    },
    {
        titulo: "Loja de Eletrônicos",
        descricao: "Estabelecimento que vende aparelhos eletrônicos, como celulares, computadores e eletrodomésticos.",
        link: "https://pt.wikipedia.org/wiki/Loja_de_eletr%C3%B4nicos"
    },
    {
        titulo: "Escola de Idiomas",
        descricao: "Instituição dedicada ao ensino de línguas estrangeiras.",
        link: "https://pt.wikipedia.org/wiki/Escola_de_l%C3%ADnguas"
    },
    {
        titulo: "Agência de Viagens",
        descricao: "Empresa que oferece pacotes turísticos, passagens aéreas e outros serviços de viagem.",
        link: "https://pt.wikipedia.org/wiki/Ag%C3%AAncia_de_viagens"
    },
    {
        titulo: "Consultoria de Negócios",
        descricao: "Empresa que presta serviços de orientação e planejamento estratégico para outras empresas.",
        link: "https://pt.wikipedia.org/wiki/Consultoria"
    },
    {
        titulo: "Gráfica",
        descricao: "Empresa especializada na impressão de materiais gráficos, como cartazes, panfletos e cartões.",
        link: "https://pt.wikipedia.org/wiki/Gr%C3%A1fica"
    },
    {
        titulo: "Loja de Móveis",
        descricao: "Estabelecimento que vende móveis para residências e escritórios.",
        link: "https://pt.wikipedia.org/wiki/Loja_de_m%C3%B3veis"
    },
    {
        titulo: "Oficina Mecânica",
        descricao: "Estabelecimento onde são realizados reparos e manutenções em veículos.",
        link: "https://pt.wikipedia.org/wiki/Oficina_mec%C3%A2nica"
    },
    {
        titulo: "Pizzaria",
        descricao: "Restaurante especializado na produção e venda de pizzas.",
        link: "https://pt.wikipedia.org/wiki/Pizzaria"
    },
    {
        titulo: "Churrascaria",
        descricao: "Restaurante especializado em servir churrasco e carnes assadas.",
        link: "https://pt.wikipedia.org/wiki/Churrascaria"
    },
    {
        titulo: "Lavanderia",
        descricao: "Estabelecimento onde são oferecidos serviços de lavagem e secagem de roupas.",
        link: "https://pt.wikipedia.org/wiki/Lavandaria"
    },
    {
        titulo: "Papelaria",
        descricao: "Loja que vende materiais escolares, de escritório e outros produtos de papel.",
        link: "https://pt.wikipedia.org/wiki/Papelaria"
    },
    {
        titulo: "Estúdio de Fotografia",
        descricao: "Local onde são realizados ensaios fotográficos e outros serviços relacionados à fotografia.",
        link: "https://pt.wikipedia.org/wiki/Est%C3%BAdio_fotogr%C3%A1fico"
    },
    {
        titulo: "Loja de Brinquedos",
        descricao: "Estabelecimento que comercializa brinquedos para crianças.",
        link: "https://pt.wikipedia.org/wiki/Loja_de_brinquedos"
    },
    {
        titulo: "Mercado de Flores",
        descricao: "Estabelecimento que vende flores, plantas ornamentais e acessórios para jardinagem.",
        link: "https://pt.wikipedia.org/wiki/Florista"
    },
    {
        titulo: "Clínica Médica",
        descricao: "Estabelecimento de saúde que oferece consultas e tratamentos médicos em diversas especialidades.",
        link: "https://pt.wikipedia.org/wiki/Cl%C3%ADnica"
    },
    {
        titulo: "Hotel",
        descricao: "Estabelecimento que oferece hospedagem temporária para turistas e viajantes.",
        link: "https://pt.wikipedia.org/wiki/Hotel"
    },
    {
        titulo: "Creche",
        descricao: "Instituição que cuida e educa crianças pequenas enquanto os pais trabalham.",
        link: "https://pt.wikipedia.org/wiki/Creche"
    },
    {
        titulo: "Estúdio de Tatuagem",
        descricao: "Local onde são realizadas tatuagens e outras formas de arte corporal.",
        link: "https://pt.wikipedia.org/wiki/Tatuagem"
    },
    {
        titulo: "Loja de Calçados",
        descricao: "Estabelecimento que vende sapatos, tênis e outros tipos de calçados.",
        link: "https://pt.wikipedia.org/wiki/Loja_de_cal%C3%A7ados"
    },
    {
        titulo: "Escritório de Arquitetura",
        descricao: "Empresa especializada em projetos arquitetônicos e planejamento urbano.",
        link: "https://pt.wikipedia.org/wiki/Arquitetura"
    }
];
