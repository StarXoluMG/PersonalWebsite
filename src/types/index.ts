export interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'work' | 'award' | 'project';
}

export interface NavItem {
  label: string;
  path: string;
  icon?: React.ComponentType;
}