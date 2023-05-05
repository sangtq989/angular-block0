# AngularBlock0
## Step to run local blockchain and using code to interact with smart contract
### 1. Download Ganache
Ganache is local blockchain enviroment using for development, has 2 version, 1 is cli only and other is cli + ui
Download cli + ui version in [Ganache](https://trufflesuite.com/ganache/), install and run it
### 2. Download Metamask extensions for browser
Go to browser, get Metamask for browser in (https://metamask.io/download/)
### 3. Connect metamask to Ganache local block chain server
See the video
### 4. Download node package version of truffle
Run `npm install -g truffle`
### 5. Compile smart contract and deploy to Ganache
Navigate to source code root folder
Run `truffle migrate`
Get transaction address of smart contract and replace in app/service/ticket.service.ts `this.contract = new this.web3.eth.Contract(this.abi, 'replace here');`
### 6. Run application 
Run application with `ng serve` and start testing an interact with smart contract with simple UI

