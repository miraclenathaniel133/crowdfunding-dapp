<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Crowdfunding Platform dApp</h3>

  <p align="center">
    The Crowdfunding Platform dApp documentation.
  </p>
</div>

## About
<p>
    Crowdfunding Platform is a decentralized application (dApp) powered by <a href="https://docs.cartesi.io">Cartesi Rollups</a> technology. It allows users to create fundraising campaigns, contribute funds to these campaigns, and track contributions.
</p>

## Project Structure

- `index.js`: Entry point for the dApp, exports controller methods.
- `campaign.js`: Contains the Campaign model, Controller, and Storage classes.
- `contribution.js`: Contains the Contribution model, Controller, and Storage classes.

## Setup & Run Locally

1. **Clone the repo**
   ```sh
   git clone https://github.com/miraclenathaniel133/crowdfunding-dapp.git
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the dApp**
   ```sh
   npm start
   ```

## Usage

### Create a Campaign

**Endpoint**: `/createCampaign`

**Method**: `POST`

**Payload**:
```json
{
  "owner": "0x1234...",
  "title": "Help Us Build a School",
  "goal": 50000
}
```

### Contribute to a Campaign

**Endpoint**: `/contribute`

**Method**: `POST`

**Payload**:
```json
{
  "campaign": "1234-5678...",
  "contributor": "0x1234...",
  "amount": 100
}
```

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
