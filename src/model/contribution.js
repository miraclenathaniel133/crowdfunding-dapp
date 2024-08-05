import crypto from 'node:crypto';

export class Contribution {
    id;
    campaign;
    contributor;
    amount;
    contributedAt;

    /**
     * ### Contribution model
     * @param {*} campaign UUID
     * @param {*} contributor address (e.g., "0x...")
     * @param {*} amount number
     */
    constructor({ campaign, contributor, amount }) {
        this.id = crypto.randomUUID();
        this.campaign = campaign;
        this.contributor = contributor;
        this.amount = amount;
        this.contributedAt = Date.now();
    }

    /**
     * ### Contribution getData
     * @description Returns basic contribution data.
     * @returns contribution { 
            id: UUID,
            campaign: UUID,
            contributor: address,
            amount: number,
            contributedAt: number
        }
     */
    getData() {
        return {
            id: this.id,
            campaign: this.campaign,
            contributor: this.contributor,
            amount: this.amount,
            contributedAt: this.contributedAt,
        };
    }
}
