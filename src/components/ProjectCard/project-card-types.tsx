// Utils
import { Edge } from '../../../pages';

export interface ProjectCardProps {
  edge: Edge;
}

// TODO: change when passing a first project through Context
export interface SimplifiedProjectCardProps {
  edge: Edge | undefined;
}
