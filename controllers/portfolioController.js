let portfolio=require('../models/portfolio');
let portfolioController={
    getAllPortfolios:function(req,res){
        portfolio.find(function(err,portfolios){
            if(err){
                console.log('err');
                res.send(err.message);
            }else{
                res.render('index',{portfolios});
            }

        });
    },
    createPortfolio:function(req,res){
        let portfolio= new portfolio(req.body);
        portfolio.save(function(err,portfolio){
            if(err){
                console.log(err);
                res.send(err.message);
            }else{
                console.log(portfolio);
                res.redirect('/');

            }
        })
    }
};
module.exports=portfolioController;