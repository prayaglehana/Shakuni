
	   	if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log('localhostconnect');
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        var db = firebase.database();

var ref_person = db.ref('person_address->contract_address');


function set_ca(pa,ca){
	ref_person.update({
		[pa]:ca
	});
}	

        var factoryContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"createContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"s","type":"string"}],"name":"Enroll","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"a_","type":"address"},{"indexed":false,"name":"p","type":"address"},{"indexed":false,"name":"opponentFound","type":"bool"}],"name":"recentContract","type":"event"},{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecentContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]);

    
        var rouletteContract = web3.eth.contract ([{"constant":true,"inputs":[],"name":"regTill","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"a","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"DA","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"s_","type":"string"}],"name":"registerMe","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"dead","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"person1","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"showDeadArray","outputs":[{"name":"","type":"uint8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"b","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"person2","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"s_","type":"string"}],"name":"getString","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"makeDeadArray","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"winner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"address_","type":"address"}],"name":"StringAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"DA_","type":"uint8[]"}],"name":"deadArrayCreated","type":"event"}]);

        var fc = factoryContract.at('0x8f2cc58be8fc17f4ce32031b18de04152f9c9708');

        var recentContract=fc.recentContract();

        var roulette;
     
       var person1_add;
       var person2_add;
       var owner;
       var ca;
       var turn;
       var opponentFound=false;
     
       
           


       

       recentContract.watch(function(err,res){
      
        if(!err){ 
                if(roulette!==undefined ){        
                                            if( res.args.opponentFound==true && ca==res.args.a_){
                                                        opponentFound=true;       
                                                        console.log('oponentfound');
                                                        $("#status").html('Opponent Found Click Start');}
                                
                                        }
                else    {      $("#status").html('Opponent is not found yet Please Wait');
                        
            

            if(web3.eth.accounts[0]==res.args.p){
                                    var stringEvent ;
                               
                                    console.log('event watching');
                                    console.log('b'+res.args.a_);   
                                    ca=     res.args.a_;
                                    roulette= rouletteContract.at(ca);  
                                    
                                    set_ca(web3.eth.accounts[0].toString(),ca.toString());

                                    console.log('ca'+ca);
                         
                                   if(res.args.opponentFound==true)
                                         {opponentFound=true;
                                        $("#status").html('Opponent Found Click Start');}
          
                                    stringEvent = roulette.StringAccepted();
                                    
                                    
                                    stringEvent.watch(function(err,res){
                                            if(!err){
                                                        console.log('string accep'+res.args.address_);
                                                        

                                                        if(res.args.address_==web3.eth.accounts[0])
                                                            {console.log('string Accepted');
                                                            id = web3.sha3(person1_add.toString()+person2_add.toString());

                                                            db.ref('scores').update({  [id]:1  }, function(error)
                                                            {if(!error)
                                                                window.location.href = "RECOVER_full_animation_copy.html";}
                                                                );  }
                                                        }  
                                            });
                             }
                        
                    }
              
                }
                else{
                    console.log(err);
                }
     });
  

    $("#enroll").click(function(){
            fc.Enroll(($("#getString").val()).toString(),{from: web3.eth.accounts[0], gas: 3000000,value: web3.toWei('1', 'ether')},
            function(error, result){
                    console.log('enrolling'+web3.eth.accounts[0]+" "+result);
            });   
        });

    
    $("#start").click(function(){
                 
                    console.log('start clicked'+opponentFound);
                    if(opponentFound==true){
                        console.log('im in');       
                        roulette.getString(($("#getString").val()).toString(),{from: web3.eth.accounts[0], gas: 3000000},
                        function(error, result){   });   }
                     });
