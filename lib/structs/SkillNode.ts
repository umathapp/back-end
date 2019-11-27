import {Pair} from "./Pair";

export class SkillNode {

    public name: string;

    public children: Pair[] = [];

    public dbRef: string;

    public solutionRef: string;

    public givenRef: string;

    public mistakeCount: number;

    public next: () => Pair;

    constructor(name: string) {
        this.name = name;
        this.dbRef = "";
        this.next = Function;
        this.mistakeCount = 0;
        this.solutionRef = "";
        this.givenRef = "";
    }

}
