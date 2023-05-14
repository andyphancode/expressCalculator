const express = require('express');
const app = express();

const ExpressError = require('./expressError');

const { queryNumsToArray, findMean, findMode, findMedian } = require('./helper');

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('No nums detected in query. Separate with commas.', 400)
    }
    let queryNums = req.query.nums.split(',');
    let nums = queryNumsToArray(queryNums);

    if (nums instanceof Error) throw new ExpressError(nums.message);

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    return res.send(result);
})

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('No nums detected in query. Separate with commas.', 400)
    }
    let queryNums = req.query.nums.split(',');
    let nums = queryNumsToArray(queryNums);

    if (nums instanceof Error) throw new ExpressError(nums.message);

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);
})

app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('No nums detected in query. Separate with commas.', 400)
    }
    let queryNums = req.query.nums.split(',');
    let nums = queryNumsToArray(queryNums);

    if (nums instanceof Error) throw new ExpressError(nums.message);

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    return res.send(result);
})


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    return next(err);
  });

app.use(function(err, req, res, next) {

    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
})

app.listen(3000, function() {
    console.log(`Server starting on port 3000`);
  });
  