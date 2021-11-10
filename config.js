module.exports = {
    app: {
        px: '~',
        token: 'OTA3Njk4OTE1OTA0NzQ1NTMz.YYq-fQ.P8huCph6gx0EeSb_iucpOPPYIZg',
        playing: 'by HAdes.. NAh j.k...\n Zerio ❤️',
        
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
