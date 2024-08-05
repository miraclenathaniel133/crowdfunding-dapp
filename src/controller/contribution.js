import { Contribution } from '../model/contribution';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { campaignStorage } from '../storage/campaign';
import { contributionStorage } from '../storage/contribution';

export class ContributionController {
    /**
     * ### ContributionController contribute
     * @description Contribute funds to a campaign.
     * @param {*} data {campaign: UUID, contributor: address ("0x..."), amount: number}
     */
    async contribute(data) {
        if (!data.campaign || !data.contributor || !data.amount) {
            return await RollupStateHandler.handleReport({
                error: 'Campaign id, contributor address, and amount must be provided.',
            });
        }

        const campaign = campaignStorage.getOneById(data.campaign);

        if (!campaign.id) {
            return await RollupStateHandler.handleReport({
                error: `Campaign not found for id '${data.campaign}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newContribution = new Contribution(data);
            campaign.addContribution(newContribution);
            campaignStorage.updateOne(campaign);
            contributionStorage.addOne(newContribution);

            return {
                ok: true,
                message: `Contribution made successfully to campaign '${campaign.id}'!`,
                data: newContribution.getData(),
            };
        });
    }

    /**
     * ### ContributionController getContributionById
     * @description Get a contribution by its id.
     * @param {*} data contribution id (UUID)
     */
    async getContributionById(data) {
        const contributionId = data[0];
        const contribution = contributionStorage.getOneById(contributionId);

        if (!contribution?.id)
            return await RollupStateHandler.handleReport({
                error: `Contribution not found for id '${contributionId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            details: contribution,
        }));
    }
}
