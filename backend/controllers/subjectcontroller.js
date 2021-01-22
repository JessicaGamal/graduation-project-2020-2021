const express = require('express');
const Subject = require('../models/subject');


// get a list of all subjects
module.exports = {
    getAllsubjects : async (req , res) => {
        try{
            
            const subjects = await Subject.find(); 
            //console.log(subjects);
            res.json(subjects);
            
        } catch (error) {
            console.log(error.message);
        }
    },
    getTotolHours:async (req,res,next) =>{
        // list of id  of subjects
        const allsubject=req.body;
        let total =0;
        try{
            for (var i = 0; i < allsubject.length; i++) {
            
                let subject = await Subject.findOne({name:allsubject[i]});
                if(subject !=null){
                    total += subject.hours;
                }
            }
            res.json(total);
        } catch (error) {
            console.log(error.message);
        }
    }
};

