export class Article{
    
    title: string;
    link: string;
    votes: number;

    /**
     * 
     * @param titele: the title of article
     * @param link:  the link to this article
     * @param votes:  initial number of votes for this article
     */
    constructor(titele: string, link:string, votes? : number)
    {
        this.title = titele;
        this.link  = link;
        this.votes = votes;
    }

    /**
     * increases number of votes of this article
     */
    voteUp()
    {
        ++this.votes;
    }

    /**
     * decreases number of votes of this article
     */
    voteDown()
    {
        --this.votes;
    }
}