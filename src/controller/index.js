import { CampaignController } from './campaign';
import { ContributionController } from './contribution';

const campaignController = new CampaignController();
const contributionController = new ContributionController();

export const controller = {
    createCampaign: campaignController.createCampaign,
    getAllCampaigns: campaignController.getAllCampaigns,
    getCampaignById: campaignController.getCampaignById,
    contribute: contributionController.contribute,
    getContributionById: contributionController.getContributionById,
};
