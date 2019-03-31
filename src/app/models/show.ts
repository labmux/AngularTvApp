import {Season} from "./season";

export class Show {
    name: string;
    premiered: string;
    status: string;
    summary: string;
    seasons: Season[];
    image: {orginal: string};

    constructor(args?) {
        if (args) {
            this.name = args.name;
            this.premiered = args.premiered;
            this.status = args.status;
            this.image = args.image;
            this.summary = args.summary;
            this.seasons = args.seasons;
        }
    }
}
