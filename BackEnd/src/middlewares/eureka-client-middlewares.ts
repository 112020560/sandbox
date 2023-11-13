const Eureka = require('eureka-js-client').Eureka;

const eurekaHost = (process.env.EUREKA_CLIENT_SERVICEURL_DEFAULTZONE || 'localhost');
const eurekaPort = 8761;
const hostName = (process.env.HOSTNAME || 'localhost')
const ipAddr = 'localhost';

// Configuration
exports.registerWithEureka = function(appName, PORT) {
    const eurekaClient = new Eureka({
        instance: {
            app: appName,
            hostName: hostName,
            // ipAddr: ipAddr,
            port: {
                '$': PORT,
                '@enabled': 'true',
            },
            vipAddress: appName,
            instanceId: 'configurator',
            ipAddr: "0.0.0.0",
            status: "UP",
            dataCenterInfo: {
                '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
                name: 'MyOwn',
            },
            shouldFetchRegistry: true,
            shouldRegisterWithEureka: true,
            validateCertificates: false
        },
        //retry 10 time for 3 minute 20 seconds.
        eureka: {
            host: eurekaHost,
            port: eurekaPort,
            servicePath: '/eureka/apps/',
            maxRetries: 10,
            requestRetryDelay: 2000
        },
    })

    eurekaClient.logger.level('debug')

    eurekaClient.start(error => {
        console.log(error || "configurator service registered")
    });

    function exitHandler(options, exitCode) {
        if (options.cleanup) { }
        if (exitCode || exitCode === 0) console.log(exitCode);
        if (options.exit) {
            eurekaClient.stop();
        }
    }

    eurekaClient.on('deregistered', () => {
        console.log('after deregistered');
        process.exit();
    })

    eurekaClient.on('started', () => {
      console.log("eureka host:", eurekaHost);
    })

    process.on('SIGINT', exitHandler.bind(null, {exit:true}));
};

