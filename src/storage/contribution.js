export class ContributionStorage {
    contributions;

    constructor() {
        this.contributions = new Map();
    }

    /**
     * ### ContributionStorage getAll
     * @description Get all stored contributions.
     * @returns {*} list ContributionModel[ ]
     */
    getAll() {
        return Array.from(this.contributions.values());
    }

    /**
     * ### ContributionStorage addOne
     * @description Store a single contribution.
     * @param {*} contribution ContributionModel
     */
    addOne(contribution) {
        this.contributions.set(contribution.id, contribution);
    }

    /**
     * ### ContributionStorage getOneById
     * @description Get a single contribution by id.
     * @param {*} id UUID
     * @returns ContributionModel | undefined (not found)
     */
    getOneById(id) {
        return this.contributions.get(id);
    }
}

export const contributionStorage = new ContributionStorage();
