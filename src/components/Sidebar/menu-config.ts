import { Command, Users, PaperPlaneTilt, GitMerge } from "phosphor-react";

export const menuConfig = {
  geral: {
    title: 'GERAL',
    links: [
      {
        id: '1',
        title: 'Dashboard',
        Icon: PaperPlaneTilt
      },
      {
        id: '2',
        title: 'Usuários',
        Icon: Users
      }
    ]
  },
  automacao: {
    title: 'AUTOMAÇÂO',
    links: [
      {
        id: '1',
        title: 'Formulários',
        Icon: Command
      },
      {
        id: '2',
        title: 'Automação',
        Icon: GitMerge
      }
    ]
  }
}