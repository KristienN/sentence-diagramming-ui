export type modifierObject = {
  word: string | null;
  type: string;
  modifier: modifierObject[];
};

export type modelObject = {
  subject: {
    word: string | null;
    modifier: modifierObject[];
  };
  predicate: {
    word: string | null;
    modifier: modifierObject[];
  };
  object: {
    word: string | null;
    modifier: modifierObject[];
  };
};
