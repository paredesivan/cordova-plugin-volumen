var exec = require('cordova/exec');

module.exports = {

    setearVolumen: function(volume) {
        exec(null, null, "SystemVolume", "setSystemVolume", [volume]);
    }
};