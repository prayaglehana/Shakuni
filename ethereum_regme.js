
	   	if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log('localhostconnect');
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        
      
    
        
    
        var rouletteContract = web3.eth.contract ([{"constant":true,"inputs":[],"name":"regTill","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"x","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"DA","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"Fire","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dead","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"person1","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showDeadArray","outputs":[{"name":"","type":"uint8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"b","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"person2","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentRound","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"registerMe","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"Turn","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"makeDeadArray","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"b_","type":"string"}],"name":"getStringB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"a_","type":"string"}],"name":"getStringA","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"address_","type":"address"}],"name":"StringAccepted","type":"event"},{"anonymous":false,"inputs":[],"name":"opponentFound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"DA_","type":"uint8[]"}],"name":"deadArrayCreated","type":"event"}]);
        var factoryContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"createContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getRecentContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"Enroll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"a_","type":"address"},{"indexed":false,"name":"p","type":"address"}],"name":"recentContract","type":"event"}]);

        var fc = factoryContract.at('0xf5d346b20ad3b72bb155c59f12fe6fd4155704eb');

        var recentContract=fc.recentContract();
       var roulette ;
       var person1_add;
       var person2_add;
       var owner;
       var turn;
       var ca;
       $("#status").html('Opponent is not found yet Please Wait');

       

       recentContract.watch(function(err,res){
      
        if(!err){       if(web3.eth.accounts[0]==res.args.p){
                        var stringEvent ;
                        var opponentFound ;
                        console.log('event watching');
                        console.log('b'+res.args.a_);   
                        ca=     res.args.a_;
                        roulette= rouletteContract.at(ca);  
                        roulette.registerMe({from: web3.eth.accounts[0], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
                        stringEvent = roulette.StringAccepted();
                        opponentFound = roulette.opponentFound();
                                                
                        opponentFound.watch(function(err,res){
                            console.log('oponentfound');
                            if(!err)
                                $("#status").html('Opponent Found Click Start');
                                        
                                });


                        stringEvent.watch(function(err,res){
                                if(!err){
                                    console.log('string accep'+res);
                                    if(res.args.address_==web3.eth.accounts[0])
                                        {console.log('string Accepted');
                                        define(function (require, exports, module) {
                                        console.log('roullete address'+ca);
                                       module.exports = { ca:ca};
                                    });
                                        window.location.href = "RECOVER_full_animation_copy.html";}
                                }  });

                    }
                    }
                    else{
                        console.log(err);
                    }
     });
  

        $("#yo").click(function(){
            fc.Enroll({from: web3.eth.accounts[0], gas: 3000000},
            function(error, result){
                    console.log('enrolling'+web3.eth.accounts[0]+" "+result);
            });   
        });



    

        //helojj
        var roulette = rouletteContract.at('0xf5d346b20ad3b72bb155c59f12fe6fd4155704eb');
        
    
        var person1_add;
        var person2_add;
        var owner;
        var turn;
        var stringEvent = roulette.StringAccepted();
        var opponentFound = roulette.opponentFound();
       

        console.log(roulette);
      
        $("#status").html('Opponent is not found yet Please Wait');
        
      //  roulette.registerMe({from: web3.eth.accounts[1], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
      //  roulette.registerMe({from: web3.eth.accounts[2], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
    
      roulette.Turn.call(function(error, result){
        if(!error) turn=result; });

      roulette.owner.call(function(error, result){
        if(!error)
            {
                owner=result;
                web3.eth.defaultAccount =owner;
                $("#owner").html(result);
    
                
            }
        else
            console.error(error);
    });

    


    
    opponentFound.watch(function(err,res){
        if(!err)
            $("#status").html('Opponent Found Click Start');
                    
            });


        stringEvent.watch(function(err,res){
            if(!err){
                console.log('string accep'+res);
                if(res.args.address_==web3.eth.accounts[0])
                    {console.log('string Accepted');
                    window.location.href = "RECOVER_full_animation_copy.html";}
            }  });


    $("#regme").click(function(){
        console.log('you are being registered');
        roulette.registerMe({from: web3.eth.accounts[0], gas: 3000000, value: web3.toWei('1', 'ether')}, function(err, res){});
      
    });

 
    
    $("#start").click(function(){

       								
        roulette.regTill.call(function(err, res){	
            var totalPeople=parseInt(String(res), 10);
          
           if(totalPeople==2)
                    {
            
                    roulette.person1.call(function(err_, res_){	
                        
                        if(res_==web3.eth.accounts[0]){ 
                            console.log('stringA '+ ($("#getStringA").val()).toString() );
                        roulette.getStringA(($("#getStringA").val()).toString(),{from: web3.eth.accounts[0], gas: 3000000},
                        function(error, result){   });   }
                       
                    });
                    roulette.person2.call(function(err_, res_){	
                        if(res_==web3.eth.accounts[0]){
                            console.log('string b'+ ($("#getStringB").val()).toString() );
                            roulette.getStringB(($("#getStringB").val()).toString(),{from: web3.eth.accounts[0], gas: 3000000},
                            function(error, result){});   }
                    });
                
      

          

                    
                    }
        else{
            $("#status").html('Opponent is not found yet Please Wait');
        }});
  });
