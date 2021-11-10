module.exports = {
    app: {
        px: '~',
        token: 'OTA3Njk4OTE1OTA0NzQ1NTMz.YYq-fQ.cUhb3RWUqKxDe0rpnp_tel4NQlA',
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
