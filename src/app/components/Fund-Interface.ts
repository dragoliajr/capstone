import { Fund } from '../models/Fund';

export interface UpdateEvent {
  old: Fund;
  new: Fund;
}
