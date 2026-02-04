export const getTranslations = (lang) => {
  const content = {
    pt: {
      navbar: {
        brand: "KNS GLOBAL",
        links: { services: "Servi�os", about: "Sobre", contact: "Contato" },
        cta: "Solicitar Acesso"
      },
      hero: {
        badge: "INFRAESTRUTURA CR�TICA & ENGENHARIA DE REDE",
        title: "CONTINUIDADE ABSOLUTA.",
        subtitle: "Arquitetura de rede certificada SAGE para a elite global. Zero downtime.",
        cta: "Iniciar Di�logo Estrat�gico"
      },
      stats: {
        items: [
          { value: "99.99%", label: "UPTIME GARANTIDO" },
          { value: "150+", label: "CLIENTES ENTERPRISE" },
          { value: "12", label: "PA�SES ATENDIDOS" },
          { value: "15+", label: "ANOS DE EXPERI�NCIA" }
        ]
      },
      services: {
        badge: "// SOLU��ES ENTERPRISE",
        title: "MATRIZ DE SOLU��ES",
        items: [
          { title: "Observabilidade Ativa", desc: "Antecipamos a degrada��o de servi�os cr�ticos." },
          { title: "Sistemas de Auto-Cura", desc: "Protocolos de resposta autom�tica." },
          { title: "Governan�a BGP/Cloud", desc: "Arquitetura de alta performance." },
          { title: "Seguran�a Cibern�tica", desc: "Auditorias n�vel militar." },
          { title: "Engenharia de Data Center", desc: "Redund�ncia N+1." },
          { title: "Multi-Cloud Strategy", desc: "Integra��o AWS, Azure, GCP." }
        ]
      },
      founder: {
        badge: "[ CHIEF ENGINEER ]",
        name: "KALEB NUNES DOS SANTOS",
        role: "Founder & Head of Engineering",
        quote: "Multinacionais n�o podem errar.",
        certification: { badge: "SAGE CERTIFIED", org: "HURRICANE ELECTRIC", desc: "Top 1% Global." }
      },
      testimonials: {
        badge: "// DEPOIMENTOS",
        title: "O QUE DIZEM NOSSOS CLIENTES",
        items: [{ stars: 5, text: "KNS transformou nossa infra.", author: "Carlos Mendes", role: "CTO" }]
      },
      contact: {
        badge: "// COMUNICA��O DIRETA",
        title: "PRONTO PARA PROTEGER SEU IMP�RIO?",
        subtitle: "Entre em contato.",
        form: { name: "Nome", email: "Email", company: "Empresa", challenge: "Desafio", submit: "Enviar" },
        info: { location: "BC, SC", email: "kaleb@kns.com", phone: "+55 47" }
      },
      footer: { rights: "� 2026 KNS GLOBAL." }
    },
    en: { navbar: { brand: "KNS GLOBAL", links: {}, cta: "Access" }, hero: { title: "ABSOLUTE CONTINUITY" }, stats: { items: [] }, services: { items: [] }, founder: { certification: {} }, testimonials: { items: [] }, contact: { form: {}, info: {} }, footer: {} }
  };
  return content[lang] || content['pt'];
};



