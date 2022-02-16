const stud = require("../model/Student-model");
const express = require("express");
const mongoose = require("mongoose");

//Get All Student_data
const studData = async (res, req) =>{
    try{
        const student = await stud.find();
        res.json(student);
    } catch(error) {
        res.json({message: error});
    }
};
//Single Student_data
const studData_details = async (res, req) =>{
    try{
        const student = await stud.findById(req.params.studentId);
        res.json(student);
    } catch(error) {
        res.json({message: error});
    }
};
//Add new Student_data
const studData_create = async (res, req) =>{
     
    try{
        const saveStudentData = await student.save();
        res.send(saveStudentData);
    } catch(error) {
        // res.status(400).send(error);
    }
};
//Update Student_data
const studData_update = async (res, req) =>{};
//Delete Student_data
const studData_delete = async (res, req) =>{};

module.exports = {
    studData,
    studData_create,
    studData_delete,
    studData_details,
    studData_update
}