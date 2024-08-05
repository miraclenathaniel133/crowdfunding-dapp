import crypto from 'node:crypto';

export class Campaign {
    id;
    owner;
    title;
    goal;
    createdAt;
    contributions;

    /**
     * ### Campaign model
     * @param {*} owner address (e.g., "0x...")
     * @param {*} title string
     * @param {*} goal number
     */
    constructor(owner, title, goal) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.title = title;
        this.goal = goal;
        this.createdAt = Date.now();
        this.contributions = new Map();
    }

    /**
     * ### Campaign getData
     * @description Returns basic campaign data.
     * @returns campaign { 
            id: UUID,
            owner: address,
            title: string,
            goal: number,
            createdAt: number,
            contributions: object
        }
     */
    getData() {
        return {
            id: this.id,
            owner: this.owner,
            title: this.title,
            goal: this.goal,
            createdAt: this.createdAt,
            contributions: Array.from(this.contributions.values()),
        };
    }

    /**
     * ### Campaign addContribution
     * @description Add a contribution to the campaign.
     * @param {*} contribution ContributionModel
     */
    addContribution(contribution) {
        this.contributions.set(contribution.id, contribution);
    }
}
