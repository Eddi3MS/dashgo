import { Command, Users, PaperPlaneTilt, GitMerge } from "phosphor-react";

export const menuConfig = {
  geral: {
    title: 'GERAL',
    links: [
      {
        id: '1',
        title: 'Dashboard',
        Icon: PaperPlaneTilt,
        href: '/dashboard'
      },
      {
        id: '2',
        title: 'Usuários',
        Icon: Users,
        href: '/users'

      }
    ]
  },
  automacao: {
    title: 'AUTOMAÇÂO',
    links: [
      {
        id: '1',
        title: 'Formulários',
        Icon: Command,
        href: '/'

      },
      {
        id: '2',
        title: 'Automação',
        Icon: GitMerge,
        href: '/'

      }
    ]
  }
}