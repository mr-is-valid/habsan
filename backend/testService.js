     var Service = require('node-windows').Service;
     // Create a new service object
     var svc = new Service({
          name:'Hello World',
          description: 'The nodejs.org example web server.',
          script: 'E://program file//WebStrom//WebstormProjects//Habsan//backend/app.js'
     });

     // Listen for the "install" event, which indicates the
     // process is available as a service.

     svc.on('install',function(){
               svc.start();
     });

     svc.install();