export class Survey {
  id!: number;
  title!: string;
  descr!: string;
  imgUrl!: string;
  labBtn!: string;
}

export class Section {
  id!: number;
  title!: string;
}

export class Question {
  id!: number;
  title!: string;
  imgUrl!: string;
}

export class PropositionData {
  id!: number;
  val01!: string;
  val02!: string;
}
