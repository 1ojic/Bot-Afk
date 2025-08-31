// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1298990988391350333",
        serverId: "1137919486167629924",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
