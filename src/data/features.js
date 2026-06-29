import IconCalculator from '../assets/icons/icon-calculator.svg';
import IconKarma from '../assets/icons/icon-karma.svg';
import IconSupervisor from '../assets/icons/icon-supervisor.svg';
import IconTeamBuilder from '../assets/icons/icon-team-builder.svg';

export const featuresData = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    color: 'success',
    icon: IconSupervisor,
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    color: 'error',
    icon: IconTeamBuilder,
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    color: 'warning',
    icon: IconKarma,
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    color: 'info',
    icon: IconCalculator,
  },
];
