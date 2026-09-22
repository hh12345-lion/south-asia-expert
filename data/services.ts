export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "bangladesh-reports",
    title: "Bangladesh Country Condition Reports",
    navLabel: "Bangladesh Reports",
    description:
      "Post-August 2024 political transition analysis, BNP/Awami League persecution, Hindu minority, LGBTQ+ criminalisation, and journalist persecution reports for tribunals.",
  },
  {
    id: "india-reports",
    title: "India Country Reports",
    navLabel: "India Reports",
    description:
      "Hindutva/RSS targeting of Muslims, Sikh Khalistan claims, Christian minority persecution, caste discrimination, CAA/NRC analysis, and internal relocation feasibility reports.",
  },
  {
    id: "sri-lanka-reports",
    title: "Sri Lanka Country Reports",
    navLabel: "Sri Lanka Reports",
    description:
      "KK [2021] country guidance framework analysis, Tamil/LTTE association claims, diaspora activism risk, and political opposition persecution reports.",
  },
  {
    id: "nepal-bhutan-reports",
    title: "Nepal/Bhutan Country Reports",
    navLabel: "Nepal/Bhutan Reports",
    description:
      "Maoist-linked claims, Dalit caste discrimination, Madhesi and Janajati ethnic minorities, Lhotshampa persecution, and political dissident reports where no country guidance exists.",
  },
  {
    id: "cpin-challenge",
    title: "CPIN Challenge Reports",
    navLabel: "CPIN Challenge Reports",
    description:
      "Independent analysis challenging decision-makers CPIN positions on South Asian countries, addressing gaps in coverage and profile-specific risk factors.",
  },
  {
    id: "internal-relocation",
    title: "Internal Relocation Analysis",
    navLabel: "Internal Relocation",
    description:
      "Assessment of internal relocation viability within India and other South Asian countries, challenging decision-makers arguments where persecutors have national reach.",
  },
  {
    id: "bangladesh-post-2024",
    title: "Post-August 2024 Bangladesh Reports",
    navLabel: "Post-2024 Bangladesh",
    description:
      "Specialist reports addressing the changed political landscape following Sheikh Hasina's departure, assessing current risk for BNP, Awami League, and minority profiles.",
  },
  {
    id: "oral-evidence",
    title: "Oral Evidence at Tribunal",
    navLabel: "Oral Evidence",
    description:
      "Expert attendance at FTT and Upper Tribunal hearings to give oral evidence, respond to cross-examination, and assist the tribunal with country conditions analysis.",
  },
];
