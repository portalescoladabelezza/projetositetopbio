export const WHATSAPP_NUMBER = "5521969060505";
export const PRICE_INSTALLMENT = "12x de R$ 30";
export const INITIAL_VACANCIES = 10;
export const REMAINING_VACANCIES = 3; // For high urgency trigger!

// Core message used across all WhatsApp CTA buttons
export const whatsappMessage = `Olá! Quero garantir meu site profissional da oferta de lançamento da Top Site por ${PRICE_INSTALLMENT}. Ainda tem vaga disponível?`;

export const getWhatsappUrl = (text: string) => {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
};

export const INSTAGRAM_URL = "https://instagram.com";
export const FACEBOOK_URL = "https://facebook.com";

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    id: "benefit-professionalism",
    title: "Mais profissionalismo",
    description: "Uma página bem apresentada aumenta significativamente a confiança do seu cliente no seu negócio.",
  },
  {
    id: "benefit-speed",
    title: "Contato mais rápido",
    description: "Um botão proeminente direcionado ao WhatsApp facilita o primeiro atendimento e fecha mais vendas.",
  },
  {
    id: "benefit-all-in-one",
    title: "Tudo em um só site",
    description: "Instagram, WhatsApp, Facebook e as principais informações do seu negócio reunidos em um único site profissional.",
  },
];

export interface Inclusion {
  id: string;
  title: string;
  iconName: string; // Will correspond to Lucide icon name
}

export const INCLUSIONS: Inclusion[] = [
  { id: "inc-1", title: "Site profissional", iconName: "Globe" },
  { id: "inc-2", title: "Botões para Instagram", iconName: "Instagram" },
  { id: "inc-3", title: "Botão para WhatsApp", iconName: "Phone" },
  { id: "inc-4", title: "Botão para Facebook", iconName: "Facebook" },
  { id: "inc-5", title: "Botão flutuante do WhatsApp", iconName: "MessageCircle" },
  { id: "inc-6", title: "Página adaptada para celular", iconName: "Smartphone" },
  { id: "inc-7", title: "Link pronto para divulgar", iconName: "Link2" },
  { id: "inc-8", title: "Layout moderno e comercial", iconName: "TrendingUp" },
];

export interface Nicho {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export const NICHOS: Nicho[] = [
  {
    id: "nicho-1",
    title: "Profissionais autônomos",
    description: "Organize seus contatos, serviços e redes sociais em uma página profissional que vende por você.",
    emoji: "💼",
  },
  {
    id: "nicho-2",
    title: "Designers de sobrancelhas",
    description: "Mostre fotos do seu trabalho, facilite agendamentos rápidos e leve as clientes direto para o WhatsApp.",
    emoji: "✨",
  },
  {
    id: "nicho-3",
    title: "Manicures",
    description: "Divulgue seus principais serviços, horários e atendimento profissional com um site irresistível.",
    emoji: "💅",
  },
  {
    id: "nicho-4",
    title: "Barbeiros",
    description: "Tenha uma página moderna com fotos da barbearia e contato rápido para agendamentos imediatos.",
    emoji: "💈",
  },
  {
    id: "nicho-5",
    title: "Esteticistas",
    description: "Apresente seus procedimentos estéticos, links de redes sociais e botão direto para atrair novas clientes.",
    emoji: "🌸",
  },
  {
    id: "nicho-6",
    title: "Maquiadoras",
    description: "Divulgue seu portfólio de maquiagens, preços sugeridos e facilite pedidos de orçamento rápidos.",
    emoji: "💄",
  },
  {
    id: "nicho-7",
    title: "Loja multimarcas",
    description: "Direcione seus potenciais clientes para produtos em destaque, redes sociais e atendimento instantâneo.",
    emoji: "🛍️",
  },
  {
    id: "nicho-8",
    title: "Pequenos comércios",
    description: "Crie uma presença digital simples, elegante e incrivelmente eficiente para atrair o público do seu bairro.",
    emoji: "🏪",
  },
  {
    id: "nicho-9",
    title: "Prestadores de serviço",
    description: "Facilite pedidos de orçamento detalhados e passe a credibilidade de uma grande empresa no mercado.",
    emoji: "🛠️",
  },
  {
    id: "nicho-10",
    title: "Motoristas de aplicativo",
    description: "Divulgue serviços particulares de viagens diárias, parcerias executivas ou agendamentos corporativos.",
    emoji: "🚗",
  },
  {
    id: "nicho-11",
    title: "Consultores e vendedores",
    description: "Tenha uma belíssima página de apresentação de autoridade para captar leads e agendar mentorias pelo WhatsApp.",
    emoji: "📊",
  },
  {
    id: "nicho-12",
    title: "Atacado e varejo",
    description: "Mostre catálogos virtuais, apresente coleções, conecte canais de venda e venda muito mais rápido.",
    emoji: "🧥",
  },
];

export interface Step {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Você chama no WhatsApp",
    description: "Fale conosco através de um clique rápido e garanta de imediato a sua vaga na oferta especial de lançamento.",
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Envia suas informações",
    description: "Mande o nome do seu negócio, links das redes sociais, fotos, logotipo (se tiver) e seus textos básicos.",
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Criamos sua página",
    description: "Nós desenvolvemos o seu site com visual altamente profissional, layout premium e botões estratégicos de contato.",
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Você começa a divulgar",
    description: "Em poucos dias, receba o site ideal para divulgar no seu Instagram, enviar no WhatsApp ou compartilhar.",
  },
];
