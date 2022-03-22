import { Contact } from '../types/types';

export const concatLists = (concatedList: Contact[]) => {
  return Array.from(new Set(concatedList.map((item) => item.id))).map((e) =>
    concatedList.find(({ id }) => id === e),
  );
};
