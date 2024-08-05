import { Campaign } from '../model/campaign';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { campaignStorage } from '../storage/campaign';

export class CampaignController {
    /**
     * ### CampaignController createCampaign
     * @description Create a fundraising campaign.
     * @param {*} data {owner: address ("0x..."), title: string, goal: number}
     */
    async createCampaign(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newCampaign = new Campaign(data.owner, data.title, data.goal);
            campaignStorage.addOne(newCampaign);

            return {
                ok: true,
                message: `Campaign created successfully!`,
                data: newCampaign.getData(),
            };
        });
    }

    /**
     * ### CampaignController getAllCampaigns
     * @description Get all campaigns.
     */
    async getAllCampaigns() {
        return await RollupStateHandler.inspectWrapper(() =>
            campaignStorage.getAll()
        );
    }

    /**
     * ### CampaignController getCampaignById
     * @description Get a campaign by given id.
     * @param {*} data campaign id (UUID)
     */
    async getCampaignById(data) {
        const campaignId = data[0];
        const storageRequest = campaignStorage.getOneById(campaignId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Campaign not found for id '${campaignId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
