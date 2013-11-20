var FILE_MAPPING = {
    Mac :　{
        '64bit' : {
            ruby : 'ruby2.0.0',
            nodejs : 'http://nodejs.org/dist/v0.10.22/node-v0.10.22.pkg'
        }
    },
    Windows : {
        '32bit' : {
            ruby : 'http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p247.exe?direct',
            nodejs : 'http://nodejs.org/dist/v0.10.22/node-v0.10.22-x86.msi'
        },
        '64bit' : {
            ruby : 'http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p247-x64.exe?direct',
            nodejs : 'http://nodejs.org/dist/v0.10.22/x64/node-v0.10.22-x64.msi'
        }
    },
    Linux : {
        '32bit' : {
            ruby : 'ruby2.0.0',
            nodejs : 'http://nodejs.org/dist/v0.10.22/node-v0.10.22-linux-x86.tar.gz'
        },
        '64bit' : {
            ruby : 'ruby2.0.0',
            nodejs : 'http://nodejs.org/dist/v0.10.22/node-v0.10.22-linux-x64.tar.gz'
        }
    }
};

module.exports = {
    get : function  (req, res) {
        var os = req.query.os || 'Mac';
        var cpuClass = req.query.cpu || '64bit';

        var target = FILE_MAPPING[os][cpuClass];

        if (os === 'Windows') {
            res.set('Content-Disposition', 'attachment;filename=setup.bat');
        } else {
            res.set('Content-Disposition', 'attachment;filename=setup.sh');
        }

        res.send(target);
    }
};
