export class CampaignStorage {
    campaigns;

    constructor() {
        this.campaigns = new Map();
    }

    /**
     * ### CampaignStorage getAll
     * @description Get all stored campaigns.
     * @returns {*} list CampaignModel[ ]
     */
    getAll() {
        return Array.from(this.campaigns.values());
    }

    /**
     * ### CampaignStorage addOne
     * @description Store a single campaign.
     * @param {*} campaign CampaignModel
     */
    addOne(campaign) {
        this.campaigns.set(campaign.id, campaign);
    }

    /**
     * ### CampaignStorage getOneById
     * @description Get a single campaign by id.
     * @param {*} id UUID
     * @returns CampaignModel | undefined (not found)
     */
    getOneById(id) {
        return this.campaigns.get(id);
    }

    /**
     * ### CampaignStorage updateOne
     * @description Update a single campaign.
     * @param {*} campaign CampaignModel
     */
    updateOne(campaign) {
        this.campaigns.set(campaign.id, campaign);
    }
}

export const campaignStorage = new CampaignStorage();
