/** @format */

export {};

declare global {
	interface Window {
		electron: {
			send(channel: string, ...args: any[]): void;
			receive(channel: string, callback: (...args: any[]) => void): void;
			once(channel: string, callback: (...args: any[]) => void): void;
			minimize(): void;
			restore(): void;
			maximize(): void;
			close(): void;
		};
	}
}
